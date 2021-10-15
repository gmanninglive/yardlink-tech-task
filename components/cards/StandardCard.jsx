import Image from "next/image";
import PropTypes from 'prop-types';
import useHover from '../../hooks/useHover'
import {useRef} from 'react';

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
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <div className=" flex flex-col flex-grow items-center ">
       <a href={url} ref={hoverRef} className="relative min-w-[250px]">
        <div className="flex justify-center gap-x-4">
          {image_url && <Image src={image_url} width={100} height={100} alt={title} />}

          {/* If No price variable price is removed */}
          {!!price && <p className="text-sm leading-tight">{price}</p>}
        </div>
        <p className="p-4 font-bold">{title}</p>
        <p className={`text-white text-center ${isHovered ? "absolute opacity-1 -translate-y-2 transition ease-in-out w-full bg-orange p-2" : "absolute opacity-0 translate-y-10"}`}>More information</p>
        </a>
      </div>
    </>
  );
}
