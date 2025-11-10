import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    size?: 16 | 20 | 24 | 32;
    color?: string;
    onClick?: () => void;
    className?: string;
    hoverColor?: string;
    hoverIconColor?: string;
};

const Icon: React.FC<Props> = ({
    icon: IconComponent,
    onClick,
    size = 20,
    color = "#444746",
    hoverColor = "transparent",
    hoverIconColor,
    className = "",
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`rounded-full aspect-square w-10 h-10 flex justify-center items-center cursor-pointer transition duration-200 ease-in-out ${className}`}
            style={{
                backgroundColor: hovered ? hoverColor : undefined,
            }}
        >
            <IconComponent size={size} color={hovered && hoverIconColor ? hoverIconColor : color} />
        </div>
    );
};

export default Icon;
