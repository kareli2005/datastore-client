"use client";
import Link from "next/link";
import "./SideBar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Icon from "./ui/Icon";
import { useState } from "react";

type RecentItem = {
    title: string;
    url: string;
};

const SideBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [recents, setRecents] = useState<RecentItem[]>([
        { title: "Dashboard Overview", url: "/dashboard" },
        { title: "New Category", url: "/categories/new" },
        { title: "Settings", url: "/settings" },
    ]);

    return (
        <div
            className="p-4 gap-1 h-full bg-x-grey flex flex-col duration-200 ease-in-out transition-[width] overflow-hidden"
            style={{ width: isOpen ? "300px" : "72px" }}
        >
            {/* Top Menu */}
            <div className="sidebar-row relative">
                {isOpen ? (
                    <>
                        <Icon icon={ArrowBackIcon} onClick={() => setIsOpen(false)} />
                        <div className="absolute top-0 right-0">
                            <Icon icon={SearchIcon} />
                        </div>
                    </>
                ) : (
                    <Icon icon={MenuRoundedIcon} onClick={() => setIsOpen(true)} />
                )}
            </div>

            <div className="py-4"></div>

            {/* Main Links */}
            <div className="sidebar-row">
                <Link href="/" className="sidebar-btn">
                    <Icon icon={HomeOutlinedIcon} />
                    {isOpen && <p>Main</p>}
                </Link>
            </div>

            <div className="sidebar-row">
                <Link href="/categories" className="sidebar-btn">
                    <Icon icon={CategoryOutlinedIcon} />
                    {isOpen && <p>Categories</p>}
                </Link>
            </div>

            <div className="sidebar-row">
                <Link href="/categories/new" className="sidebar-btn">
                    <Icon icon={BorderColorOutlinedIcon} />
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
                                    {/* <p>{recent.title}</p> */}
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
                    <Icon icon={SettingsOutlinedIcon} />
                    {isOpen && <p>Settings</p>}
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
