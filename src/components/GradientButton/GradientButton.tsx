import React from "react";

interface GradientButtonProps {
    title: string;
    gradient?: string;
    onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({
    title,
    gradient = "bg-gradient-to-r from-blue-500 to-purple-600",
    onClick,
}) => {
    return (
        <button
            className={`px-4 py-2 text-white font-semibold rounded-lg shadow-md transition-transform transform active:scale-95 ${gradient}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <GradientButton
                title="Click Me"
                gradient="bg-gradient-to-r from-green-400 to-blue-500"
                onClick={() => alert("Gradient Button Clicked!")}
            />
        </div>
    );
};

export default App;
