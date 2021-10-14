import Image from "next/image";
import Link from "next/link";

// TODO Fix up placement, fix up create account skewed box

export default function Nav() {
  return (
    <>
      <div className="w-full fixed top-0 flex px-5 flex justify-between bg-white border-b-2 border-yardblue z-[100] ">
        <span className="w-1/3 flex gap-x-20">
        {/* Logo */}
        <Link href="/"><a>
        <Image
          src="/branding/yardlink-logo.svg"
          alt="YardLink Logo"
          width="210px"
          height="75px"
        />
        </a>
        </Link>

        {/* Categories */}
        <button className="hidden md:block ">
          <Image
            src="/branding/icon-menu.svg"
            alt="Categories Menu"
            width="25"
            height="25"
          />
          <p className="text-yardblue hover:text-orange text-sm ">Categories</p>
        </button>
    </span>
    <span className="w-2/3 flex justify-end items-center gap-x-20">
        {/* Phone */}
          <a href="tel:02036425223" className="flex items-center gap-x-1"> 
          <Image
            src="/branding/icon-phone.svg"
            alt="Categories Menu"
            width="25"
            height="25"
          />
          <p className="hidden md:block text-yardblue text-xl font-bold underline">
            020&nbsp;3642&nbsp;5223
          </p>
          </a>

        {/* Basket */}
        <div className="hidden md:flex flex-col items-center items-center gap-x-1">
          <Image src="/branding/icon-basket.svg" alt="Basket" width="25" height="25" />
          <p className="text-yardblue text-sm font-bold ">My Booking</p>
        </div>

        {/* Create Account */}
        <div className="hidden md:block relative w-[200px]">
          <div className=" bg-orange w-[250px] h-[50px] absolute -top-12 left-4  skew-x-45 border-bl-sm z-0 bg-clip-border">

          </div>
          <Link href="/creditapplication" className="">
            <a className="absolute -top-8 right-5 text-white  underline z-10">
              Create Account
            </a>
          </Link>
        </div>
        </span>
      </div>
    </>
  );
}
