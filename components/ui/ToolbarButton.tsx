"use client";
import React from "react";

type Props = {
    onclick?: () => void;
    text: string;
};

const ToolbarButton = ({ onclick, text }: Props) => {
    return (
        <button className="main-btn" onClick={onclick}>
            {text}
        </button>
    );
};

export default ToolbarButton;
