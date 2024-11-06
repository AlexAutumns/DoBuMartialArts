import React, { useEffect, useState } from "react";

import LinkCards from "../Cards/LinkCards.jsx";
import JoinButtonGradient from "../Buttons/JoinButton/JoinButtonGradient.jsx";

// Import Local Images
import database from "../../assets/database.js";

const Home = () => {
    // State for pages
    const [pages, setPages] = useState([]);

    useEffect(() => {
        setPages(database.pages.filter((page) => page.name !== "Home"));
        console.log(
            "Pages loaded: ",
            database.pages.filter((page) => page.name !== "Home")
        );
    }, []);

    return (
        <div className="text-white relative mt-12">
            {/* Banner */}
            <div className="relative w-screen px-7 pb-[3em] mb-3 flex flex-col lg:flex-row justify-evenly items-center">
                {/* Text Content */}
                <div className="lg:w-[40%] max-w-[80%] px-0 z-10 flex flex-col justify-evenly mb-8 space-y-6 lg:text-[20px] text-[16px] sm:text-[18px]">
                    <h2 className="text-[2.7em] font-bold">
                        Unleash Your Potential at DoBu!
                    </h2>
                    <p className="text-justify text-[1em]">
                        Welcome to DoBu Martial Arts, where we nourish your
                        physical and mental well-being, just like tofu enriches
                        a balanced diet. Our experienced instructors are here to
                        guide you through a variety of martial arts classes that
                        adapt to your needs, much like tofu adapts to different
                        flavors and styles.
                    </p>
                    <div>
                        <JoinButtonGradient />
                    </div>
                </div>

                {/* Tofu Image - positioned behind text only on small screens */}
                <img
                    src={database.banner[0].images[0]}
                    alt=""
                    className="w-[20%] lg:w-[20%] lg:right-0 rounded-xl absolute right-[20%] -inset-y-5 sm:object-contain opacity-60 lg:relative lg:opacity-100 z-0"
                />
            </div>

            {/* Class Section */}
            <LinkCards data={pages} />
        </div>
    );
};

export default Home;
