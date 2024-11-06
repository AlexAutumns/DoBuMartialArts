import React from "react";

// Field definitions
export const fieldsLeft = [
    { label: "First Name *", type: "text", required: true },
    { label: "Last Name *", type: "text", required: true },
    {
        label: "Gender *",
        type: "select",
        required: true,
        options: ["Select Gender", "Male", "Female", "Other"],
    },
];

export const fieldsRight = [
    { label: "Email *", type: "email", required: true },
    { label: "Phone Number", type: "tel", required: false },
    { label: "Password *", type: "password", required: true },
];

// Render field function
export const renderField = ({
    label,
    type,
    required,
    options,
    handleFieldChange,
    formData,
}) => (
    <div className="mb-4" key={label}>
        <label className="block text-sm font-medium text-white">{label}</label>
        {type === "select" ? (
            <select
                className="mt-1 block w-full px-3 py-2 border-2 border-green-500 rounded-md bg-gray-700 text-white "
                required={required}
                name={label.replace(" *", "").toLowerCase().replace(" ", "_")} // Create a name for the field
                onChange={handleFieldChange}
                value={formData[label.replace(" *", "").toLowerCase().replace(" ", "_")] || ""} // Controlled component
            >
                {options.map((option, index) => (
                    <option key={index} value={option} disabled={index === 0}>
                        {option}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                className="mt-1 block w-full px-3 py-2 border-2 border-green-500 rounded-md bg-gray-700 text-white "
                placeholder={label.replace(" *", "")}
                required={required}
                name={label.replace(" *", "").toLowerCase().replace(" ", "_")} // Create a name for the field
                onChange={handleFieldChange}
                value={formData[label.replace(" *", "").toLowerCase().replace(" ", "_")] || ""} // Controlled component
            />
        )}
    </div>
);

// Main FormFields component
const FormFields = ({ handleFieldChange, formData }) => {
    return (
        <div className="flex w-[80%] justify-evenly mb-6">
            <div className="w-[30%] pr-2">
                {fieldsLeft.map((field) =>
                    renderField({ ...field, handleFieldChange, formData })
                )}
            </div>
            <div className="w-[30%] pl-2">
                {fieldsRight.map((field) =>
                    renderField({ ...field, handleFieldChange, formData })
                )}
            </div>
        </div>
    );
};

export default FormFields;
