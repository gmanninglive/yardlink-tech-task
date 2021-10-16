import BulletBanner from "../banners/marketing/BulletBanner";

export default function Hero() {
  return (
    <>
      <div className="w-full py-16 px-4 ">
        {/* Background Image and Colour Overlay */}
        <div className="absolute top-16 bottom-0 left-0 bg-gradient-to-br from-yardblue to-yardblue bg-blend-overlay  w-full h-[50em] z-[-10]"></div>
          <div className="absolute top-16  bottom-0  left-0 w-full h-[50em] bg-hero bg-center bg-cover mix-blend-soft-light z-[-10]"></div>
        
        {/* Hero Content */}
        <div
          className="w-full  h-full flex flex-1 justify-center
         items-start flex-wrap text-center lg:text-left pt-12 lg:pt-16 gap-y-8"
        >
          {/* Left Section */}
          <section className="w-full xl:w-1/2 grid gap-y-6 md:gap-y-12">
            <span className="text-center xl:text-left">
              <h1 className="text-[1.45em] md:text-[2.5em] leading-loose xl:leading-normal font-bold text-white">
                Driving Construction Forward
              </h1>
              <h2 className="md:text-2xl lg:text-3xl font-bold text-white">
                Taking the hassle out of hiring
              </h2>
            </span>
            {/* Search Bar */}
            <span className="w-full lg:w-10/12 mx-auto xl:mx-0">
              <form className="flex">
                <input
                  type="text"
                  placeholder="What equipment do you need?"
                  className="w-8/12 p-4 lg:p-5 rounded-tl-sm rounded-bl-sm text-sm md:text-md"
                />
                <button
                  type="submit"
                  className="w-1/3 bg-orange leading-none text-white rounded-tr-sm rounded-br-sm"
                >
                  Find Equipment
                </button>
              </form>
              <p className="w-full text-left underline text-white text-small mt-2">Need help?</p>
            </span>
          </section>
          {/* Right Section */}
          <section className="w-full xl:w-max bg-white p-4 lg:p-8 text-left rounded-sm">
            <BulletBanner />
          </section>
        </div>
      </div>
    </>
  );
}
