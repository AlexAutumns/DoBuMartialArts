import React, { useEffect, useRef, useState } from "react"; // Import useState and useEffect
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import menuIcon from "../../assets/icons/menu_icon.svg";

import tofuLogo from "../../assets/logo3.png";
import database from "../../assets/database.js";

const Navbar = React.forwardRef((props, ref) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
    const [isSmallScreen, setIsSmallScreen] = useState(false); // State for screen size
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pages = database.pages;
    const navigate = useNavigate();
    const location = useLocation();

    const handleJoinClick = () => {
        navigate("/join");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
    };

    // Effect to track window size
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1367); // Adjust the threshold as needed
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav
            ref={ref}
            className="
            flex justify-evenly items-center
            fixed top-0 z-[100]
            w-full
            py-[1em] px-[2em]
            duration-100
            text-[18px] sm:text-[16px]
            shadow-lg shadow-yellow-200
            text-black
            bg-[#729D39]
          "
        >
            {/* Logo and Title */}
            <div className="flex items-center">
                <Link
                    to="/"
                    className="flex justify-evenly space-x-2 items-center"
                >
                    <img
                        className={`max-w-[5em] m-0 mr-[1.5em] sm:mr-[0.5em] rounded-full ${
                            location.pathname === "/"
                                ? "border-4 border-yellow-200 max-w-[5.2em]"
                                : ""
                        } `}
                        src={tofuLogo}
                        alt="Tofu Logo"
                    />
                    {!isSmallScreen && (
                        <h1
                            className={`flex text-[1.5em] text-white duration-200 ${
                                location.pathname === "/"
                                    ? "text-yellow-200 text-[1.7em]"
                                    : "hover:text-yellow-200"
                            } `}
                        >
                            DoBu Martial Arts
                        </h1>
                    )}
                </Link>
            </div>

            {/* Conditional Rendering Based on Screen Size */}
            {isSmallScreen ? (
                <div>
                    <button
                        onClick={toggleDropdown}
                        className="text-white text-[1.3em] focus:outline-none "
                    >
                        <img src={menuIcon} alt="menu" className="scale-[3]" />
                    </button>

                    {isDropdownOpen && (
                        <ul className="flex flex-col justify-center items-start space-y-2 py-1 px-2 rounded-xl text-[1.5em] absolute bg-[#729D39] shadow-lg shadow-yellow-200">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link
                                        to={page.link}
                                        className={`text-white duration-200 ${
                                            location.pathname === page.link
                                                ? "text-yellow-200 text-[1.2em]"
                                                : "hover:text-yellow-200 hover:text-[1.05em]"
                                        }`}
                                    >
                                        <h1>{page.name}</h1>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/join"
                                    className={`text-white duration-200 ${
                                        location.pathname === "/join"
                                            ? "text-yellow-200 text-[1.2em]"
                                            : "hover:text-yellow-200 hover:text-[1.05em]"
                                    }`}
                                >
                                    Join
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className={`text-white duration-200 ${
                                        location.pathname === "/login"
                                            ? "text-yellow-200 text-[1.2em]"
                                            : "hover:text-yellow-200 hover:text-[1.05em]"
                                    }`}
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <div className="flex justify-evenly items-center space-x-[5em]">
                    <ul className="flex items-center space-x-[2.5em] py-1 px-0 text-[1.3em]">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <Link
                                    to={page.link}
                                    className={`text-white duration-200 ${
                                        location.pathname === page.link
                                            ? "text-yellow-200 text-[1.2em]"
                                            : "hover:text-yellow-200 hover:text-[1.05em]"
                                    }`}
                                >
                                    <h1>{page.name}</h1>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Join and Login Buttons */}
                    <div className="flex items-center space-x-[4em] p-0">
                        <button
                            onClick={handleJoinClick}
                            className="bg-gradient-to-r from-[#4E9F3D] to-secondColor hover:scale-105 duration-300 text-white text-[1.2em] py-1.5 px-3 rounded-full"
                        >
                            Join Now
                        </button>

                        <button
                            onClick={handleLoginClick}
                            className="bg-transparent border-2 hover:scale-105 duration-300 text-white text-[1.2em] py-1.5 px-3 rounded-full"
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
});

export default Navbar;
