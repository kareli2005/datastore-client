"use client";
import React from "react";

type Props = {
    onClick?: () => void;
    text: string;
};

const ToolbarButton = ({ onClick, text }: Props) => {
    return (
        <button className="main-btn" onClick={onClick}>
            {text}
        </button>
    );
};

export default ToolbarButton;
