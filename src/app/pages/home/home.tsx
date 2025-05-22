"use client"
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from 'react-countup';

export default function Home() {
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        // Trigger the count-up animation when the component mounts
        if (window.scrollY < 1000) {
            setStartCount(true);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Zigo Technology (Pvt) Ltd.</title>
                <meta
                    name="description"
                    content="Your trusted partner in mobile phone accessories."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-blue-900 relative">
                    {/* Background circuit pattern */}
                    <div className="absolute inset-0 z-0 opacity-30">
                        <Image
                            src="/images/luxury-blue-golden-background_23-2149329427.avif"
                            alt="Circuit Board Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
                        {/* Hero section with large logo */}
                        <div className="mb-12 flex justify-center">
                            <div className="relative w-full max-w-2xl h-32">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Zigo Technology Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Welcome text */}
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Welcome to Zigo Technology (Pvt) Ltd.
                        </h1>

                        <h2 className="text-xl sm:text-2xl mb-16">
                            Your trusted partner in mobile phone accessories.
                        </h2>

                        {/* Placeholder text - replace with actual content */}
                        <p className="max-w-4xl mx-auto text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>

                {/* Service Icons Section */}
                <div className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                            {/* Brands */}
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/brand.webp"
                                            alt="Brands Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-500 uppercase text-xl font-medium">
                                    BRANDS
                                </h3>
                            </div>

                            {/* Production */}
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/production.avif"
                                            alt="Production Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-500 uppercase text-xl font-medium">
                                    PRODUCTION
                                </h3>
                            </div>

                            {/* Contact Us */}
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/contact.png"
                                            alt="Contact Us Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-500 uppercase text-xl font-medium">
                                    CONTACT US
                                </h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mt-8 border-t border-blue-400 w-11/12"></div>
                        </div>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-gray-500 text-4xl font-medium text-center mb-6">
                            ABOUT US
                        </h2>
                        <h3 className="text-gray-600 text-2xl font-medium text-center mb-6">
                            COMPANY OVERVIEW
                        </h3>

                        <div className="mb-12">
                            <div className="max-w-4xl mx-auto text-gray-600 space-y-4 text-left">
                                <p>
                                    Zigo Technology (PVT) Ltd is a leading company in the
                                    manufacturing, importation, export, and distribution of mobile
                                    phone accessories, spare parts, and electrical equipment in
                                    Sri Lanka. We are the proud owner of the OMS brand (OMS Mobile
                                    Phone Accessories) and serve as the exclusive distributor for
                                    Oneam, Xpert, and Envy in the mobile accessory sector.
                                </p>

                                <p>
                                    Founded in 2006 and incorporated in 2014, Zigo Technology has
                                    grown rapidly over the years, expanding its services
                                    island-wide while maintaining a strong focus on customer
                                    satisfaction. Our dedication to excellence has enabled us to
                                    build strategic partnerships with international markets,
                                    including the People's Republic of China (PRC), Thailand,
                                    Singapore, Bangladesh, and India.
                                </p>

                                <p>
                                    In 2019, we launched our own mobile phone accessory
                                    manufacturing plant in Sri Lanka, marking a significant
                                    milestone in our journey. With the support of our extensive
                                    distribution network, we remain committed to delivering
                                    high-quality products and ensuring fast, efficient
                                    distribution to meet the growing demands of our customers.
                                </p>
                            </div>
                        </div>

                        {/* Vision and Mission */}
                        <div className="flex flex-col md:flex-row justify-between">
                            {/* Vision */}
                            <div className="flex-1 text-center md:border-r md:border-gray-300 px-4">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/vision.jpg"
                                            alt="Vision Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-600 text-2xl font-medium mb-4">
                                    OUR VISION
                                </h3>
                                <p className="text-gray-600">
                                    To become the most famous mobile phone accessory
                                    <br />
                                    and electronic equipment brand of the world at 2030.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="flex-1 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/mission.jpg"
                                            alt="Mission Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-600 text-2xl font-medium mb-4">
                                    OUR MISSION
                                </h3>
                                <p className="text-gray-600">
                                    Provide high-quality mobile phone accessories and
                                    <br />
                                    electronic equipment for customers around the globe.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mt-8 border-t border-blue-400 w-11/12"></div>
                        </div>

                    </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-gradient-to-b from-white to-blue-500 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-gray-500 text-4xl font-medium text-center mb-6">
                            OUR ACHIEVEMENTS
                        </h2>

                        <div className="flex flex-wrap justify-center gap-8">
                            {/* 15 Years Experience */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-5xl font-bold mb-2">{startCount && <CountUp end={15} duration={6} separator="," />}</h3>
                                <p className="text-blue-700 font-semibold uppercase">YEARS</p>
                                <p className="text-blue-700 text-sm">
                                    Competence On Mobile Accessory Industry
                                </p>
                            </div>

                            {/* 3500+ Products */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-5xl font-bold mb-2">{startCount && <CountUp end={3500} duration={4} separator="," />}</h3>
                                <p className="text-blue-700 font-semibold uppercase">PLUS</p>
                                <p className="text-blue-700 text-sm">PRODUCTS</p>
                            </div>

                            {/* Island-wide Customer Base */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-2xl font-bold mb-2">
                                    ISLAND WIDE
                                </h3>
                                <p className="text-blue-700 font-bold text-3xl uppercase">
                                    CUSTOMER
                                </p>
                                <p className="text-blue-700 font-bold text-2xl">BASE</p>
                            </div>

                            {/* Island-wide Distribution Network */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-2xl font-bold mb-2">
                                    ISLAND WIDE
                                </h3>
                                <p className="text-blue-700 font-bold text-3xl uppercase">
                                    DISTRIBUTION
                                </p>
                                <p className="text-blue-700 font-bold text-2xl">NETWORK</p>
                            </div>
                        </div>

                        <div className="text-center mt-12 py-6 text-white rounded-lg">
                            <h3 className="text-4xl font-medium">
                                LEADING MOBILE ACCESSORY MANUFACTURER IN SRI LANKA
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Milestones */}

                <div className="bg-white py-10 flex flex-col items-center">
                    <div className="border-t border-blue-400 w-11/12"></div>
                    <div className="container mx-auto px-4">
                        <h2 className="text-gray-500 text-4xl font-medium text-center mb-12 pt-12">
                            MILESTONES
                        </h2>
                        <div className="flex flex-col items-center mb-10">
                            <div className="relative h-[400px] w-9/12 pt-5">
                                {/* SVG Graph Path */}
                                <svg
                                    viewBox="0 0 1200 400"
                                    className="absolute w-full h-full p-5"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M150,350 C500,350 900,300,1150,50"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                    {/* Milestone Bubbles */}
                                    {[
                                        { x: 150, y: 350, year: "2006", label: "Founded the company" },
                                        { x: 300, y: 345, year: "2014", label: "Incorporated the company" },
                                        { x: 450, y: 334, year: "2014", label: "Incorporated the company" },
                                        { x: 600, y: 310, year: "2016", label: "Started Dealer Network" },
                                        { x: 750, y: 265, year: "2019", label: "Launched Onesam" },
                                        { x: 900, y: 202, year: "2020", label: "Factory Started" },
                                        { x: 1050, y: 100, year: "2022", label: "Entered Indonesia" },
                                        { x: 1150, y: 50, year: "2023", label: "Entered UAE" },
                                    ].map((milestone, i) => (
                                        <g key={i} className='group'>

                                            {/* Year */}
                                            <text
                                                x={milestone.x}
                                                y={milestone.y - 15}
                                                textAnchor="middle"
                                                className="fill-blue-700 text-sm font-semibold"
                                            >
                                                {milestone.year}
                                            </text>
                                            {/* Tooltip */}
                                            <g className='opacity-0 group-hover:opacity-100 transition-opacity'>
                                                {/* Bubble */}
                                                <circle
                                                    cx={milestone.x}
                                                    cy={milestone.y}
                                                    r="12"
                                                    className="fill-blue-200 stroke-blue-200 stroke-2 cursor-pointer group hover:fill-blue-500 hover:stroke-blue-400 hover:cursor-pointer duration-200 ease-in-out"
                                                />
                                                <foreignObject
                                                    x={milestone.x - 75}
                                                    y={milestone.y - 290}
                                                    width="150"
                                                    height="50"
                                                    className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                                                >
                                                    <div className="bg-white text-blue-600 text-xs text-center font-medium shadow-lg border rounded p-2 pointer-events-none">
                                                        {milestone.label}
                                                    </div>
                                                </foreignObject>
                                                {/* Arrow */}
                                                <path
                                                    d={`M${milestone.x},${milestone.y - 250} L${milestone.x},${milestone.y - 60}`}
                                                    stroke="#3B82F6"
                                                    strokeWidth="2"
                                                    markerEnd="url(#arrowhead)"
                                                />
                                            </g>
                                        </g>
                                    ))}
                                    {/* Define Arrowhead Marker */}
                                    <defs>
                                        <marker
                                            id="arrowhead"
                                            markerWidth="10"
                                            markerHeight="7"
                                            refX="0"
                                            refY="3.5"
                                            orient="auto"
                                        >
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
