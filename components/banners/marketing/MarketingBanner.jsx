import marketingpoints from './marketingpoints.json';

export default function MarketingBanner () {
    
    const { title , bullets } = marketingpoints;
    return (
        <>
        <div className="p-6 xl:p-20 bg-[#F8F8F5] text-center ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <ul className="py-6 flex justify-evenly flex-wrap gap-y-4">
                {bullets.map((bullet, idx) => {
                    return (
                        <li className="lg:w-1/4 text-black text-md lg:text-xl font-normal" key={idx}>{bullet}</li>
                    )
                })}
            </ul>
       </div>     
    </>
    )
}