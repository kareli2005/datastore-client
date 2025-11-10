"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Icon from "../Icon";

type KeyValuePair = {
    key: string;
    value: string;
};

type Props = {
    name?: string;
    must?: boolean;
    onChange?: (data: KeyValuePair[]) => void;
    initialRows?: KeyValuePair[];
};

const KeyVal = ({ name, must, onChange, initialRows = [] }: Props) => {
    const [rows, setRows] = useState<KeyValuePair[]>(
        initialRows.length ? initialRows : [{ key: "", value: "" }],
    );

    useEffect(() => {
        onChange?.(rows);
    }, []);

    const handleAddRow = () => {
        const newRows = [...rows, { key: "", value: "" }];
        setRows(newRows);
        onChange?.(newRows);
    };

    const handleRemoveRow = (index: number) => {
        // Do not remove if it’s the only row
        if (rows.length === 1) return;

        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
        onChange?.(newRows);
    };

    const handleChange = (index: number, field: "key" | "value", value: string) => {
        const newRows = rows.map((row, i) => (i === index ? { ...row, [field]: value } : row));
        setRows(newRows);
        onChange?.(newRows);
    };

    return (
        <div className="w-full flex flex-col gap-2 p-2">
            {name && (
                <label className="text-sm font-medium ml-1">
                    {name}
                    {must && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {rows.map((row, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Key"
                        value={row.key}
                        onChange={(e) => handleChange(index, "key", e.target.value)}
                        className="w-full outline-none border border-gray-300 rounded-md p-2 focus:border-blue-500 transition duration-200"
                    />
                    <input
                        type="text"
                        placeholder="Value"
                        value={row.value}
                        onChange={(e) => handleChange(index, "value", e.target.value)}
                        className="w-full outline-none border border-gray-300 rounded-md p-2 focus:border-blue-500 transition duration-200"
                    />

                    <Icon
                        icon={X}
                        size={16}
                        onClick={() => handleRemoveRow(index)}
                        color={rows.length === 1 ? "gray" : "red"}
                        className={rows.length === 1 ? "cursor-not-allowed opacity-50" : ""}
                    />
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddRow}
                className="w-full cursor-pointer border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md p-2 duration-200"
            >
                Add
            </button>
        </div>
    );
};

export default KeyVal;
