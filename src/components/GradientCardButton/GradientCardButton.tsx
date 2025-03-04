import React from "react";
import { FaPlus } from "react-icons/fa";

interface GradientCardButtonProps {
    title: string;
    onClick?: () => void;
}

const GradientCardButton: React.FC<GradientCardButtonProps> = ({ title, onClick }) => {
    return (
        <div
            className="border border-gradient-to-r from-purple-500 to-green-400 rounded-xl p-8 text-center bg-black shadow-lg cursor-pointer hover:bg-gray-900 transition"
            onClick={onClick}
        >
            <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
            <div className="flex justify-center items-center w-16 h-16 border border-purple-500 rounded-full mx-auto">
                <FaPlus className="text-green-400 text-3xl" />
            </div>
        </div>
    );
};

export default GradientCardButton;
