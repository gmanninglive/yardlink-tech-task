import Head from "next/head";
import Link from "next/link";
import CreditApplicationForm from "../../components/form/CreditApplication";
import { useState } from "react";
import CreditConfirmation from "../../components/form/CreditConfirmation";

export default function CreditIndex() {
  const [values, setValues] = useState();
  const [isConfirm, setIsConfirm] = useState(false);

  // Takes form data and sets state
  function handleSubmit(values) {
    setValues(values);
    setIsConfirm(true);
  }

  // API POST request sending multi-part form data
  async function handleConfirm() {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    const res = await fetch("/api/creditapplication", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
    body: formData})
    const json = await res.json()

    console.log(json)
  }

  // Show Credit application form
  if (!isConfirm) {
    return (
      <div className="w-screen">
        <Head>
          <title>Tool Hire | Online Tool Hire &amp; Rental | YardLink</title>
          <meta
            name="description"
            content="Hire tool &amp; plant equipment on YardLink. With our online booking process and upfront pricing, plant hire couldn't be easier. Next day delivery available."
          />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
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
  // Show confirmation page
  return (
    <div className="w-screen">
      <div className="w-full p-4 bg-darkblue text-white">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <CreditConfirmation
          values={values}
          setIsConfirm={setIsConfirm}
          handleConfirm={handleConfirm}
        />
      </div>
    </div>
  );
}
