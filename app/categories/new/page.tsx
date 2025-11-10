"use client";

import FormBox from "@/components/ui/FormBox";
import MainLayout from "@/components/ui/MainLayout";
import MainToolBar from "@/components/ui/MainToolbar";
import ToolbarButton from "@/components/ui/ToolbarButton";
import Input from "@/components/ui/input/Input";
import Files from "@/components/ui/input/Files";
import KeyVal from "@/components/ui/input/KeyVal";
import { useState, useEffect } from "react";

interface Props {}

const LOCAL_STORAGE_KEY = "categoryFormData";

const Page = (props: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        ordering: 1,
        parentCategory: "",
        urls: [] as string[],
    });

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const categoryOptions = [
        "- select -",
        "Electronics",
        "Clothing",
        "Home & Garden",
        "Sports",
        "Toys",
    ];

    // Load from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setFormData((prev) => ({ ...prev, ...parsed.formData }));

            if (parsed.files) {
                // Only store file metadata, cannot restore File objects
                setSelectedFiles([]);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({
                formData,
                files: selectedFiles.map((f) => ({ name: f.name, size: f.size })),
            }),
        );
    }, [formData, selectedFiles]);

    return (
        <MainLayout>
            <MainToolBar title="New Category">
                <ToolbarButton text="Close" onClick={() => console.log("Close button clicked")} />
                <ToolbarButton
                    text="Save"
                    onClick={() => console.log("Save clicked", formData, selectedFiles)}
                />
            </MainToolBar>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                <FormBox title="Main Data">
                    <Input
                        must
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(value) => setFormData({ ...formData, name: value })}
                    />
                    <Input
                        name="description"
                        type="textarea"
                        value={formData.description}
                        onChange={(value) => setFormData({ ...formData, description: value })}
                    />
                    <Input
                        name="Parent"
                        type="select"
                        value={formData.parentCategory}
                        options={categoryOptions}
                        onChange={(value) => setFormData({ ...formData, parentCategory: value })}
                    />
                    <Input
                        must
                        name="ordering"
                        type="number"
                        value={formData.ordering.toString()}
                        onChange={(value) => setFormData({ ...formData, ordering: Number(value) })}
                    />
                </FormBox>

                <FormBox title="Additional Sources">
                    <KeyVal
                        name="Urls"
                        onChange={(rows) =>
                            setFormData({ ...formData, urls: rows.map((r) => r.value) })
                        }
                    />
                </FormBox>

                <FormBox title="Files">
                    <Files
                        name="Upload Documents"
                        must
                        files={selectedFiles.map((f) => ({ name: f.name, size: f.size }))}
                        onChange={(newFiles: File[]) => setSelectedFiles(newFiles)}
                        onRemove={(index: number) =>
                            setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
                        }
                    />
                </FormBox>
            </div>
        </MainLayout>
    );
};

export default Page;
