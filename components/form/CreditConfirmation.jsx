
/**
 * @param {object}values @param {function}setIsConfirm @param {function}handleConfirm 
 * 
 * Confirmation page before accessing next stage
 */

export default function CreditConfirmation({
  values,
  setIsConfirm,
  handleConfirm,
}) {
  return (
    <>
      <div className="w-full lg:w-10/12 lg:mt-2 grid gap-x-2 lg:gap-x-12 gap-y-4 p-4">
      <h1 className="text-2xl">Please check and confirm</h1>
        {/* Account Details */}

        <div className="grid gap-y-2 ">
          <h2 className="form-heading text-[#292825] text-xl">
            Account Details
          </h2>
          <span className="font-normal">
            <h3>Nature of business</h3>

            {values.business_nature.map((nature, idx) => (
              <p key={idx}>{nature},</p>
            ))}

            <h3>Role on Projects</h3>
            <span className="flex gap-x-2">
              {values.business_role.map((role, idx) => (
                <p key={idx}>{role},</p>
              ))}
            </span>
            <h3>Company type</h3>
            {values.company_type}
          </span>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[#292825] text-xl">Contact Information</h2>
          <div className="grid md:grid-cols-2 font-normal">
            <span>
              <h3>Contact name for buyer</h3>
              {values.buyer_name}
              <h3>Job title of buyer</h3>
              {values.buyer_title}
              <h3>Email address of buyer</h3>
              {values.buyer_email}
              <h3>Telephone number of buyer</h3>
              {values.buyer_tel}
            </span>

            <span>
              <h3>Contact name for accounts</h3>
              {values.accounts_name}
              <h3>Email address for accounts</h3>
              {values.accounts_email}
              <h3>Telephone number for accounts</h3>
              {values.accounts_tel}
            </span>
          </div>
        </div>
        {/* Credit Information */}

        <div className="flex flex-col gap-y-2">
              <h2 className="text-[#292825] text-xl">
                Credit Information
              </h2>
          <div className="grid md:grid-cols-2 font-normal">
            <span>
              <h3>Annual turnover</h3>
              {values.turnover}
              <h3>Estimated monthly spend on equipment hire</h3>
              {values.monthly_spend}
              <h3>Number of live projects at any given time</h3>
              {values.projects_no}
              <h3>Average size of projects</h3>
              {values.projects_size}
              <h3>Credit amount required</h3>
            </span>
            <span>
              {values.credit_required}
              <h3>Number of employees</h3>
              {values.employees}
              <h3>What types of equipment do you hire?</h3>
              {values.equipment_types.map((item, idx) => (
                <p key={idx}>{item},</p>
              ))}
              <h3>Where are orders mainly placed</h3>
              {values.orders_placed}
              <h3>Do all orders require a formal purchase order?</h3>
              {values.po_required}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-x-2">
        <button
          onClick={() => setIsConfirm(false)}
          className=" my-6 w-48 py-2 rounded-md bg-orange text-white text-center "
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className=" my-6 w-48 py-2 rounded-md bg-orange text-white text-center "
        >
          Confirm
        </button>
      </div>
    </>
  );
}
