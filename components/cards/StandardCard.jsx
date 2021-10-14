import Image from "next/image";
import PropTypes from 'prop-types';

StandardCard.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        price: PropTypes.string //Not required.
    })
}

// TODO Add link with animation

export default function StandardCard({ data }) {
  const { image_url, url, title, price } = data;

  return (
    <>
      <div className="w-2/12 flex flex-col flex-grow items-center ">
       <a href={url}>
        <div className="flex justify-start gap-x-4">
          {image_url && <Image src={image_url} width={100} height={100} alt={title} />}

          {/* If No price variable price is removed */}
          {!!price && <p className="text-sm leading-tight">{price}</p>}
        </div>
        <p className="p-4 font-bold">{title}</p>
        </a>
      </div>
    </>
  );
}
