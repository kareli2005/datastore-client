import React from "react";
import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    size?: 16 | 20 | 24 | 32;
    color?: string;
    onClick?: () => void;
    className?: string;
    hoverColor?: string;
};

const Icon: React.FC<Props> = ({
    icon: IconComponent,
    onClick,
    size = 20,
    color = "#444746",
    hoverColor = "x-grey-dark",
}) => {
    return (
        <div
            onClick={onClick}
            className={`rounded-full aspect-square w-10 h-10 flex justify-center items-center cursor-pointer transition duration-200 ease-in-out hover:bg-${hoverColor}`}
        >
            <IconComponent size={size} color={color} />
        </div>
    );
};

export default Icon;
