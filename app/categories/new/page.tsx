"use client";

import FormBox from "@/components/ui/FormBox";
import MainLayout from "@/components/ui/MainLayout";
import MainToolBar from "@/components/ui/MainToolbar";
import ToolbarButton from "@/components/ui/ToolbarButton";
import Input from "@/components/ui/Input";
import { useState } from "react";

interface Props {}

const page = (props: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        ordering: "",
    });

    return (
        <MainLayout>
            <MainToolBar title="New Category">
                <ToolbarButton
                    text="close"
                    onclick={() => {
                        console.log("Close button clicked");
                    }}
                />
                <ToolbarButton
                    text="Save"
                    onclick={() => {
                        console.log("Save button clicked");
                    }}
                />
            </MainToolBar>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                <FormBox title="Main Data">
                    <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(value) => setFormData({ ...formData, name: value })}
                    />
                    <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(value) => setFormData({ ...formData, name: value })}
                    />
                    <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(value) => setFormData({ ...formData, name: value })}
                    />
                </FormBox>
                <FormBox title="Additional Data">
                    <Input
                        name="additional"
                        type="text"
                        value={formData.description}
                        onChange={(value) => setFormData({ ...formData, description: value })}
                    />
                </FormBox>
            </div>
        </MainLayout>
    );
};

export default page;
