import marketingpoints from './marketingpoints.json';

export default function MarketingBanner () {
    
    const { title , bullets } = marketingpoints;
    return (
        <>
        <div className="py-20 px-20 flex flex-col items-center gap-y-12 bg-[#F8F8F5]">
            <h1 className="text-2xl font-bold">{title}</h1>
            <ul className="flex justify-evenly flex-wrap">
                {bullets.map((bullet) => {
                    return (
                        <li className="w-1/4 text-center text-xl">{bullet}</li>
                    )
                })}
            </ul>
       </div>     
    </>
    )
}