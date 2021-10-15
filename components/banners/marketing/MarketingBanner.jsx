import marketingpoints from './marketingpoints.json';

export default function MarketingBanner () {
    
    const { title , bullets } = marketingpoints;
    return (
        <>
        <div className="p-4 xl:p-20 flex flex-col items-center gap-y-12 bg-[#F8F8F5] text-center md:text-left">
            <h1 className="text-2xl font-bold">{title}</h1>
            <ul className="flex justify-evenly flex-wrap">
                {bullets.map((bullet, idx) => {
                    return (
                        <li className="lg:w-1/4 text-center text-black text-xl font-normal" key={idx}>{bullet}</li>
                    )
                })}
            </ul>
       </div>     
    </>
    )
}