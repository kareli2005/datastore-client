"use client";

import FormBox from "@/components/ui/FormBox";
import MainLayout from "@/components/ui/MainLayout";
import MainToolBar from "@/components/ui/MainToolbar";
import ToolbarButton from "@/components/ui/ToolbarButton";
import Input from "@/components/ui/Input";
import Files from "@/components/ui/Files";
import { useState } from "react";

interface Props {}

const Page = (props: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        ordering: 1,
        parentCategory: "",
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

    return (
        <MainLayout>
            <MainToolBar title="New Category">
                <ToolbarButton
                    text="Close"
                    onclick={() => {
                        console.log("Close button clicked");
                    }}
                />
                <ToolbarButton
                    text="Save"
                    onclick={() => {
                        console.log("Save button clicked", formData, selectedFiles);
                    }}
                />
            </MainToolBar>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                <FormBox title="Main Data">
                    <Input
                        must={true}
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
                        must={true}
                        name="ordering"
                        type="number"
                        value={formData.ordering.toString()}
                        onChange={(value) => setFormData({ ...formData, ordering: Number(value) })}
                    />
                </FormBox>

                <FormBox title="Additional Data">
                    <Files
                        name="Upload Documents"
                        must={true}
                        files={selectedFiles.map((f) => ({
                            name: f.name,
                            size: f.size,
                        }))}
                        onChange={(newFiles) => setSelectedFiles([...selectedFiles, ...newFiles])}
                        onRemove={(index) => {
                            setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
                        }}
                    />
                    <Input
                        must={true}
                        name="ordering"
                        type="number"
                        value={formData.ordering.toString()}
                        onChange={(value) => setFormData({ ...formData, ordering: Number(value) })}
                    />
                </FormBox>
            </div>
        </MainLayout>
    );
};

export default Page;
