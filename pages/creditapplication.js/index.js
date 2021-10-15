import Link from "next/link";
import CreditApplicationForm from "../../components/form/CreditApplication";
import { useState, useEffect } from "react";
import CreditConfirmation from "../../components/form/CreditConfirmation";

export default function CreditIndex() {
  const [values, setValues] = useState();
  const [isConfirm, setIsConfirm] = useState(false);
 //For testing!
  const valuesTest =  {
       business_nature: ["Construction", "Groundworks", "Events"],
       business_role: ["Project Management", "Architect", "Surveyor"],
       company_type: "Partnership",
       buyer_name: "George Manning",
       buyer_title: "jdfgjdfgj",
       buyer_email: "gmanning@live.co.uk",
       buyer_tel: "07886028590",
       accounts_name: "George Manning",
       accounts_email: "gmanning@live.co.uk",
       accounts_tel: "07886028590",
       turnover: "66364.00",
       monthly_spend: "3000",
       projects_no: "3 - 10",
       projects_size: "£25000 - £100000",
       employees: "3 - 10",
       equipment_types: ["Tools", "Powered Access", "Security"],
       orders_placed: "Local branch",
       po_required: "Yes",
       credit_required: "6000",
     }
    

  function handleSubmit(values) {
    console.log(values);
    setValues(values);
    
    
    setIsConfirm(true);
  }

  function handleConfirm() {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
  }
  if (!isConfirm) {
    return (
      <div className="w-screen">
        <div className="w-full p-4 bg-darkblue text-white">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <CreditApplicationForm handleSubmit={handleSubmit} values={valuesTest} />
        </div>
      </div>
    );
  }
  return (
    <div className="w-screen">
      <div className="w-full p-4 bg-darkblue text-white">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <CreditConfirmation values={values} setIsConfirm={setIsConfirm} handleConfirm={handleConfirm} />
        </div>
    </div>
  );
}
