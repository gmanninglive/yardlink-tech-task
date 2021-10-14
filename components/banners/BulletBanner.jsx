import Image from "next/image";

import bulletPoints from "./bullets.json";

export default function BulletBanner() {
  return (
    <>
      <div className="w-3/4 bg-white p-8 rounded-sm">
        {/* Title */}
        <h1 className="text-xl font-bold">{bulletPoints.title}</h1>
        {/* Bullet Points */}
        <ul className="mt-6 flex flex-col gap-y-6">
          {bulletPoints.bullets.map((bullet, idx) => {
            return (
              <li className="flex gap-x-2 items-center" key={idx}>
                <span className="p-1 mt-1 px-2 border-2 border-orange rounded-full ">
                  <Image
                    src="/branding/icon-tick.svg"
                    width="15"
                    height="15"
                    alt="bullet point tick icon"
                  />
                </span>{" "}
                {bullet}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
