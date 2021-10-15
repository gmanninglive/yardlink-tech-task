import Link from "next/link";
import CreditApplicationForm from "../../components/form/CreditApplication";
import { useState } from "react";

export default function CreditIndex() {
  const [values, setValues] = useState();
  const [isConfirm, setIsConfirm] = useState(false);

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
          <CreditApplicationForm handleSubmit={handleSubmit} values={values} />
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
      <div>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
        <div className="w-full flex justify-around"><button onClick={() => setIsConfirm(false)} className=" my-6 px-20 py-2 rounded-md bg-orange text-white text-center ">Back</button>
        <button onClick={handleConfirm} className=" my-6 px-20 py-2 rounded-md bg-orange text-white text-center ">Confirm</button>
        </div>
    </div>
  );
}
