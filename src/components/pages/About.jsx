import React, { useEffect, useState } from "react";
import database from "../../assets/database.js";

const AboutUs = () => {
    const [aboutImages, setAboutImages] = useState({ name: "", images: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutImages = async () => {
            try {
                setLoading(true);
                setAboutImages(
                    database.aboutImages || { name: "", images: [] }
                );
            } catch (error) {
                setError(error);
                console.error("Error in fetching aboutImages: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAboutImages();
    }, []);

    useEffect(() => {
        console.log("About Images: ", aboutImages);
    }, [aboutImages]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching images: {error.message}</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center w-full mt-6 space-y-8">
            <h1 className="text-4xl font-bold">About Us</h1>
            <div className="flex flex-col md:flex-row justify-evenly items-center w-[80%]">
                <div className="px-6 md:w-[45%] w-full space-y-10">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl font-semibold mb-2">
                            Our Mission
                        </h2>
                        <p className="mb-4 text-justify text-lg">
                            At <strong>DoBu Martial Arts</strong>, our mission
                            is to empower individuals through the practice of
                            martial arts, much like how tofu serves as a
                            versatile foundation in a healthy diet. Just as tofu
                            can adapt and complement a variety of flavors, we
                            believe martial arts can empower you to adapt and
                            thrive in different aspects of life, building{" "}
                            <strong>confidence</strong>,{" "}
                            <strong>discipline</strong>, and{" "}
                            <strong>respect</strong> along the way.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl font-semibold mb-2">
                            Our Philosophy
                        </h2>
                        <p className="mb-4 text-justify text-lg">
                            Our philosophy is rooted in the idea that, like
                            tofu, martial arts can be molded and shaped to suit
                            individual needs. We strive to create an inclusive
                            and supportive environment where students can
                            cultivate their physical abilities, mental
                            resilience, and character strength. Just as tofu
                            absorbs the essence of the ingredients around it, we
                            encourage our members to absorb the values of{" "}
                            <strong>dedication</strong>,{" "}
                            <strong>perseverance</strong>, and{" "}
                            <strong>community</strong>, enabling them to reach
                            their full potential both on and off the mat.
                        </p>
                    </div>
                </div>

                <div className="md:w-[25%] sm:w-[20%] lg:w-[30%] mt-4 md:mt-0 ml-6 px-4 pt-4">
                    {aboutImages.images.length > 0 && (
                        <img
                            src={
                                aboutImages.images[0]
                                    ? aboutImages.images[0]
                                    : database.defaultImage
                            } 
                            alt="About DoBu Martial Arts"
                            className="w-full rounded-xl overflow-hidden"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
