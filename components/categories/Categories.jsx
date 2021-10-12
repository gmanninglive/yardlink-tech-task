
import StandardCard from '../cards/StandardCard';
import categories from './categories.json';

export default function Categories (){

    return (
    <>
      <div className="p-12 ">
        {/* Title */}
        <h3 className="py-12 text-2xl font-bold">Featured Products</h3>
        {/* Categories */}
        <div className="flex flex-wrap  gap-x-6">
          {categories.map((category, idx) => {
            return (
                <StandardCard data={category} key={idx} />
            );
          })}
        </div>
      </div>
    </>
    )
}