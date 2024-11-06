import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    // Show or hide button based on scroll position
    const handleScroll = () => {
        setIsVisible(window.scrollY > 200); // Set visibility based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 
                    bg-gradient-to-r from-[#4E9F3D] to-secondColor
                    text-white font-bold
                    rounded-full
                    p-3
                    flex justify-center items-center
                    hover:scale-[1.1] shadow-lg transition duration-300 ease-in-out"
                    aria-label="Back to Top" // Accessibility feature
                >
                    Back To Top
                </button>
            )}
        </>
    );
};

export default BackToTopButton;
