import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import database from "../../assets/database";

import JoinButton2 from "../Buttons/JoinButton/JoinButton2";

const Memberships = () => {
    // State Hooks
    const [membershipPlans, setMembershipPlans] = useState([]);
    const [fitnessCourses, setFitnessCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Memberships
    useEffect(() => {
        const fetchMemberships = async () => {
            try {
                setLoading(true);
                setMembershipPlans(database.membershipPlans);
            } catch (error) {
                console.error("Error in fetching memberships: ", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMemberships();
        console.log("Membership Plans: ", membershipPlans);
    }, []);

    useEffect(() => {
        const fetchFitnessCourses = async () => {
            try {
                setLoading(true);
                setFitnessCourses(database.fitnessCourses);
            } catch (error) {
                console.error(
                    "Error in fetching specialist courses or fitness training: ",
                    error
                );
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchFitnessCourses();
        console.log("Fitness Courses: ", fitnessCourses);
    });

    // Loading State
    if (loading) {
        return (
            <div className="text-center text-lg">Loading Memberships...</div>
        );
    }

    // Error State
    if (error) {
        return <div className="text-center text-lg text-red-500">{error}</div>;
    }

    return (
        <div className="mx-auto p-4 w-[80%] flex flex-col justify-center space-y-14">
            {/* Membership Plans */}
            <div className="flex flex-col space-y-5">
                <h1 className="text-3xl font-bold text-center">
                    Membership Plans
                </h1>
                {membershipPlans.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {membershipPlans.map((plan, index) => (
                            <MembershipCard
                                plan={plan}
                                index={index}
                                key={index}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-lg">
                        No Membership Plans Available
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-5 justify-center items-center">
                <h1 className="text-3xl font-bold text-center">
                    Specialist Courses and Fitness Training
                </h1>
                <div className="flex flex-col w-[95%] justify-center items-center">
                    {fitnessCourses.length > 0 ? (
                        <div>
                            {fitnessCourses.map((data, index) => (
                                <FitnessCoursesCard key={index} data={data} />
                            ))}
                        </div>
                    ) : (
                        <div>No Specialist Courses or Fitness Training</div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Membership Card Component
const MembershipCard = ({ plan, index }) => {
    return (
        <Link
            to="/join"
            className={`border-2 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition-all duration-300 pt-0 pb-12 m-4 ${
                index % 2 === 0
                    ? "border-yellow-300 hover:shadow-yellow-300"
                    : "border-green-500 hover:shadow-green-500"
            }`}
        >
            <div className="flex flex-col h-full space-y-2">
                <div
                    className={`bg-gradient-to-r from-gray-700 to-gray-900 px-1 py-1 w-[40%] flex justify-evenly items-center`}
                >
                    <p className="lg:text-3xl sm:text-xl md:text-2xl font-bold ">
                        {plan.price.currency} {plan.price.cost}
                    </p>
                    <p className="text-md font-normal"> / {plan.price.rate}</p>
                </div>
                <div className="flex flex-col justify-center h-full space-y-3 px-4">
                    <h2 className="text-2xl font-semibold text-center">
                        {plan.name}
                    </h2>
                    <ul
                        className={`text-center flex-grow space-y-2 border-t-2 pt-4 ${
                            index % 2 === 0
                                ? "border-yellow-300"
                                : "border-green-500"
                        }`}
                    >
                        {plan.details.length > 0 ? (
                            plan.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))
                        ) : (
                            <></>
                        )}

                        {typeof plan.numberOfMartialArts === "number" &&
                        !isNaN(plan.numberOfMartialArts) ? (
                            <li>
                                {plan.numberOfMartialArts > 1 ? (
                                    <>
                                        Any {plan.numberOfMartialArts}{" "}
                                        <strong>Martial Arts</strong>
                                    </>
                                ) : (
                                    <>
                                        Any {plan.numberOfMartialArts}{" "}
                                        <strong>Martial Art</strong>
                                    </>
                                )}
                            </li>
                        ) : (
                            <li>
                                {plan.numberOfMartialArts}{" "}
                                <strong>Martial Art</strong>
                            </li>
                        )}

                        <li>
                            {plan.numberOfSessions}{" "}
                            <strong>Sessions per Week</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    );
};

const FitnessCoursesCard = ({ data }) => {
    const { name, details, price, images } = data;

    const renderDetails = () => {
        if (!details.length) {
            // Show nothing if there are no details
            return null;
        }

        return (
            <ul className="text-center flex-grow space-y-2 mx-auto">
                {details.map((detail, index) => (
                    <li key={index} className="text-md md:text-lg">
                        {detail}
                    </li>
                ))}
            </ul>
        );
    };

    const renderImages = () => (
        <>
            <img
                src={images[0]}
                alt={name}
                className="flex-grow object-cover m-2 rounded-lg border-yellow-200 border-4"
                style={{ width: images.length > 1 ? "90%" : "100%" }}
            />
            {images.length > 1 && (
                <div className="flex justify-center flex-wrap mt-6">
                    {images.slice(1).map((image, imgIndex) => (
                        <img
                            key={imgIndex}
                            src={image}
                            alt={name}
                            className="flex-grow object-cover m-1 rounded-lg border-yellow-200 border-4"
                            style={{ width: "40%" }}
                        />
                    ))}
                </div>
            )}
        </>
    );

    return (
        <div className="text-white rounded-xl overflow-hidden transition-all duration-300 py-6 px-4 m-4 flex justify-center items-center w-full">
            <div className="flex flex-col items-center justify-center m-auto space-y-8 w-full sm:w-[50%]">
                <h2 className="text-2xl font-semibold sm:text-2xl">{name}</h2>
                {renderDetails()}
                <div className="flex space-x-4 justify-center items-center mt-4 w-full sm:w-[50%]">
                    <p className="lg:text-4xl sm:text-2xl md:text-3xl font-bold">
                        {price.currency}
                        {price.cost}
                    </p>
                    {price.rate != "one time payment" ? (
                        <p className="text-md font-normal flex justify-center items-center">
                            / {price.rate}
                        </p>
                    ) : (
                        <p className="text-md font-normal flex justify-center items-center">
                            {price.rate}
                        </p>
                    )}
                </div>
                <JoinButton2 />
            </div>
            {/* Image Section */}
            <div className="flex flex-col justify-center items-center w-full sm:w-[40%] m-auto sm:order-1 lg:order-2 order-2">
                {renderImages()}
            </div>
        </div>
    );
};

export default Memberships;
