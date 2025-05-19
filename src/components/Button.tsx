import React from "react";
import Image from "next/image";

type ButtonProps = {
    text: string;
    iconSrc: string;
    iconAlt: string;
    onClick?: () => void;
    className: string;
    width: number;
    height: number;
};
export default function Button({
    text,
    iconSrc,
    iconAlt = "",
    onClick,
    className = "",
    width,
    height,
}: ButtonProps) {
    return (
        <div className="flex absolute">
            <button
                onClick={onClick}
                className={`flex space-x-2 cursor-pointer items-center px-4 w-32 text-white font-bold h-12 rounded bg-[#5E59FF]${className}`}
            >
                <span className={`${className}`}>{text}</span>
                <div>
                    <Image
                        src={iconSrc}
                        width={width}
                        height={height}
                        alt={iconAlt}
                    />
                </div>
            </button>
        </div>
    );
}
