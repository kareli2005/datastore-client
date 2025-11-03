import React from "react";

type Props = {
    name?: string;
    type?: string;
    value?: string;
    must?: boolean;
    onChange?: (value: string) => void;
};

const Input = (props: Props) => {
    return (
        <div className="w-full h-auto flex flex-col gap-1 p-2">
            <label className="text-sm font-medium ml-2" htmlFor={props.name}>
                {props.name}
            </label>
            <input
                className="outline-none border border-x-grey-dark rounded-md p-2 focus:border-x-blue transition duration-200"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={(e) => props.onChange?.(e.target.value)}
            />
        </div>
    );
};

export default Input;
