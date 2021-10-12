import Image from "next/image";
import StandardCard from "../cards/StandardCard";

import featuredProducts from "./featuredproducts.json";

export default function Featured() {
  return (
    <>
      <div className="p-12 ">
        {/* Title */}
        <h3 className="py-12 text-2xl font-bold">Featured Products</h3>
        {/* Products */}
        <div className="flex flex-wrap  gap-x-6">
          {featuredProducts.map((product, idx) => {
            return (
                <StandardCard data={product} key={idx} />
            );
          })}
        </div>
      </div>
    </>
  );
}
