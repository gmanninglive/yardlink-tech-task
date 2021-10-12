import Image from "next/image";

import featuredProducts from "./featuredproducts.json";

export default function Featured() {
  return (
    <>
      <div className="py-12">
        {/* Title */}
        <h3 className="py-12 text-2xl font-bold">Featured Products</h3>
        {/* Products */}
        <ul className="flex flex-wrap  gap-x-6">
          {featuredProducts.map((product) => {
            const { id, name, price, thumbnail } = product;
            return (
              <ul className="w-2/12 flex flex-col flex-grow items-center bg-[#F8F8F5]">
                <div className="flex justify-start gap-x-4">
                  <Image src={thumbnail} width={100} height={100} alt={name} />
                  <p className="text-sm leading-tight">{price}</p>
                </div>
                <p className="p-4 font-bold">{name}</p>
              </ul>
            );
          })}
        </ul>
      </div>
    </>
  );
}
