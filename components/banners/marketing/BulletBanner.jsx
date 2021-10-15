import Image from "next/image";

import bulletPoints from "./bullets.json";

export default function BulletBanner() {
  const title = bulletPoints.title.split("choose");
  return (
    <>
      <h1 className=" font-bold">
        {title[0]}
        <span className="underline">choose</span>
        {title[1]}
      </h1>
      {/* Bullet Points */}
      <ul className="mt-6 flex flex-col gap-y-2 lg:gap-y-6">
        {bulletPoints.bullets.map((bullet, idx) => {
          return (
            <li
              className="w-full flex  items-center gap-x-2  font-normal"
              key={idx}
            >
              <Image
                src="/branding/icon-tick.svg"
                width="30"
                height="30"
                alt="bullet point tick icon"
              />
              <p className="w-10/12">{bullet}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
