import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Production() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Production & Distribution | Zigo Technology (Pvt) Ltd.</title>
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
          {/* Background manufacturing image */}
          <div className="absolute inset-0 z-0 h-100">
            <Image
              src="/images/production_background.webp"
              alt="Manufacturing Floor Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 text-start text-white">
            {/* Header text */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              PRODUCTION AND DISTRIBUTION
            </h1>

            {/* Actual content about production */}
            <p className="max-w-4xl text-xs sm:text-sm">
              At Zigo Technology, we take pride in our state-of-the-art
              manufacturing facility established in 2019. Our production
              capabilities enable us to deliver high-quality mobile phone
              accessories with precision engineering and rigorous quality
              control. Through our extensive distribution network, we ensure
              efficient delivery of products across Sri Lanka and to our
              international markets.
            </p>
          </div>
        </div>
        <div className="mt-12 sm:mt-24 md:mt-48 border-t border-blue-400"></div>

        {/* Manufacturing Plant Section */}
        <div className="bg-white py-2">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="py-4">
              <div className="flex flex-col items-start">
                <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center sm:gap-6">
                  <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                    M A N U F A C T U R I N G
                  </h2>
                  <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                    P L A N T
                  </h2>
                </div>

                {/* Manufacturing Plant Image */}
                <div className="w-full relative h-48 sm:h-64 md:h-96 mb-6 sm:mb-8 md:mb-12">
                  <Image
                    src="/images/manufaturing_plant.jpg"
                    alt="Zigo Technology Manufacturing Plant"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="text-gray-600 space-y-4 text-left text-sm sm:text-base">
                  <p>
                    Our cutting-edge manufacturing facility in Sri Lanka
                    represents a significant milestone in our journey toward
                    self-reliance and innovation. Established in 2019, this
                    facility enables us to maintain rigorous quality control
                    standards while reducing our dependency on imports.
                  </p>

                  <p>
                    The plant is equipped with advanced machinery and technology
                    to produce a wide range of mobile phone accessories,
                    including protective cases, screen protectors, chargers,
                    cables, power banks, and audio accessories. Our
                    manufacturing processes adhere to international standards,
                    ensuring that all products meet or exceed industry
                    benchmarks for quality and durability.
                  </p>

                  <p>
                    With a team of skilled engineers and technicians, we
                    continuously improve our production capabilities and develop
                    new products to meet the evolving needs of our customers.
                    The facility also serves as a hub for research and
                    development, allowing us to stay at the forefront of
                    technological advancements in the mobile accessory industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-blue-400"></div>

        {/* Distribution Network Section */}
        <div className="bg-white py-2">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="py-4">
              <div className="flex flex-col items-start">
                <div className="mb-4 sm:mb-8">
                  <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                    DISTRIBUTION NETWORK
                  </h2>
                </div>

                <div className="text-gray-600 space-y-4 text-left text-sm sm:text-base">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisi at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisi at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-blue-400"></div>

        {/* Local Distribution Section */}
        <div className="py-4 sm:py-6 md:py-8 relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-start">
                LOCAL DISTRIBUTION
              </h2>
            </div>

            <div className="relative w-full h-64 sm:h-96 md:h-128">
              <Image
                src="/images/distribution_network.jpg"
                alt="Sri Lanka Distribution Network Map"
                fill
              />
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-blue-400"></div>

        {/* International Distribution Section */}
        <div className="py-4 sm:py-6 md:py-8 relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-start">
                INTERNATIONAL DISTRIBUTION
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Middle East Map */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-96">
                <Image
                  src="/images/international_distribution.png"
                  alt="International Distribution Network Map"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Country information */}
              <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
                {/* UAE Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-medium mb-2 sm:mb-4">
                    UAE
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisi at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                </div>

                {/* Oman Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-medium mb-2 sm:mb-4">
                    Oman
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisi at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy
                  </p>
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