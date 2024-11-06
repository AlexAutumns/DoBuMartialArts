import React, { useState } from "react";

const defaultImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fdefault-ui-image-placeholder-wireframes-600nw-1037719192.jpg&f=1&nofb=1&ipt=36ea08f7f409dfc6162be62bea83edf77cbffabb99aeb8e3ca9fcadeb7a6cdb2&ipo=images";

const Card = ({ card, onClick }) => {
    return (
        <li
            className={`
                    relative flex flex-col items-center
                    w-[12em] h-[12em] sm:w-[8em] sm:h-[6em] lg:w-[12em] lg:h[16em]
                    overflow-hidden
                    rounded-lg
                    m-6
                    bg-gray-100
                    shadow-lg shadow-yellow-200
                    transition-all duration-300
                    hover:scale-105
                    text-xl
                    bg-cover bg-center
                    cursor-pointer`}
            style={{
                backgroundImage: `url(${card.images[0] || defaultImage})`,
            }}
            onClick={() => onClick(card)}
        >
            <div
                className={`
                        flex flex-col 
                        justify-center items-center
                        space-y-3 
                        absolute bottom-0 left-0 right-0 
                        bg-gradient-to-t from-fourthColor to-secondColor/30
                        text-white text-center 
                        transition-all duration-300 transform 
                        opacity-100 h-full w-full`}
            >
                <h3 className={`text-[2em]`}>{card.name}</h3>
            </div>
        </li>
    );
};

const DisplayCards = ({ data }) => {
    const [selectedCard, setSelectedCard] = useState(null); // State to hold the selected card

    const handleCardClick = (card) => {
        setSelectedCard(card); // Set the selected card
    };

    return (
        <div className="flex flex-col items-center mt-5 mb-12">
            <ul className="relative flex flex-wrap justify-center">
                {data.map((card, index) => (
                    <Card key={index} card={card} onClick={handleCardClick} /> // Pass the onClick handler
                ))}
            </ul>
            <div
                id="expanded"
                className="mt-12 mb-8 p-4 rounded-lg bg-fourthColorDark/50 w-[69%]"
            >
                {selectedCard ? (
                    <div className="flex flex-col justify-between items-center px-0 ">
                        <div className="flex justify-between items-center">
                            <div className="w-[50%]">
                                <h2 className="text-[4em]">
                                    {selectedCard.name}
                                </h2>
                                <p className="text-justify text-[1.2em]">
                                    {selectedCard.desc}
                                </p>
                            </div>

                            <img
                                src={
                                    selectedCard.images[0]
                                        ? selectedCard.images[0]
                                        : defaultImage
                                }
                                alt={selectedCard.name}
                                className="rounded-xl w-[30em] overflow-hidden"
                            />
                        </div>

                        {selectedCard.kids ? <div>Kids Classes Available</div> : <div></div>}
                    </div>
                ) : (
                    <p className="text-center">
                        Click a card to see more information.
                    </p>
                )}
            </div>
        </div>
    );
};

export default DisplayCards;
