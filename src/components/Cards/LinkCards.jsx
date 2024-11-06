import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import database from "../../assets/database";

const defaultImage = database.defaultImage;

const LinkCard = ({ card }) => {
    return (
        <li
            className="
                relative flex flex-col justify-end items-center
                w-[14em] h-[14em] sm:w-[12em] sm:h-[12em] lg:w-[16em] lg:h-[16em] 
                overflow-hidden
                rounded-lg
                m-6
                bg-gray-100
                shadow-lg shadow-yellow-200
                transition-transform duration-300
                hover:scale-105
                text-xl
                bg-cover bg-center
                cursor-pointer"
            style={{
                backgroundImage: `url(${card.images[0] || defaultImage})`, // Fallback image if none provided
            }}
        >
            <Link
                to={card.link} // Use Link to navigate
                className="flex flex-col justify-end items-center 
                    space-y-3 
                    absolute bottom-0 left-0 right-0 
                    p-4
                    bg-gradient-to-t from-fourthColor to-secondColor/15 text-white text-center 
                    transition-all duration-300 transform 
                    opacity-100 h-full w-full" // Make sure it covers the entire card
            >
                <h3 className="text-[1.4em]">{card.name}</h3>
                <p>{card.desc}</p>
            </Link>
        </li>
    );
};

const LinkCards = ({ data }) => {
    return (
        <div>
            <div className="flex flex-col items-center mt-5 mb-12 w-full">
                <ul className="flex flex-wrap justify-center">
                    {data.map((card, index) => (
                        <LinkCard key={index} card={card} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LinkCards;
