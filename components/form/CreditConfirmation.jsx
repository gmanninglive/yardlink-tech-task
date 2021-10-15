export default function CreditConfirmation({values, setIsConfirm, handleConfirm}){
    return ( 
        <>
        <div className="w-full lg:w-10/12 mt-12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6">
          {/* Account Details */}
          <h2 className="form-heading text-[#292825] md:col-span-2">
            Account Details
          </h2>
          <span className="w-full md:mt-14">
            <h3>Nature of business</h3>
            <span className="flex gap-x-2">
              {values.business_nature.map((nature) => (
                <p>{nature},</p>
              ))}
            </span>
          </span>
          <span className="w-full flex flex-col gap-y-2">
            <h3>Role on Projects</h3>
            <span className="flex gap-x-2">
              {values.business_role.map((role) => (
                <p>{role},</p>
              ))}
            </span>
            <h3>Company type</h3>
            {values.company_type}
          </span>
        </div>
        {/* Contact Information */}
        <div className="w-full lg:w-10/12 mt-12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6">
          <h2 className="text-[#292825] md:col-span-2">Contact Information</h2>
          <span className="w-full flex flex-col gap-y-2">
            <h3>Contact name for buyer</h3>
            {values.buyer_name}
            <h3>Job title of buyer</h3>
            {values.buyer_title}
            <h3>Email address of buyer</h3>
            {values.buyer_email}
            <h3>Telephone number fof buyer</h3>
            {values.buyer_tel}
          </span>
          {/* Contact collumn 2 */}
          <span className="w-full flex flex-col gap-y-2">
            <h3>Contact name for accounts</h3>
            {values.accounts_name}
            <h3>Email address for accounts</h3>
            {values.accounts_email}
            <h3>Telephone number for accounts</h3>
            {values.accounts_tel}
          </span>
        </div>

        {/* Credit Information */}
        <div className="mt-12 lg:w-10/12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6 ">
          <h2 className="text-[#292825] md:col-span-2">Credit Information</h2>
          <span className="w-full flex flex-col gap-y-2">
            <h3>Annual turnover</h3>
            {values.turnover}
            <h3>Estimated monthly spend on equipment hire</h3>
            {values.monthly_spend}
            <h3>Number of live projects at any given time</h3>
            {values.projects_no}
            <h3>Average size of projects</h3>
            {values.projects_size}
            <h3>Credit amount required</h3>
            {values.credit_required}
          </span>
          {/* Credit Second Collumn */}
          <span className="w-full flex flex-col gap-y-2">
            <h3>Number of employees</h3>
            {values.employees}
            <h3>What types of equipment do you hire?</h3>
            {values.equipment_types}
            <h3>Where are orders mainly placed</h3>
            {values.orders_placed}
            <h3>Do all orders require a formal purchase order?</h3>
            {values.po_required}
          </span>
        </div>
      <div className="w-full flex justify-center gap-x-2">
        <button
          onClick={() => setIsConfirm(false)}
          className=" my-6 px-20 py-2 rounded-md bg-orange text-white text-center "
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className=" my-6 px-20 py-2 rounded-md bg-orange text-white text-center "
        >
          Confirm
        </button>
      </div>
      </>
    )
}