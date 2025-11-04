"use client";

import React, { useRef } from "react";
import { Upload, X } from "lucide-react";
import Icon from "./Icon";

type FileItem = {
    name: string;
    size: number;
    url?: string; // for preview (optional)
};

type Props = {
    name?: string;
    must?: boolean;
    multiple?: boolean;
    files: FileItem[];
    onChange?: (files: File[]) => void;
    onRemove?: (index: number) => void;
};

const Files = (props: Props) => {
    const { name, must, multiple = true, files, onChange, onRemove } = props;
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(e.target.files || []);
        if (newFiles.length && onChange) {
            onChange(newFiles);
        }
    };

    return (
        <div className="w-full flex flex-col gap-2 p-2">
            {name && (
                <label className="text-sm font-medium ml-2">
                    {name}
                    {must && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {/* Upload box */}
            <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition duration-200"
            >
                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                <p className="text-gray-500 text-sm">Click or drag files to upload</p>
                <input
                    type="file"
                    ref={fileInputRef}
                    multiple={multiple}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

            {/* File preview list */}
            {files.length > 0 && (
                <div className="flex flex-col gap-2 mt-3">
                    {files.map((file, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center border border-gray-200 rounded-md p-2"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{file.name}</span>
                                <span className="text-xs text-gray-500">
                                    {(file.size / 1024).toFixed(1)} KB
                                </span>
                            </div>
                            {onRemove && (
                                <button onClick={() => onRemove(i)}>
                                    <Icon icon={X} size={16} hoverColor="red-400" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Files;
