import Image from 'next/image';

import reviews from './reviewdata.json';

export default function Reviews(){

    return ( 
        <>  
        <section className="p-16 w-full bg-[#F8F8F5]">
        <h1 className="text-2xl font-bold">What Our Customers Are Saying...</h1>
            <div className="md:py-16 flex justify-evenly flex-wrap ">
                {reviews.map((review, idx) => {
                    return ( 
                        <div key={idx} className="w-1/4  bg-white p-6">
                        <Image src={review.image} width={100} height={100} alt={review.name} />
                        <p>{review.name}</p>
                        <p>{review.business}</p>
                        <p>{review.text}</p>
                        </div>
                    )
                })}

            </div>
            </section>
        </>
    )


}