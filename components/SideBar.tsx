"use client";

import Link from "next/link";
import "./SideBar.css";
import { Menu, Settings, SquarePen, LayoutGrid, ArrowLeft, Search, Home } from "lucide-react";
import Icon from "./ui/Icon";
import { useState } from "react";

type RecentItem = {
    title: string;
    url: string;
};

const SideBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [recents, setRecents] = useState<RecentItem[]>([]);

    return (
        <div
            className="sidebar p-4 gap-1 h-full bg-x-grey flex flex-col duration-200 ease-in-out transition-[width] overflow-hidden"
            style={{ width: isOpen ? "300px" : "72px" }}
        >
            {/* Top Menu */}
            <div className="sidebar-row relative">
                {isOpen ? (
                    <>
                        <Icon icon={ArrowLeft} onClick={() => setIsOpen(false)} />
                        <div className="absolute top-0 right-0">
                            <Icon icon={Search} />
                        </div>
                    </>
                ) : (
                    <Icon icon={Menu} onClick={() => setIsOpen(true)} />
                )}
            </div>

            <div className="py-4"></div>

            {/* Main Links */}
            <div className="sidebar-row">
                <Link href="/" className="sidebar-btn">
                    <Icon icon={Home} />
                    {isOpen && <p>Main</p>}
                </Link>
            </div>

            <div className="sidebar-row">
                <Link href="/categories" className="sidebar-btn">
                    <Icon icon={LayoutGrid} />
                    {isOpen && <p>Categories</p>}
                </Link>
            </div>

            <div className="sidebar-row">
                <Link href="/categories/new" className="sidebar-btn">
                    <Icon icon={SquarePen} />
                    {isOpen && <p>New Category</p>}
                </Link>
            </div>

            <div className="py-4"></div>

            {/* Recents Section */}
            <div className="sidebar-recents-container">
                {isOpen && (
                    <div className="sidebar-recents-wrapper">
                        <p className="sidebar-recents-header">Recents</p>

                        {recents.length > 0 ? (
                            recents.map((recent, index) => (
                                <Link key={index} href={recent.url} className="sidebar-btn">
                                    <p>{recent.title}</p>
                                </Link>
                            ))
                        ) : (
                            <p className="w-full text-nowrap ml-2.5">No recent items</p>
                        )}
                    </div>
                )}
            </div>

            {/* Settings */}
            <div className="sidebar-row mt-auto">
                <Link href="/settings" className="sidebar-btn">
                    <Icon icon={Settings} />
                    {isOpen && <p>Settings</p>}
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
