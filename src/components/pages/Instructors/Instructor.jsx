import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import database from "../../../assets/database";

const Instructor = () => {
    // GET ONE INSTRUCTOR
    const { instructorId } = useParams();
    const [instructor, setInstructor] = useState(null);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(database.defaultImage);
    const [jobs, setJobs] = useState([]);
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Parse instructorId to a number
    const parsedInstructorId = Number(instructorId);

    // Get instructor through the id
    useEffect(() => {
        const fetchInstructor = () => {
            setLoading(true);
            try {
                const foundInstructor = database.instructors.find(
                    (inst) => inst.id === parsedInstructorId // Use parsed instructorId
                );
                if (foundInstructor) {
                    setInstructor(foundInstructor);
                    setImages(foundInstructor.images || []);
                    setSelectedImage(
                        foundInstructor.images[0] || database.defaultImage
                    );
                    setJobs(foundInstructor.jobs || []);
                    setDetails(foundInstructor.details || []);
                } else {
                    throw new Error("Instructor not found");
                }
            } catch (err) {
                setError(err);
                console.error("Error finding instructor: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchInstructor();
    }, [parsedInstructorId]); 

    // Selecting Image
    const handleClickMiniImage = (image, index) => {
        if (image !== selectedImage) {
            setSelectedImage(image);
            console.log("Set selected image to image ", index);
        }
    };

    // GET MORE INSTRUCTORS
    const [instructors, setInstructors] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3); // Number of instructors to display

    useEffect(() => {
        // Simulate fetching data
        setLoading(true);
        setVisibleCount(3);
        // Filter out the current instructor from the list
        const filteredInstructors = database.instructors.filter(
            (inst) => inst.id !== parsedInstructorId
        );
        setInstructors(filteredInstructors);
        console.log("Loaded instructors: ", filteredInstructors);
        setLoading(false);
    }, [parsedInstructorId]); 

    // Function to load more instructors
    const loadMoreInstructors = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Increase count by 6
    };

    if (loading) return <div>Loading Instructor...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div className="px-4 flex flex-col items-center justify-center text-[16px] space-y-8">
            {/* Instructor Information */}
            <div className="w-full h-[50%] mb-12 mx-1 py-7 px-2 flex justify-evenly items-center space-y-1">
                {/* Instructor Images */}
                <div className="flex max-w-[30em] justify-evenly items-center">
                    <img
                        src={selectedImage}
                        alt={instructor.name}
                        className="rounded-xl shadow-lg shadow-lx shadow-yellow-200 w-full"
                    />

                    <ul className="p-0 mx-5 flex flex-col space-y-4 justify-center items-center max-h-full">
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <li
                                    key={index}
                                    className="w-[5em] flex shadow-md shadow-yellow-200 rounded-md overflow-hidden transition-all ease-in-out hover:scale-[1.1] hover:border-2 hover:border-lime-300 cursor-pointer"
                                >
                                    <img
                                        src={image}
                                        alt={`${instructor.name} image ${index}`}
                                        className="w-full"
                                        onClick={() =>
                                            handleClickMiniImage(image, index)
                                        }
                                    />
                                </li>
                            ))
                        ) : (
                            <li>No images available</li>
                        )}
                    </ul>
                </div>

                {/* Instructor Details */}
                <div className="flex max-w-[35%] flex-col h-full justify-center items-start text-lg">
                    <div>
                        <h1 className="text-5xl font-bold">
                            {instructor.name}
                        </h1>
                        <h2 className="text-lime-300">
                            {jobs.length > 0
                                ? jobs.join(" | ")
                                : "No jobs available"}
                        </h2>
                    </div>

                    <div className="text-lg mt-8 flex flex-col space-y-5">
                        <p className="text-justify">{instructor.desc}</p>
                        <div>
                            <h3>Details</h3>
                            <ul className="pl-8 list-disc">
                                {details.length ? (
                                    details.map((detail, index) => (
                                        <li key={index} className="">
                                            {detail}
                                        </li>
                                    ))
                                ) : (
                                    <li>Works in DoBu Martial Arts</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Instructors */}
            <div className="py-5 px-4 flex flex-col items-center justify-center text-[16px]">
                <h2 className="text-3xl font-bold mb-[1.5em]">
                    Other Instructors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 gap-y-8 w-[80%]">
                    {loading ? (
                        <p>Loading...</p>
                    ) : instructors.length > 0 ? (
                        instructors.slice(0, visibleCount).map((instructor) => (
                            <Link
                                to={`/instructors/${instructor.id}`}
                                key={instructor.id}
                                className="bg-thirdColor transition-all duration-300 hover:scale-[1.05] p-0 rounded-lg shadow-md shadow-yellow-200 flex flex-col justify-center items-center w-[55%]"
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
                        <p className="text-gray-500">
                            No instructors available.
                        </p>
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
        </div>
    );
};

export default Instructor;
