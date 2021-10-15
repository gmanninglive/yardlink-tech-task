import Image from "next/image";

import reviews from "./reviewdata.json";

export default function Reviews() {
  return (
    <>
      <section className="p-4 md:p-16 w-full bg-[#F8F8F5]">
        {/* Title */}
        <h1 className="text-2xl font-bold">What Our Customers Are Saying...</h1>

        {/* Reviews */}
        <div className="md:py-16 flex justify-evenly flex-wrap gap-4 ">
          {reviews.map((review, idx) => {
            return (
              <div key={idx} className="w-full md:w-1/2 xl:w-1/4 bg-white p-6 rounded-md shadow-md ">
                {/* Photo, Name, Company Name */}
                <div className="flex flex-wrap gap-x-6 mb-2">
                  <Image
                    src={review.image}
                    width={100}
                    height={100}
                    alt={review.name}
                    className="rounded-full"
                  />
                  <span className="w-1/2 text-center">
                    <p className="font-bold">{review.name}</p>
                    <p>{review.company}</p>
                  </span>
                </div>
                {/* Testimonial Text */}
                <p>{review.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
