import React from "react";
import { useNavigate } from "react-router-dom";

const JoinButtonGradient = () => {
    // Navigation
    const navigate = useNavigate();

    const handleJoinClick = () => {
        navigate("/join"); // Navigates to the "/join" route
    };

    return (
        <button
            onClick={handleJoinClick}
            className="
                shadow-lg  shadow-yellow-200
                bg-gradient-to-r from-[#36622B] to-secondColor
                hover:scale-[1.02] duration-300 text-white text-[1.5em]
                w-auto py-1.5 px-3 rounded-full"
        >
            Join Now
        </button>
    );
};

export default JoinButtonGradient;
