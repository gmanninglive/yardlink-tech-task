import BulletBanner from "../banners/BulletBanner";

// TODO Maybe make search bar into component

export default function Hero() {
  return (
    <>
      <div className="h-screen md:p-20 ">
        {/* Background Image and Colour Overlay */}
        <div className="absolute -top-20 left-0 bg-gradient-to-br from-yardblue to-yardblue bg-blend-overlay  w-full h-screen z-[-10]"></div>
        <div className="absolute -top-20 left-0 w-full h-screen bg-hero bg-cover mix-blend-overlay z-[-10]"></div>
        {/* Hero Content */}
        <div className="w-full h-full flex justify-between items-start flex-wrap pt-20">
          {/* Left Section */}
          <section className="w-1/2 flex flex-col justify-start items-start gap-y-16">
            <span>
              <h1 className="text-[calc(28px + 28 * ((100vw - 481px) / 512))] text-[48px] font-bold text-white">
                Driving Construction Forward
              </h1>
              <h2 className="md:text-3xl font-bold text-white">
                Taking the hassle out of hiring
              </h2>
            </span>
            {/* Search Bar */}
            <span className="w-full">
              <form className="flex">
                <input
                  type="text"
                  placeholder="What equipment do you need?"
                  className="w-8/12 p-8 rounded-tl-sm rounded-bl-sm"
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
          <section className="w-1/2 flex flex-col justify-start items-center gap-y-16">
            <BulletBanner />
          </section>
        </div>
      </div>
    </>
  );
}
