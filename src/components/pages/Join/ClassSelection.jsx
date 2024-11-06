// ClassSelection.jsx
import React from "react";

const ClassSelection = ({
    classes,
    kidsClasses,
    selectedClasses,
    handleClassChange,
    handleKidsClassChange,
}) => {
    return (
        <div className="w-full p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-6">
                Select Classes
            </h2>

            <div className="flex w-[80%] justify-evenly items-start">
                {" "}
                {/* Adjusted width */}
                {["Classes", "Kids Classes"].map((group) => (
                    <div
                        key={group}
                        className="flex flex-col justify-center items-center mb-6 w-[45%] space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-green-400 mb-4">
                            {group}
                        </h3>
                        <div className="flex flex-col w-full space-y-2">
                            {classes.map(({ name, kids }) => {
                                // Determine display name based on group
                                const displayName =
                                    group === "Classes" ? name : kids?.name;
                                if (!displayName) return null;

                                // Selection logic for normal and kids classes
                                const isSelected =
                                    group === "Kids Classes"
                                        ? kidsClasses[name] || false // Check if the kids class is selected
                                        : selectedClasses.includes(displayName); // Check if the normal class is selected

                                return (
                                    <label
                                        key={displayName}
                                        className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-200 ease-in-out 
                                            ${
                                                isSelected
                                                    ? "bg-green-600 border-2 border-green-400 shadow-lg"
                                                    : "bg-gray-800"
                                            } 
                                            hover:bg-green-700`} // Changed color on selection and hover
                                    >
                                        <input
                                            type="checkbox"
                                            name={displayName}
                                            checked={isSelected}
                                            onChange={
                                                group === "Classes"
                                                    ? handleClassChange
                                                    : (event) =>
                                                          handleKidsClassChange(
                                                              event,
                                                              name
                                                          )
                                            } // Pass the parent class name
                                            className="mr-3 w-5 h-5 accent-green-400" // Increased size for visibility
                                        />
                                        <span
                                            className={`text-white text-lg ${
                                                isSelected
                                                    ? "font-bold"
                                                    : "font-normal"
                                            }`}
                                        >
                                            {displayName}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassSelection;
