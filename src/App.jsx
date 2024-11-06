import React, { useEffect, useRef, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Import pages
import Home from "./components/pages/Home.jsx";
import Classes from "./components/pages/Classes.jsx";
import Instructors from "./components/pages/Instructors/Instructors.jsx";
import Memberships from "./components/pages/Memberships.jsx";
import Join from "./components/pages/Join/Join.jsx";
import Login from "./components/pages/Login.jsx";
import Instructor from "./components/pages/Instructors/Instructor.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Facilities from "./components/pages/Facilities.jsx";
import BackToTopButton from "./components/Buttons/BackToTopButton.jsx";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [pathname]);

    return null;
};

const App = () => {
    // Calculating Navbar height
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef();

    // Calculating Footer height
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef();

    useEffect(() => {
        const checkHeights = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
            if (footerRef.current) {
                setFooterHeight(footerRef.current.offsetHeight);
            }
        };

        // Check heights immediately
        checkHeights();

        // Check heights again after 100 milliseconds
        const timer = setTimeout(() => {
            checkHeights();
        }, 100);

        // Cleanup timer
        return () => clearTimeout(timer);
    }, [navbarRef, footerRef]);

    return (
        <Router>
            <div className="flex flex-col min-h-screen min-w-screen font-ubuntu bg-fourthColorDark">
                <Navbar ref={navbarRef} />
                <ScrollToTop />
                <div
                    style={{
                        marginTop: `${navbarHeight * 1.75}px`,
                        paddingBottom: `${footerHeight * 0.25}px`,
                        flex: "1",
                    }}
                    className="text-white bg-fourthColorDark min-w-full min-h-full"
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/instructors" element={<Instructors />} />
                        <Route
                            path="/instructors/:instructorId"
                            element={<Instructor />}
                        />
                        <Route path="/memberships" element={<Memberships />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <BackToTopButton />
                <Footer ref={footerRef} />
            </div>
        </Router>
    );
};

export default App;
