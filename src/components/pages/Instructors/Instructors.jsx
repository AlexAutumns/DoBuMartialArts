import React, { useEffect, useState } from "react";
import database from "../../../assets/database";
import { Link } from "react-router-dom";

const defaultImage = database.defaultImage;

const Instructors = () => {
    const [bannerImage, setBannerImage] = useState(null);
    const [instructors, setInstructors] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        setInstructors(database.instructors);
        setBannerImage(database.banner[1].images[0]);
        console.log("Loaded instructors: ", database.instructors);
        setLoading(false);
    }, []);

    const loadMoreInstructors = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    return (
        <div className="pb-5 flex flex-col items-center justify-center text-[16px]">
            <div
                id="banner"
                className="relative w-full h-[80vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bannerImage || defaultImage})`,
                }}
            >
                {/* Gradient overlay to improve blending effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-fourthColor" />

                <div className="relative z-10 w-full h-full flex flex-col justify-center items-center space-y-12 ">
                    <h2 className="text-5xl font-bold text-white mb-2">
                        Instructors
                    </h2>
                    <p className="text-white text-xl">Meet our Instructors</p>
                </div>
            </div>

            <div
                id="instructorList"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 gap-y-8 w-[80%] my-6"
            >
                {loading ? (
                    <p>Loading...</p>
                ) : instructors.length > 0 ? (
                    instructors.slice(0, visibleCount).map((instructor) => (
                        <Link
                            to={`/instructors/${instructor.id}`}
                            key={instructor.id}
                            className="bg-thirdColor transition-all duration-300 hover:scale-[1.05] p-0 rounded-lg shadow-md shadow-yellow-200 flex flex-col justify-center items-center max-w-[50%] overflow-hidden"
                        >
                            <img
                                src={
                                    instructor.images[0]
                                        ? instructor.images[0]
                                        : defaultImage
                                }
                                alt={`Image of ${instructor.name}`}
                                className="object-cover m-0 rounded-xl"
                            />
                            <h3 className="text-xl font-semibold m-4">
                                {instructor.name}
                            </h3>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500">No instructors available.</p>
                )}
            </div>
            {instructors.length > visibleCount && (
                <button
                    onClick={loadMoreInstructors}
                    className="mt-[3em] px-4 py-2 text-[1.1em] bg-[#36622B] text-white transition duration-300 hover:scale-[1.02] w-auto rounded-full"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default Instructors;
