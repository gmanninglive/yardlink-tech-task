import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  return (
    <div className="lg:hidden fixed bottom-0 w-full py-2 flex items-center text-center border-t border-yardblue divide-x divide-yardblue z-10 bg-white">
      {/* Create Account */}

      <Link href="/creditapplication">
        <a className="grid text-center w-1/3">
          <Image
            src="/branding/icon-signin.svg"
            alt="Sign up"
            width="20"
            height="20"
          />
          Sign up
        </a>
      </Link>

      {/* Categories */}
      <button className="w-1/3 ">
        <Image
          src="/branding/icon-menu.svg"
          alt="Categories Menu"
          width="20"
          height="20"
        />
        <p className="text-yardblue hover:text-orange text-sm -mt-1 ">
          Categories
        </p>
      </button>

      {/* Basket */}
      <span className="w-1/3">
        <Image
          src="/branding/icon-basket.svg"
          alt="Basket"
          width="20"
          height="20"
        />
        <p className="cursor-pointer text-yardblue hover:text-orange  text-sm font-bold ">
          My Booking
        </p>
      </span>
    </div>
  );
}
