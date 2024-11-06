import React from "react";
import { useNavigate } from "react-router-dom";

const JoinButton = () => {
    // Navigation
    const navigate = useNavigate();

    const handleJoinClick = () => {
        navigate("/join"); // Navigates to the "/join" route
    };

    return (
        <button
            onClick={handleJoinClick}
            className="
                bg-[#36622B]
                hover:scale-[1.02] duration-300 text-white text-[1.5em]
                w-auto py-1.5 px-3 rounded-full"
        >
            Join Now
        </button>
    );
};

export default JoinButton;
