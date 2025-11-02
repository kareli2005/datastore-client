"use client";
import "./SideBar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

type SideBarProps = {};

const SideBar = (props: SideBarProps) => {
    return (
        <div className="p-4 h-full bg-gray-400 flex flex-col">
            <div className="sidebar-row">
                <MenuRoundedIcon className="sidebar-icon" />
            </div>
            <div className="py-4"></div>
            <div className="sidebar-row">
                <CategoryOutlinedIcon className="sidebar-icon" />
            </div>
            <div className="sidebar-row">
                <BorderColorOutlinedIcon className="sidebar-icon" />
            </div>
            <div className="py-4"></div>
            <div className="bg-black flex flex-col grow">{/* <div></div> */}</div>
            <div className="sidebar-row">
                <SettingsRoundedIcon className="sidebar-icon" />
            </div>
        </div>
    );
};

export default SideBar;
