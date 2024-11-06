import React, { useEffect, useState } from "react";
import ImageDescriptionSlider from "../ImageDescriptionSlider/ImageDescriptionSlider.jsx";
import database from "../../assets/database";

const Facilities = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setFacilities(database.facilities);

        console.log("Facilities: ", database.facilities);
    }, []);

    return (
        <div className="w-full px-1 my-4 space-y-10 text-white flex flex-col items-center justify-center text-[20px]">
            <h2 className="text-[2.5em]">Facilities</h2>
            <div className="relative overflow-hidden text-[16px] w-full flex justify-evenly items-center dark:text-white duration-200">
                <div className="center sm:px-2 lg:py-2 md:py-2 justify-center items-center w-[92%] h-full">
                    <ImageDescriptionSlider facilities={facilities} />
                </div>
            </div>
        </div>
    );
};

export default Facilities;
