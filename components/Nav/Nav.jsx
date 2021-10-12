import Image from "next/image";
import Link from "next/Link";

// TODO Fix up placement, fix up create account skewed box

export default function Nav() {
  return (
    <>
      <div className="w-full fixed top-0 flex py-1 px-5 gap-x-4 flex justify-between items-center bg-white z-[100]">
        {/* Logo */}
        <Image
          src="/branding/yardlink-logo.svg"
          alt="YardLink Logo"
          width="210px"
          height="75px"
        />

        {/* Categories */}
        <button className="">
          <Image
            src="/branding/icon-menu.svg"
            alt="Categories Menu"
            width="25"
            height="25"
          />
          <p className="text-yardblue hover:text-orange text-sm ">Categories</p>
        </button>

        {/* Phone */}
        <div className="hidden md:flex items-center gap-x-1">
          <Image
            src="/branding/icon-phone.svg"
            alt="Categories Menu"
            width="25"
            height="25"
          />
          <p className="text-yardblue text-xl font-bold underline">
            020&nbsp;3642&nbsp;5223
          </p>
        </div>
        {/* Basket */}
        <div className="hidden md:flex flex-col items-center items-center gap-x-1">
          <Image src="/branding/icon-basket.svg" alt="Basket" width="25" height="25" />
          <p className="text-yardblue text-sm font-bold ">My Booking</p>
        </div>

        {/* Create Account */}
        <div className="relative">
          <div className="bg-orange w-[200px] h-[50px] absolute -top-10 -left-10 translate-[12%] skew-x-45 border-bl-sm z-0 bg-clip-border"></div>
          <Link href="#" className="">
            <a className="text-black text-sm font-bold underline z-10">
              Create Account
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
