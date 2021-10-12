import Image from "next/image";
import PropTypes from 'prop-types';

StandardCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.string //Not required.
    })
}

// TODO Add link with animation

export default function StandardCard({ data }) {
  const { thumbnail, name, price } = data;

  return (
    <>
      <div className="w-2/12 flex flex-col flex-grow items-center bg-[#F8F8F5]">
        <div className="flex justify-start gap-x-4">
          <Image src={thumbnail} width={100} height={100} alt={name} />

          {/* If No price variable price is removed */}
          {!!price && <p className="text-sm leading-tight">{price}</p>}
        </div>
        <p className="p-4 font-bold">{name}</p>
      </div>
    </>
  );
}
