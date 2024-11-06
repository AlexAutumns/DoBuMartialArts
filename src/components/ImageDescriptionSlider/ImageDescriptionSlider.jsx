import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageDescriptionSlider = ({ facilities }) => {
    // Slider settings
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {facilities.map((data, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        {/* Text Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col lg:ml-[20%] mx-[10%] my-[5%] justify-center md:items-start lg:items-start sm:items-center gap-5 pt-12 sm:pt-0 text-center lg:text-left sm:text-center sm:order-2 lg:order-1 order-1 z-10">
                                <h1 className="text-[2.25em] sm:text-[2em] lg:text-[2.5em]">
                                    {data.name}
                                </h1>
                                <p className="text-justify text-[1.1em]">
                                    {data.desc}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div
                                className={`sm:order-1 lg:order-2 order-2
                            } flex flex-col justify-center items-center w-[80%] m-auto`}
                            >
                                <img
                                    src={data.images[0]}
                                    alt={data.name}
                                    className="flex-grow object-cover m-2 rounded-lg border-yellow-200 border-4"
                                    style={{
                                        width:
                                            data.images.length > 1
                                                ? "80%"
                                                : "95%",
                                    }}
                                />
                                {data.images.length > 1 && (
                                    <div className="flex justify-center flex-wrap mt-6">
                                        {data.images
                                            .slice(1)
                                            .map((image, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={image}
                                                    alt={data.name}
                                                    className="flex-grow object-cover m-1 rounded-lg border-yellow-200 border-4"
                                                    style={{
                                                        width: "30%",
                                                    }}
                                                />
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageDescriptionSlider;
