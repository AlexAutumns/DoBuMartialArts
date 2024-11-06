import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import database from "../../assets/database.js";

import JoinButton from "../Buttons/JoinButton/JoinButton.jsx";
import Table from "../Table/Table.jsx";

const defaultImage = database.defaultImage;

const Classes = () => {
    const [classesData, setClassesData] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Classes and Schedule from the database
    useEffect(() => {
        // Simulate fetching data
        setClassesData(database.classes);
        setScheduleData(database.classesSchedule);

        console.log("Loaded classes: ", database.classes);
        console.log("Loaded Schedule: ", database.classesSchedule);

        setLoading(false);
    }, []);

    return (
        <div className="max-w-full px-1 mb-3 space-y-4 text-white flex flex-col items-center justify-center text-[16px] overflow-auto">
            {/* Classes Offered */}
            <div className="flex flex-col items-center justify-center my-8 space-y-2">
                <h2 className="text-[2.5em]">Classes Offered</h2>
                <div className="flex flex-col items-center">
                    <ul className="relative flex flex-wrap justify-evenly space-x-8">
                        {classesData.map((card, index) => (
                            <li
                                key={index}
                                className="mt-12 mb-8 rounded-lg w-[20em] h-[20em] hover:scale-105 duration-300 bg-cover bg-no-repeat overflow-hidden shadow-lg shadow-yellow-200"
                                style={{
                                    backgroundImage: `url(${
                                        card.images[0] || defaultImage
                                    })`,
                                }}
                            >
                                <div className="flex flex-col justify-center items-center h-full space-y-5 bg-gradient-to-t from-fourthColor to-thirdColor/30 text-white">
                                    <div className="flex flex-col justify-center items-center px-3 space-y-2">
                                        <h2 className="text-[2em]">
                                            {card.name}
                                        </h2>
                                        <p className="text-justify">
                                            {card.desc}
                                        </p>
                                    </div>
                                    {card.kids && (
                                        <div>Kids Classes Available</div>
                                    )}
                                    <JoinButton />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Classes Schedule */}
            <div className="flex flex-col items-center justify-center my-8 space-y-8">
                <h2 className="text-[2.5em]">Classes Schedule</h2>
                {scheduleData.length > 0 ? (
                    <Table data={scheduleData} />
                ) : (
                    <p>No schedule available.</p>
                )}
            </div>
        </div>
    );
};

export default Classes;
