import React, { useState, useEffect } from "react";
import database from "../../../assets/database";
import FormFields from "./FormFields"; // Adjust the path if necessary
import ClassSelection from "./ClassSelection"; // Adjust the path if necessary
import TermsAndConditions from "./TermsAndConditions"; // Adjust the path if necessary
import MembershipSelection from "./MembershipSelection"; // Import the new MembershipSelection component

const Join = ({ membershipPlan }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [classes, setClasses] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [kidsClasses, setKidsClasses] = useState({}); // Object to hold selected state for kids classes
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        gender: "Male",
        email: "",
        phone_number: "",
        password: "",
    });
    const [checkboxStates, setCheckboxStates] = useState({
        terms: false,
        privacy: false,
    });
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [membershipPlans, setMembershipPlans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setClasses(database.classes);
                setMembershipPlans(database.membershipPlans);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckboxStates((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const handleClassChange = (event) => {
        const { name, checked } = event.target;
        setSelectedClasses((prev) =>
            checked
                ? [...prev, name]
                : prev.filter((className) => className !== name)
        );
        if (!checked) setKidsClasses((prev) => ({ ...prev, [name]: false })); // Reset kids class if parent is unchecked
    };

    const handleKidsClassChange = (event, parentClass) => {
        const isChecked = event.target.checked;
        setKidsClasses((prev) => ({ ...prev, [parentClass]: isChecked })); // Update the state for the specific kids class
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        console.log("Selected Classes:", selectedClasses);
        console.log("Kids Classes:", kidsClasses);
        console.log("Membership Plan:", selectedPlan);
    };

    if (loading) return <p className="text-white text-center">Loading...</p>;
    if (error)
        return (
            <p className="text-red-500 text-center">Error: {error.message}</p>
        );

    return (
        <div className="flex w-full flex-col justify-center items-center mt-2">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
                Welcome To DoBu!
            </h2>
            <form
                className="w-full flex flex-col justify-center items-center space-y-6"
                onSubmit={handleSubmit}
            >
                <FormFields
                    handleFieldChange={handleFieldChange}
                    formData={formData}
                />

                <MembershipSelection
                    membershipPlans={membershipPlans}
                    selectedPlan={selectedPlan}
                    handlePlanSelect={handlePlanSelect}
                />

                <ClassSelection
                    classes={classes}
                    selectedClasses={selectedClasses} // Pass selected classes
                    handleClassChange={handleClassChange}
                    handleKidsClassChange={handleKidsClassChange}
                    kidsClasses={kidsClasses}
                />

                <TermsAndConditions
                    handleCheckboxChange={handleCheckboxChange}
                    checkboxStates={checkboxStates}
                />
                <button
                    type="submit"
                    className={`bg-green-500 text-white text-[1.1em] font-bold py-2 px-4 rounded-xl mt-4 transition-all duration-300 hover:scale-[1.05] ${
                        !checkboxStates.terms || !checkboxStates.privacy
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    disabled={!checkboxStates.terms || !checkboxStates.privacy}
                >
                    Join Now
                </button>
            </form>
        </div>
    );
};

export default Join;
