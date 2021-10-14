import Link from 'next/link'
import CreditApplicationForm from '../../components/form/CreditApplication';

export default function CreditIndex() {
    return (
        <div className="w-screen">
          <div className="w-full p-4 bg-darkblue text-white"><Link href="/" ><a >Home</a></Link></div>
          <div>
              <CreditApplicationForm />
          </div>
        </div>
      );
    }
