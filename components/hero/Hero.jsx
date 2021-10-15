import BulletBanner from "../banners/BulletBanner";

export default function Hero() {
  return (
    <>
      <div className="w-full pt-20 p-4 md:p-12 lg:p-20 ">
        {/* Background Image and Colour Overlay */}
        <div className="absolute top-0  left-0 bg-gradient-to-br from-yardblue to-yardblue bg-blend-overlay  w-full h-full lg:h-screen z-[-10]"></div>
          <div className="absolute top-0 bottom-0  left-0 w-full h-screen bg-hero bg-center bg-cover mix-blend-soft-light z-[-10]"></div>
        
        {/* Hero Content */}
        <div
          className="w-full  h-full flex flex-1 justify-center
         items-start flex-wrap pt-12 lg:pt-16 gap-y-8"
        >
          {/* Left Section */}
          <section className="w-full xl:w-1/2 flex flex-col justify-start items-center xl:items-start  gap-y-6 md:gap-y-16">
            <span className="text-center xl:text-left">
              <h1 className="text-2xl md:text-[2.75em] leading-loose font-bold text-white">
                Driving Construction Forward
              </h1>
              <h2 className="md:text-2xl lg:text-3xl font-bold text-white">
                Taking the hassle out of hiring
              </h2>
            </span>
            {/* Search Bar */}
            <span className="w-full lg:w-10/12">
              <form className="flex">
                <input
                  type="text"
                  placeholder="What equipment do you need?"
                  className="w-8/12 p-4 lg:p-7 rounded-tl-sm rounded-bl-sm text-sm md:text-md"
                />
                <button
                  type="submit"
                  className="w-1/3 bg-orange text-white rounded-tr-sm rounded-br-sm"
                >
                  Find Equipment
                </button>
              </form>
              <p className="underline text-white text-small mt-2">Need help?</p>
            </span>
          </section>
          {/* Right Section */}
          <section className="w-full xl:w-max bg-white p-4 lg:p-8 rounded-sm flex flex-col justify-start item-center lg:items-start">
            <BulletBanner />
          </section>
        </div>
      </div>
    </>
  );
}
