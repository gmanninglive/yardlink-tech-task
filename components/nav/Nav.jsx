import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="w-full h-16 fixed top-0 flex lg:px-4 flex justify-between bg-white border-b border-yardblue z-[100] ">
        <span className=" w-1/3 flex items-center gap-x-40 xl:gap-x-24">
        {/* Logo */}
        <Link href="/"><a>
        <Image
          src="/branding/yardlink-logo.svg"
          alt="YardLink Logo"
          width="180em" height="40" 
        />
        </a>
        </Link>

        {/* Categories */}
        <button className="hidden lg:block ">
          <Image
            src="/branding/icon-menu.svg"
            alt="Categories Menu"
            width="20"
            height="20"
          />
          <p className="text-yardblue hover:text-orange text-xs -mt-1 ">Categories</p>
        </button>
    </span>
    <span className="w-[70px] lg:w-2/3 flex justify-end items-center gap-x-18">
        {/* Phone */}
          <a href="tel:02036425223" className="w-full lg:w-1/4 h-full text-white lg:text-yardblue flex justify-center items-center gap-x-1 bg-[#425075] lg:bg-transparent"> 
          <svg xmlns='http://www.w3.org/2000/svg' className="fill-current" width="20" height="20" version='1' viewBox='0 0 560 560'><path d='M236 315c43 58 95 114 121 94 38-28 62-54 127 15s3 100-33 127c-42 32-175-22-293-178C41 218 26 75 68 44c37-28 83-79 132 3 48 81 16 97-21 126-27 19 13 85 57 142z'/></svg>
            
          
      
          <p className="hidden lg:block text-black hover:text-orange font-bold underline">
            020&nbsp;3642&nbsp;5223
          </p>
          </a>

        {/* Basket */}
        <div className="hidden lg:flex flex-col items-center items-center gap-x-1 mr-28 xl:mr-12">
          <Image src="/branding/icon-basket.svg" alt="Basket" width="20" height="20" />
          <p className="cursor-pointer text-yardblue hover:text-orange  text-xs font-bold ">My Booking</p>
        </div>

        {/* Create Account */}
        <div className="hidden lg:block relative w-[200px]">
          <div className="createaccount">
          <Link href="/creditapplication">
            <a className="absolute -top-6 left-16 text-white text-sm  underline z-10">
              Create Account
            </a>
          </Link>

          </div>
        </div>
        </span>
      </div>
    </>
  );
}
