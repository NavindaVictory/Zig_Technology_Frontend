import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Production() {
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
              PRODUCTION AND DISTRIBUTION
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
            <div className="mt-8 border-t border-blue-400"></div>
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
            <div className="mt-8 border-t border-blue-400"></div>
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
                <h3 className="text-blue-700 text-5xl font-bold mb-2">15</h3>
                <p className="text-blue-700 font-semibold uppercase">YEARS</p>
                <p className="text-blue-700 text-sm">
                  Competence On Mobile Accessory Industry
                </p>
              </div>

              {/* 3500+ Products */}
              <div className="p-8 text-center w-full md:w-64">
                <h3 className="text-blue-700 text-5xl font-bold mb-2">3500</h3>
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

        {/* Milestones Section */}
        {/* Milestones Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mt-4 border-t border-blue-400"></div>

            <h2 className="text-gray-500 text-4xl font-medium text-center mt-8">
              MILESTONES
            </h2>

            {/* Timeline graph visualization */}
            <div className="relative mt-16 px-4 overflow-hidden">
              {/* Upward sloping line with dots */}
              <div className="relative h-96 md:h-[28rem]">
                {/* Blue gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 rounded-lg"></div>

                {/* The timeline line */}
                <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-blue-400"></div>

                {/* Line graph */}
                <div className="absolute bottom-4 left-0 right-0 h-3/4 w-full">
                  <svg
                    viewBox="0 0 1200 400"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M50,350 Q150,320 250,290 T450,250 T650,200 T850,150 T1050,90 T1150,20"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="4"
                    />
                  </svg>
                </div>

                {/* 2006 - Founded the company */}
                <div className="absolute bottom-4 left-[5%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2006
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-8rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        FOUND THE COMPANY
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2014 - Incorporate the company */}
                <div className="absolute bottom-4 left-[15%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2014
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-10rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        INCORPORATE THE COMPANY
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2014 - Initiate relations with Chinese partners */}
                <div className="absolute bottom-4 left-[25%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2014
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-16rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        INITIATE THE STRATEGIC RELATION
                      </p>
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        WITH CHINESE BUSINESS PARTNERS
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2014 - Launch OMS */}
                <div className="absolute bottom-4 left-[37%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2014
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-12rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        LAUNCH OMS BRAND
                      </p>
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        TO THE SRILANKA MARKET
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2015 */}
                <div className="absolute bottom-4 left-[50%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2015
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                  </div>
                </div>

                {/* 2016 - Start dealer network operation */}
                <div className="absolute bottom-4 left-[60%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2016
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-14rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        START DEALER NETWORK OPERATION
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2019 - Launch the Onesam brand */}
                <div className="absolute bottom-4 left-[72%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2019
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-12rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        LAUNCH THE ONESAM BRAND
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2020 - Manufacturing plant started */}
                <div className="absolute bottom-4 left-[82%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2020
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-12rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        MANUFACTURING PLANT STARTED
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2022 - Explore Indonesian market */}
                <div className="absolute bottom-4 left-[92%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2022
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-14rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        EXPLORE INDONESIAN MARKET
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2022 - Explore UAE market */}
                <div className="absolute bottom-4 left-[97%] transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-blue-700 font-bold text-3xl">
                      2022
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-8 origin-bottom-left rotate-90 transform translate-y-[-10rem]">
                      <p className="text-blue-600 text-sm whitespace-nowrap font-medium">
                        EXPLORE UAE MARKET
                      </p>
                    </div>
                  </div>
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
