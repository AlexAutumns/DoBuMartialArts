// Import Local Images

import Logo from "./logo3.png";

// Pages Images
import ClassesImage from "./images/others/classes.webp";
import FacilitiesImage from "./images/others/facilities.webp";
import InstructorsImage from "./images/others/instructors.jpg";
import MembershipsImage from "./images/others/memberships.jpg";

// Facilities Images
import SaunaTofuImage from "./images/hero/sauna1.png";
import WorkoutTofuImage from "./images/hero/workout1.png";
import KickTofuImage from "./images/hero/kick1.png";
import ShowerRoom1 from "./images/hero/showerRoom1.jpg";
import ShowerRoom2 from "./images/hero/showerRoom2.png";
import ShowerRoom3 from "./images/hero/showerRoom3.png";

// Classes Images
import Judo from "./images/courses/judo1.jpg";
import KidsJudo from "./images/courses/kidsjudo.jpg";
import Karate1 from "./images/courses/karate1.jpg";
import JiuJitsu1 from "./images/courses/jiujitsu1.jpg";
import MuayThai from "./images/courses/muaythai1.jpg";
import OneMorePushUp from "./images/courses/onemorepushup.jpg";
import Gym1 from "./images/courses/gym1.jpg";

// Instructor Images

// Mauricio Gomez
import MauricioGomez1 from "./images/instructors/MauricioGomez1.jpg";
import MauricioGomez2 from "./images/instructors/MauricioGomez2.jpg";
import MauricioGomez3 from "./images/instructors/MauricioGomez3.png";

// Sarah Nova
import SarahNova1 from "./images/instructors/SarahNova1.jpg";
import SarahNova2 from "./images/instructors/SarahNova2.jpg";

// Guy Victory
import GuyVictory1 from "./images/instructors/GuyVictory1.jpg";
import GuyVictory2 from "./images/instructors/GuyVictory2.jpg";

// Traci Santiago
import TraciSantiago1 from "./images/instructors/TraciSantiago1.jpg";
import TraciSantiago2 from "./images/instructors/TraciSantiago2.jpg";

// Morris Davis
import MorrisDavis1 from "./images/instructors/MorrisDavis1.jpg";

// Harpreet Kaur
import HarpreetKaur1 from "./images/instructors/HarpreetKaur1.jpg";

// Other Images
import ThumbsUp from "./images/others/thumbsUp.png";
import PersonalFitnessTraining1 from "./images/others/PersonalFitnessTraining1.jpg";
import SelfDefenceCourse1 from "./images/others/SelfDefenceCourse1.jpg";

import FitnessRoom2 from "./images/others/FitnessRoom2.jpg";

// Placeholder Images
import placeholderImage1 from "./images/others/placeholderImage.png";
import placeholderImage2 from "./images/others/placeholderImage2.png";
import placeholderImage3 from "./images/others/placeholderImage3.png";
import placeholderImage4 from "./images/others/placeholderImage4.png";

const database = {
    banner: [
        { name: "Thumbs up", desc: "Tofu Thumbs Up", images: [ThumbsUp] },
        { name: "Instructors", desc: "", images: [InstructorsImage] },
    ],

    pages: [
        { name: "Classes", link: "/classes", desc: "", images: [ClassesImage] },
        {
            name: "Facilites",
            link: "/facilities",
            desc: "",
            images: [FacilitiesImage],
        },
        {
            name: "Instructors",
            link: "/instructors",
            desc: "",
            images: [InstructorsImage],
        },
        {
            name: "Memberships",
            link: "/memberships",
            desc: "",
            images: [MembershipsImage],
        },
        // Add more pages as needed
    ],

    companyPages: [
        { name: "Contact Us", link: "/contact" },
        // Add more pages as needed
    ],

    resourcesPages: [
        { name: "About Us", link: "/about" },
        { name: "FAQ", link: "/faq" },
        // Add more pages as needed
    ],

    socials: [
        {
            name: "Twitter / X",
            link: "https://x.com/home",
            icon: "",
        },
        { name: "Facebook", link: "https://www.facebook.com", icon: "" },
    ],

    facilities: [
        {
            images: [SaunaTofuImage],
            desc: "Relax and feel good in our Tofu Sauna, a warm and cozy place that helps you feel better. Just like tofu is good for you, our sauna has warm, dry heat that calms your muscles and takes away stress. Step inside, enjoy the gentle warmth, and unwind after a hard workout or martial arts class. Come and enjoy the nice mix of relaxation and health at the Tofu Sauna!",
            name: "DoBu Sauna",
        },
        {
            images: [WorkoutTofuImage],
            desc: "Our gym embraces the spirit of tofu, offering a flexible and nourishing environment for your fitness journey. Just like tofu adapts to various flavors and dishes, our gym is equipped with everything you need to meet your fitness goals. \nWhether you're looking to build muscle, improve your endurance, or enhance your overall wellness, our gym provides diverse options. Join us to cultivate your fitness journey and nourish your body!",
            name: "DoBu Gym",
        },
        {
            images: [KickTofuImage],
            desc: "The martial arts area at DoBu Martial Arts is a spacious and well-equipped facility that embodies adaptability, much like tofu. With its large matted floor providing a safe and comfortable training space, students can explore various disciplines such as karate, judo, and jiu-jitsu. Just as tofu can be transformed into countless dishes by absorbing flavors, this environment fosters a versatile learning experience, allowing martial artists to embrace and master different techniques. Ultimately, both the training space and tofu serve as strong foundations for personal growth and development, inviting practitioners to enjoy their journey in martial arts.",
            name: "Martial Arts Training Area",
        },
        {
            images: [ShowerRoom1, ShowerRoom2, ShowerRoom3],
            desc: "Shower Time!",
            name: "DoBu Showers",
        },
    ],
    classes: [
        {
            name: "Judo",
            desc: "Judo is a grappling martial art that emphasizes throwing and control techniques. It promotes efficiency, physical fitness, and self-discipline.",
            images: [Judo],
            kids: {
                name: "Kids Judo",
                desc: "Fun and engaging introduction to the principles of Judo, tailored for children.",
                images: [KidsJudo],
            },
        },
        {
            name: "Karate",
            desc: "Karate is a striking martial art that emphasizes punching, kicking, and defensive blocking. It promotes physical fitness and self-discipline.",
            images: [Karate1],
            kids: {
                name: "Kids Karate",
                description:
                    "A fun and energetic class designed to introduce kids to the basics of Karate while building confidence.",
                images: [],
            },
        },
        {
            name: "Jiu-Jitsu",
            desc: "Jiu-Jitsu focuses on ground fighting techniques and submissions. It is an effective self-defense method that emphasizes leverage and technique.",
            images: [JiuJitsu1],
            kids: {
                name: "Kids Jiu-Jitsu",
                desc: "Engaging classes that teach children the fundamentals of Jiu Jitsu in a safe environment.",
                images: [],
            },
        },
        {
            name: "Muay Thai",
            desc: "Muay Thai is a striking art known as the 'Art of Eight Limbs,' utilizing punches, kicks, elbows, and knees. It enhances physical fitness and self-defense skills.",
            images: [MuayThai],
            kids: null,
        },
        {
            name: "Fitness",
            desc: "A general fitness class designed to improve overall health and wellbeing.",
            images: [OneMorePushUp],
        },
    ],
    classesSchedule: [
        {
            row: "Time",
            cols: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },

        {
            row: "06:00 - 07:30",
            cols: [
                "Jiu-Jutsu",
                "Karate",
                "Judo",
                "Jiu-Jutsu",
                "Muay Thai",
                "",
                "",
            ],
        },
        {
            row: "08:00 - 10:00",
            cols: [
                "Muay Thai",
                "Private Tuition",
                "Private Tuition",
                "Private Tuition",
                "Jiu-Jutsu",
                "Private Tuition",
                "Private Tuition",
            ],
        },
        {
            row: "10:30 - 12:00",
            cols: [
                "Private Tuition",
                "Private Tuition",
                "Private Tuition",
                "Private Tuition",
                "Private Tuition",
                "Judo",
                "Karate",
            ],
        },
        {
            row: "13:00 - 14:30",
            cols: [
                "Open Mat / Personal Practice",
                "Open Mat / Personal Practice",
                "Open Mat / Personal Practice",
                "Open Mat / Personal Practice",
                "Open Mat / Personal Practice",
                "Karate",
                "Judo",
            ],
        },
        {
            row: "15:00 - 17:00",
            cols: [
                "Kids Jiu-Jutsu",
                "Kids Judo",
                "Kids Karate",
                "Kids Jiu-Jutsu",
                "Kids Judo",
                "Muay Thai",
                "Jiu-Jiutsu",
            ],
        },
        {
            row: "17:30 - 19:00",
            cols: [
                "Karate",
                "Muay Thai",
                "Judo",
                "Jiu-Jutsu",
                "Muay Thai",
                "",
                "",
            ],
        },
        {
            row: "19:00 - 21:00",
            cols: [
                "Jiu Jutsu",
                "Judo",
                "Jiu-Jutsu",
                "Karate",
                "Private Tuition",
                "",
                "",
            ],
        },
    ],
    instructors: [
        {
            id: 0,
            name: "Mauricio Gomez",
            jobs: ["Gym Owner", "Head Martial Arts Coach"],
            desc: "He has trained many successful fighters in various disciplines and is passionate about teaching and helping students reach their full potential.",
            details: [
                "Coaches in all martial arts",
                "4th Dan Backbelt Judo",
                "3rd Dan Black Jiu-Jutsu",
                "1st Dan Blackbelt Karate",
                "Accredited Muay Thai Coach",
            ],
            images: [MauricioGomez1, MauricioGomez2, MauricioGomez3],
        },
        {
            id: 1,
            name: "Sarah Nova",
            jobs: ["Assistant Martial Arts Coach"],
            desc: "With extensive experience in teaching martial arts to students of all ages and skill levels, she has competed in numerous national and international tournaments, focusing on enhancing her students' technique, fitness, and confidence.",
            details: ["5th Dan Karate"],
            images: [SarahNova1, SarahNova2],
        },
        {
            id: 2,
            name: "Guy Victory",
            jobs: ["Assistant Martial Arts Coach"],
            desc: "He is an experienced competitor in both sports, has a lot of knowledge about grappling techniques and ground fighting, and is dedicated to helping his students improve their skills and reach their goals.",
            details: ["2nd Dan Blackbelt Jiu-Jutsu", "1st Dan Blackbelt Judo"],
            images: [GuyVictory1, GuyVictory2],
        },
        {
            id: 3,
            name: "Morris Davis",
            jobs: ["Assistant Martial Arts Coach"],
            desc: "He has trained with some of the best fighters in the world, is passionate about helping his students improve their striking skills and overall fitness, and is known for his positive attitude and supportive coaching style.",
            details: ["Accredited Muay Thai Coach", "3rd Dan Blackbelt Karate"],
            images: [MorrisDavis1],
        },
        {
            id: 4,
            name: "Traci Santiago",
            jobs: ["Fitness Coach"],
            desc: "She is experienced in coaching individuals and groups, has helped many athletes improve their performance and reach their goals, and specializes in creating strength and conditioning programs for combat athletes.",
            details: [
                "BSc in Sport Science",
                "Qualified in Health and Nutrition",
                "Specialises in Devising Strength and Conditioning Programs for Combat Athletes",
            ],
            images: [TraciSantiago1, TraciSantiago2],
        },
        {
            id: 5,
            name: "Harpreet Kaur",
            jobs: ["Fitness Coach"],
            desc: "She specializes in injury prevention and rehabilitation, is experienced in working with both athletes and non-athletes, and is passionate about helping her clients achieve their fitness and health goals.",
            details: ["BSc in Physiotherapy", "MSc in Sport Science"],
            images: [HarpreetKaur1],
        },
    ],

    membershipPlans: [
        {
            // Basic Membership Plan
            name: "Basic",
            details: [], //["2 Sessions per Week"],
            numberOfMartialArts: 1,
            numberOfSessions: 2, // Per week
            price: {
                currency: "£",
                cost: 25.0,
                rate: "month",
            },
        },
        {
            // Intermediate Membership Plan
            name: "Intermediate",
            details: [], //["3 Sessions per Week"],
            numberOfMartialArts: 1,
            numberOfSessions: 3, // Per week
            price: {
                currency: "£",
                cost: 35.0,
                rate: "month",
            },
        },
        {
            // Advanced Membership Plan
            name: "Advanced",
            details: [], //["5 Sessions per Week"],
            numberOfMartialArts: 2,
            numberOfSessions: 5, // Per week
            price: {
                currency: "£",
                cost: 45.0,
                rate: "month",
            },
        },
        {
            // Elite Membership Plan
            name: "Elite",
            details: ["Unlimited Classes"],
            numberOfMartialArts: "Any",
            numberOfSessions: "Unlimited", // Per week
            price: {
                currency: "£",
                cost: 60.0,
                rate: "month",
            },
        },
        {
            // Private Tuition Plan
            name: "Private",
            details: [], //,
            numberOfMartialArts: "Any", // No specific martial arts included
            numberOfSessions: "Custom", // No sessions included
            price: {
                currency: "£",
                cost: 15.0,
                rate: "hour",
            },
        },
        {
            // Junior Membership Plan
            name: "Junior Membership",
            details: [`Can attend "All-Kids Martial Arts" sessions`],
            numberOfMartialArts: "Any",
            numberOfSessions: "Unlimited", // Per week
            price: {
                currency: "£",
                cost: 60.0,
                rate: "month",
            },
        },
    ],

    // For Specialist Courses and Fitness Training
    fitnessCourses: [
        {
            name: "Beginners' Self-Defence Course",
            details: ["Six-Week Program", "2 x 1-hour sessions per week"],
            numberOfSessions: 2, // Per week
            price: {
                currency: "£",
                cost: 180.0,
                rate: "one time payment",
            },
            images: [SelfDefenceCourse1],
        },
        {
            name: "Use of Fitness Room",
            details: ["Access the fitness room during opening hours"],
            numberOfSessions: 0, // No specific sessions set
            price: {
                currency: "£",
                cost: 6.0,
                rate: "visit",
            },
            images: [FitnessRoom2],
        },
        {
            name: "Personal Fitness Training",
            details: ["One-on-one training with a certified personal trainer"],
            numberOfSessions: 0, // No specific sessions set
            price: {
                currency: "£",
                cost: 35.0,
                rate: "hour",
            },
            images: [PersonalFitnessTraining1],
        },
    ],

    aboutImages: { name: "About Us", images: [Logo] },

    others: [],
    defaultImage: placeholderImage1,
};

export default database;
