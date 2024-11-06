// MembershipSelection.jsx
import React, { useState } from "react";

const MembershipSelection = ({
    membershipPlans,
    selectedPlan,
    handlePlanSelect,
}) => {
    const [visibleDetails, setVisibleDetails] = useState([]); // Track visible details

    const toggleDetails = (planName) => {
        setVisibleDetails((prev) =>
            prev.includes(planName)
                ? prev.filter((name) => name !== planName)
                : [...prev, planName]
        ); // Toggle visibility
    };

    return (
        <div className="mb-4 w-[80%] flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white mb-6">
                Select Membership
            </h3>
            <div className="flex flex-wrap justify-evenly items-center">
                {membershipPlans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`m-4 p-6 border-2 rounded-lg cursor-pointer 
                            ${
                                selectedPlan?.name === plan.name
                                    ? "bg-green-700 border-lime-300"
                                    : "bg-gray-800 border-gray-600"
                            } 
                            transition-transform transform hover:scale-105
                            flex flex-col items-center justify-center shadow-lg`}
                        onClick={() => handlePlanSelect(plan)}
                    >
                        <h4 className="text-white text-lg font-semibold mb-2">
                            {plan.name}
                        </h4>
                        <p className="text-white text-lg mb-4">
                            {plan.price.currency}
                            {plan.price.cost} / {plan.price.rate}
                        </p>

                        {plan.numberOfMartialArts != 0 ||
                        plan.details ||
                        plan.numberOfSessions != 0 ? (
                            <MembershipDetails
                                plan={plan}
                                visibleDetails={visibleDetails}
                                toggleDetails={toggleDetails}
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const MembershipDetails = ({ plan, visibleDetails, toggleDetails }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <button
                className="mt-2 text-green-400 hover:underline"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    toggleDetails(plan.name);
                }}
            >
                {visibleDetails.includes(plan.name)
                    ? "Show Less"
                    : "Learn More"}
            </button>

            {visibleDetails.includes(plan.name) && (
                <ul className="mt-2 text-gray-300 list-disc px-2 py-1">
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
            )}
        </div>
    );
};

export default MembershipSelection;
