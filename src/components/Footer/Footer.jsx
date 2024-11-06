import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import database from "../../assets/database";

const Footer = React.forwardRef((props, ref) => {
    const [resourcesPages, setResourcesPages] = useState([]);
    const [companyPages, setCompanyPages] = useState([]);
    const [socials, setSocials] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchPages = async () => {
            try {
                setResourcesPages(database.resourcesPages);
                setCompanyPages(database.companyPages);
                setSocials(database.socials);
            } catch (error) {
                console.error("Error in fetching pages: ", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPages();
        console.log("Resources Pages: ", resourcesPages);
        console.log("Company Pages: ", companyPages);
        console.log("Socials: ", socials);
    }, []);

    return (
        <div
            ref={ref}
            className="
                flex justify-evenly items-start    
                w-full
                bg-[#36622B]
                pt-6 pb-10 mt-10
                shadow-top-lg shadow-lime-300
                text-[16px] text-white"
        >
            <div id="Company" className="flex flex-col text-white">
                <h1 className="text-[1.25em] font-bold justify-center">
                    Company
                </h1>
                <ul className="flex items-center justify-center flex-col w-full space-y-2 py-2 text-[0.9em]">
                    {companyPages.map((page, index) => (
                        <li key={index}>
                            <Link
                                to={page.link}
                                className="text-white hover:text-yellow-200 duration-200"
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div id="Resources" className="flex flex-col text-white">
                <h1 className="text-[1.25em] font-bold justify-center">
                    Resources
                </h1>
                <ul className="flex items-center justify-center flex-col w-full space-y-2 py-2 text-[0.9em]">
                    {resourcesPages.map((page, index) => (
                        <li key={index}>
                            <Link
                                to={page.link}
                                className="text-white hover:text-yellow-200 duration-200"
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div id="socials" className="flex flex-col text-white">
                <h1 className="text-[1.25em] font-bold justify-center">
                    Socials
                </h1>
                <ul className="flex items-center justify-center flex-col w-full space-y-2 py-2 text-[0.9em]">
                    {socials.map((page, index) => (
                        <li key={index}>
                            <a
                                href={page.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-200 duration-200"
                            >
                                {page.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default Footer;
