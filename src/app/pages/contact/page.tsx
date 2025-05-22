import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Contact Us | Zigo Technology (Pvt) Ltd.</title>
                <meta
                    name="description"
                    content="Leading manufacturer and distributor of mobile phone accessories in Sri Lanka."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-blue-900 relative">
                    <div className="absolute inset-0 z-0 h-100">
                        <Image
                            src="/images/contact_us_background.jpg"
                            alt="Manufacturing Floor Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 text-center text-white">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 mt-18">
                            CONTACT US
                        </h1>
                    </div>
                </div>

                {/* Breadcrumb Navigation */}
                <div className="bg-gray-100 py-3">
                    <div className="container mx-auto px-4 sm:px-8 md:px-16">
                        <div className="flex items-center text-sm text-gray-600">
                            <span>Home</span>
                            <span className="mx-2">›</span>
                            <span className="font-medium">Contact Us</span>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-24 md:mt-36 border-t border-blue-400"></div>

                {/* Main Contact Section */}
                <div className="py-12 sm:py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-8 md:px-16">
                        {/* Company Name Header */}
                        <h2 className="text-gray-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
                            ZIGO TECHNOLOGY (PVT) LTD
                        </h2>

                        <div className="flex flex-col md:flex-row gap-10">
                            {/* Contact Information Section */}
                            <div className="w-full md:w-1/2 space-y-8">
                                {/* Company Description */}
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                    dolor in
                                </p>

                                {/* Address */}
                                <div>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-3">
                                        Address
                                    </h3>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut
                                    </p>
                                </div>

                                {/* Hotline */}
                                <div className="flex items-center">
                                    <h3 className="text-2xl font-medium text-gray-800 mr-6">
                                        Hotline
                                    </h3>
                                    <span className="text-2xl text-gray-600 font-medium">
                                        +94 012345678
                                    </span>
                                </div>

                                {/* Island Wide Sales Officers Section */}
                                <div>
                                    <h3 className="text-2xl font-medium text-gray-800 mt-8 mb-3">
                                        ISLAND WIDE SALES OFFICERS
                                    </h3>
                                    <div className="grid grid-cols-2 gap-y-4 text-gray-600 text-base sm:text-lg">
                                        <div>Colombo</div>
                                        <div>07654566544</div>

                                        <div>Kalutara</div>
                                        <div>07654566544</div>

                                        <div>Gampaha</div>
                                        <div>07654566544</div>

                                        <div>Galle</div>
                                        <div>07654566544</div>

                                        <div>Kandy</div>
                                        <div>07654566544</div>

                                        <div>Anuradhapura</div>
                                        <div>07654566544</div>

                                        <div>Polonnaruwa</div>
                                        <div>07654566544</div>

                                        <div>Ampara/ Badulla</div>
                                        <div>07654566544</div>

                                        <div>Jaffna Area</div>
                                        <div>07654566544</div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section */}
                            <div className="w-full md:w-[650px] h-180 border-black border-2">
                                <div className="w-full h-full relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575084097891!2d79.8730162!3d6.914682899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnNTIuOSJOIDc5wrA1MicyMi45IkU!5e0!3m2!1sen!2slk!4v1622543928096!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}