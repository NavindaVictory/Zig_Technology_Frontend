import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OMS() {

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
                <div className="bg-blue-900 relative ">
                    {/* Background circuit pattern */}
                    <div className="absolute inset-0 z-0 opacity-30">
                        <Image
                            src="/images/production_monitoring.jpg"
                            alt="Circuit Board Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 py-16 text-start text-white">

                        {/* Welcome text */}
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            OUR BRANDS
                        </h1>

                        {/* Placeholder text - replace with actual content */}
                        <p className="max-w-3xl text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>

                <div className="bg-white py-6">
                    <div className="container mx-auto px-4">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="p-5">
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="text-blue-500 hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link href="/pages/brands" className="text-blue-500 hover:underline">
                                        Our Brands
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link href="#" className="text-blue-500 hover:underline">
                                        OMS
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="mt-2 border-t border-blue-400 w-11/12"></div>
                            <div className="p-20">
                                <h1 className="text-gray-400 font-bold text-4xl w-full content-center">
                                    OUR BRANDS
                                </h1>
                            </div>
                            <div className=" border-t border-blue-400 w-11/12"></div>
                        </div>

                        {/* brands */}
                        <div className="flex flex-col md:flex-row justify-between mt-10">
                            {/* Vertical line */}
                            <div className="w-0.5 bg-gray-200 mx-2 h-48 mt-10"></div>
                            {/* OMS */}
                            <div className="flex-1 text-center px-4">
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
                                <h3 className="text-gray-400 text-xl font-medium mb-4">
                                    OMS
                                </h3>
                                <p className="text-gray-600 p-4">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                </p>
                                <button className="border-solid border-2 border-gray-400 p-2 rounded-2xl w-auto text-gray-400 mt-2 hover:bg-gray-200 hover:cursor-pointer hover:ring-2">
                                    Read More
                                </button>
                            </div>
                            <div className="w-0.5 bg-gray-200 mx-2 h-48 mt-10"></div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}