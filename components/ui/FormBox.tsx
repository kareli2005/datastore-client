import React from "react";

type Props = {
    title?: string;
    children?: React.ReactNode;
};

const FormBox = ({ title, children }: Props) => {
    return (
        <div className="flex w-full flex-col gap-1">
            <h2 className="w-full font-semibold text-sm ml-2">{title}</h2>
            <div className="form-box">{children}</div>
        </div>
    );
};

export default FormBox;
