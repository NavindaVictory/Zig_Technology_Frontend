"use client"
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from 'next/navigation';

export default function Brands() {

    const router = useRouter();

    const handleXpertClick = () => {
        router.push('/pages/brands/xpert');
    }

    const handleOmsClick = () => {
        router.push('/pages/brands/oms');
    }

    const handleOnesamClick = () => {
        router.push('/pages/brands/onesam');
    }

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
                    <div className="container mx-auto px-4 mb-20">
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
                            <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>
                            {/* OMS */}
                            <div className="flex-1 text-center">
                                <div className="flex justify-center">
                                    <div className="w-3xs h-52 relative">
                                        <Image
                                            src="/images/Web site images-01.png"
                                            alt="Vision Icon"
                                            height={300}
                                            width={300}
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
                                <button className="border-solid border-2 border-gray-400 p-2 rounded-2xl w-auto text-gray-400 mt-2 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-110 duration-300" onClick={handleOmsClick}>
                                    Read More
                                </button>
                            </div>
                            <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>
                            {/* ONESAM */}
                            <div className="flex-1 text-center">
                                <div className="flex justify-center">
                                    <div className="w-3xs h-52  relative">
                                        <Image
                                            src="/images/Web site images-02.png"
                                            alt="Vision Icon"
                                            height={300}
                                            width={300}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-600 text-2xl font-medium mb-4">
                                    ONESAM
                                </h3>
                                <p className="text-gray-600 p-4">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                </p>
                                <button className="border-solid border-2 border-gray-400 p-2 rounded-2xl w-auto text-gray-400 mt-2 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-110 duration-300" onClick={handleOnesamClick}>
                                    Read More
                                </button>
                            </div>
                            <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>
                            {/* X-PERT */}
                            <div className="flex-1 text-center">
                                <div className="flex justify-center">
                                    <div className="w-3xs h-52  relative">
                                        <Image
                                            src="/images/Web site images-03.png"
                                            alt="Mission Icon"
                                            height={300}
                                            width={300}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-600 text-2xl font-medium mb-4 ">
                                    X-PERT
                                </h3>
                                <p className="text-gray-600 p-4">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                </p>
                                <button className="border-solid border-2 border-gray-400 p-2 rounded-2xl w-auto text-gray-400 mt-2 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-110 duration-300" onClick={handleXpertClick}>
                                    Read More
                                </button>
                            </div>
                            <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}