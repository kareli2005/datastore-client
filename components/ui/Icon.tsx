import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

type Props = {
    icon: React.ElementType<SvgIconProps>;
    size?: 20 | 24 | 32;
    color?: "inherit";
    onClick?: () => void;
};

const Icon: React.FC<Props> = ({ icon: IconComponent, onClick, size = 20, color = "inherit" }) => {
    return (
        <div
            onClick={onClick}
            className="rounded-full aspect-square w-10 h-10 flex justify-center items-center hover:bg-x-grey-dark hover: cursor-pointer transition duration-200 ease-in-out"
        >
            <IconComponent width={size} height={size} color={color} />
        </div>
    );
};

export default Icon;
