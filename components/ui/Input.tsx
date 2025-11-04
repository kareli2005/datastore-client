import React from "react";

type Props = {
    name?: string;
    type?: string;
    value?: string;
    must?: boolean;
    onChange?: (value: string) => void;
    options?: string[];
};

const Input = (props: Props) => {
    const { name, type = "text", value = "", must, onChange, options = [] } = props;

    const renderInput = () => {
        switch (type) {
            case "textarea":
                return (
                    <textarea
                        className="outline-none h-24 border border-gray-300 rounded-md p-2 focus:border-blue-500 transition duration-200"
                        name={name}
                        id={name}
                        value={value}
                        onChange={(e) => onChange?.(e.target.value)}
                    />
                );

            case "select":
                return (
                    <select
                        className="outline-none border border-gray-300 rounded-md p-2 focus:border-blue-500 transition duration-200"
                        name={name}
                        id={name}
                        value={value}
                        onChange={(e) => onChange?.(e.target.value)}
                    >
                        {options.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                );

            default:
                return (
                    <input
                        className="outline-none border border-gray-300 rounded-md p-2 focus:border-blue-500 transition duration-200"
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={(e) => onChange?.(e.target.value)}
                    />
                );
        }
    };

    return (
        <div className="w-full flex flex-col gap-1 p-2">
            {name && (
                <label className="text-sm font-medium ml-2" htmlFor={name}>
                    {name}
                    {must && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            {renderInput()}
        </div>
    );
};

export default Input;
