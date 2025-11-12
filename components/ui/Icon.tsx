import React from "react";
import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    size?: 16 | 20 | 24 | 32;
    iconColor?: string;
    iconHover?: string;
    bgColor?: string;
    bgHover?: string;
    onClick?: () => void;
    className?: string;
};

const Icon: React.FC<Props> = ({
    icon: IconComponent,
    size = 20,
    iconColor = "#444746",
    // iconHover = "#444746",
    bgColor = "transparent",
    bgHover = "#e2e7eb",
    className = "",
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                group rounded-full aspect-square w-10 h-10 flex justify-center items-center cursor-pointer
                transition duration-200 ease-in-out
                bg-[${bgColor}] hover:bg-[${bgHover}]
                ${className}
            `}
        >
            <IconComponent
                size={size}
                color={iconColor}
                //     className={`
                //     transition duration-200 ease-in-out
                //     text-[${iconColor}] group-hover:text-[${iconHover}]
                // `}
            />
        </div>
    );
};

export default Icon;
