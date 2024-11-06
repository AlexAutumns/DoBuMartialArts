import React from "react";

const TermsAndConditions = ({ handleCheckboxChange, checkboxStates }) => {
    return (
        <div className="w-[40%] flex justify-evenly items-center mb-4">
            {["terms", "privacy"].map((id) => (
                <div className="flex items-center" key={id}>
                    <input
                        type="checkbox"
                        id={id}
                        className="mr-2"
                        checked={checkboxStates[id]}
                        onChange={handleCheckboxChange} 
                    />
                    <label htmlFor={id} className="text-white">
                        {id === "terms" ? "Accept Terms and Conditions" : "Privacy Policy"}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default TermsAndConditions;
