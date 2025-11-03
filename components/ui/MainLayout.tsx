"use client";
import React, { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return <div className="w-full flex flex-col justify-start items-center">{children}</div>;
};

export default MainLayout;
