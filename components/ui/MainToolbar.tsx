"use client";
import React, { ReactNode } from "react";

type Props = {
    title: string;
    children?: ReactNode;
};

const MainToolBar = ({ title, children }: Props) => {
    return (
        <div className="w-full bg-white h-15 flex justify-between items-center border-b border-x-grey-dark px-4 sticky top-0 gap-1 md:gap-2">
            <p className="font-bold text-nowrap text-sm md:text-lg">{title}</p>
            <div className="w-full h-full flex justify-end items-center gap-1 md:gap-2">
                {children}
            </div>
        </div>
    );
};

export default MainToolBar;
