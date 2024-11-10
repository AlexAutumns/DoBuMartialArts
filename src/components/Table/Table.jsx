import React from "react";

/**
 * Renders a table based on the provided data.
 * The first item in the data array is used as the table header.
 *
 * @param {Object[]} data - An array of objects representing the table data.
 * @param {string} data[].row - The header row data for the table.
 * @param {Array} data[].cols - An array of column data for each row.
 * @param {string|number|boolean} data[].cols[] - Elements can be strings, numbers (including floats and doubles), or booleans.
 * @returns {JSX.Element} The rendered table component.
 */
const Table = ({ data }) => {
    const tableHeaders = data[0];
    const tableData = data.slice(1);

    return (
        <div
            className={`
                flex flex-col justify-center items-center 
                p-0 rounded-xl 
                max-w-[90%]
                shadow-lg shadow-yellow-200
            `}
        >
            <div className="overflow-x-auto w-full">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-fourthColor text-white">
                            <th
                                className={`
                                    py-3 px-4 text-[1.4em] 
                                    bg-gradient-to-r from-lime-400 to-lime-600 
                                    text-transparent bg-clip-text
                                `}
                            >
                                {tableHeaders.row}
                            </th>
                            {tableHeaders.cols.map((col, index) => (
                                <th
                                    key={index}
                                    className={`
                                        py-3 px-4 text-[1.4em] 
                                        bg-gradient-to-r from-lime-400 to-lime-600 
                                        text-transparent bg-clip-text
                                    `}
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr
                                key={index}
                                className={`
                                    relative transition-all duration-300 ease-in-out ${
                                        index % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
                                    } hover:scale-[1.02]
                                `}
                            >
                                <td
                                    className={`
                                        py-4 px-6 text-[1.3em] font-semibold text-center 
                                        bg-gradient-to-r from-lime-400 to-lime-600 
                                        text-transparent bg-clip-text 
                                        border-y-2 border-yellow-200 rounded-lg
                                    `}
                                >
                                    {row.row}
                                </td>
                                {row.cols.map((classItem, classIndex) => (
                                    <td
                                        key={classIndex}
                                        className={`
                                            py-4 px-4 transition-all duration-300 ease-in-out 
                                            text-center text-[1.2em] 
                                            hover:text-white hover:text-[1.3em] 
                                            bg-gradient-to-l from-yellow-200 to-lime-600 
                                            text-transparent bg-clip-text 
                                            border-2 border-yellow-200 rounded-lg
                                        `}
                                    >
                                        {classItem}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
