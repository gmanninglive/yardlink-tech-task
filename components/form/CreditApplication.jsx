import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DropdownSelection from "./custominput/DropdownSelection";

export default function CreditApplicationForm({handleSubmit, values}) {
  // Takes touched input fields and errors. Returns style for valid/invalid fields
  function handleValidation(touched, errors) {
    if (!!touched && !!errors) return "bg-lightred border-darkred";
    else if (!!touched && !errors) return "bg-lightgreen border-darkgreen";
    
  }

  return (
    <Formik
      initialValues={values? values : initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, isSubmitting) => {
          handleSubmit(values);
          console.log(isSubmitting)

      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="form-wrapper p-2 lg:p-0 flex flex-col justify-center items-center">
          {/* Account Details */}
          <div className="w-full lg:w-10/12 mt-12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6">
            <h2 className="form-heading text-[#292825] md:col-span-2">Account Details</h2>
            <span className="w-full md:mt-14">
              <DropdownSelection
                className={`form-field ${handleValidation(
                  touched.business_nature,
                  errors.business_nature
                )}`}
                fieldName="business_nature"
                title="Nature of business (select all that apply)"
                errors={errors.business_nature}
                touched={touched.business_nature}
                data={["Construction", "Groundworks", "Events", "Developer"]}
              />
            </span>
            <span className="w-full flex flex-col gap-y-2">
              <DropdownSelection
                className={`form-field ${handleValidation(
                  touched.business_role,
                  errors.business_role
                )}`}
                fieldName="business_role"
                title="Role on Projects (select all that apply)"
                data={[
                  "Trades",
                  "Project Management",
                  "Architect",
                  "Surveyor",
                  "Waste Clearance",
                ]}
              />
              <Field
                name="company_type"
                as="select"
                className={`form-field ${handleValidation(
                  touched.company_type,
                  errors.company_type
                )}`}
              >
                <option value="">Company type</option>
                <option value="Sole Trader">Sole Trader</option>
                <option value="Partnership">Partnership</option>
                <option value="LTD">LLC / LTD</option>
                <option value="PLC">PLC</option>
              </Field>
            </span>
          </div>
          {/* Contact Information */}
          <div className="w-full lg:w-10/12 mt-12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6">
            <h2 className="text-[#292825] md:col-span-2">
              Contact Information
            </h2>
            <span className="w-full flex flex-col gap-y-2">
              <Field
                name="buyer_name"
                placeholder="Contact name for buyer"
                className={`form-field ${handleValidation(
                  touched.buyer_name,
                  errors.buyer_name
                )}`}
              ></Field>
              <Field
                name="buyer_title"
                placeholder="Job title of buyer"
                className={`form-field ${handleValidation(
                  touched.buyer_title,
                  errors.buyer_title
                )}`}
              ></Field>
              <Field
                name="buyer_email"
                type="email"
                placeholder="Email address of buyer"
                className={`form-field ${handleValidation(
                  touched.buyer_email,
                  errors.buyer_email
                )}`}
              ></Field>
              <Field
                name="buyer_tel"
                placeholder="Telephone number of buyer"
                className={`form-field ${handleValidation(
                  touched.buyer_tel,
                  errors.buyer_tel
                )}`}
              ></Field>
            </span>
            {/* Contact collumn 2 */}
            <span className="w-full flex flex-col gap-y-2">
              <Field
                name="accounts_name"
                placeholder="Contact name for accounts (if different to buyer)"
                className={`form-field ${handleValidation(
                  touched.accounts_name,
                  errors.accounts_name
                )}`}
              ></Field>
              <Field
                name="accounts_email"
                placeholder="Email address of accounts"
                className={`form-field ${handleValidation(
                  touched.accounts_email,
                  errors.accounts_email
                )}`}
              ></Field>
              <Field
                name="accounts_tel"
                placeholder="Telephone number of accounts"
                className={`form-field ${handleValidation(
                  touched.accounts_tel,
                  errors.accounts_tel
                )}`}
              ></Field>
            </span>
          </div>

          {/* Credit Information */}
          <div className="mt-12 lg:w-10/12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6 ">
            <h2 className="text-[#292825] md:col-span-2">
              Contact Information
            </h2>
            <span className="w-full flex flex-col gap-y-2">
              <Field
                name="turnover"
                placeholder="Annual turnover (£)"
                className={`form-field ${handleValidation(
                  touched.turnover,
                  errors.turnover
                )}`}
              ></Field>
              <Field
                name="monthly_spend"
                placeholder="Estimated monthly spend on equipment hire(£)"
                className={`form-field ${handleValidation(
                  touched.monthly_spend,
                  errors.monthly_spend
                )}`}
              ></Field>
              <Field
                name="projects_no"
                className={`form-field ${handleValidation(
                  touched.projects_no,
                  errors.projects_no
                )}`}
                as="select"
              >
                <option value="">
                  Number of live projects at any given time
                </option>
                <option value="0-3">0 - 3</option>
                <option value="3-10">3 - 10</option>
                <option value="10+">10+</option>
              </Field>
              <Field
                name="projects_size"
                className={`form-field ${handleValidation(
                  touched.projects_size,
                  errors.projects_size
                )}`}
                as="select"
              >
                <option value="">Average size of projects</option>
                <option value="£0-5000">£0 - £5000</option>
                <option value="£5000 - £25000">£5000 - £25,000</option>
                <option value="£25000 - £100000">£25000 - £100,000</option>
                <option value="£100000 - £500000">£100,000 - £500,000</option>
                <option value="£500000+">£500,000+</option>
              </Field>
              <Field
                name="credit_required"
                className={`form-field ${handleValidation(
                  touched.credit_required,
                  errors.credit_required
                )}`}
                placeholder="Credit required (please enter an amount)"
              ></Field>
            </span>
            {/* Credit Second Collumn */}
            <div className="w-full flex flex-col gap-y-2 items">
              <Field
                name="employees"
                className={`form-field ${handleValidation(
                  touched.employees,
                  errors.employees
                )}`}
                as="select"
              >
                <option value="">Number of employees</option>
                <option value="0-3">0 - 3</option>
                <option value="3-10">3 - 10</option>
                <option value="10-50">10 - 50</option>
                <option value="50+">50+</option>
              </Field>

              <DropdownSelection
                className={`form-field ${handleValidation(
                  touched.equipment_types,
                  errors.equipment_types
                )}`}
                fieldName="equipment_types"
                title="What types of equipment do you hire? (select as many that apply)"
                data={[
                  "Plant",
                  "Tools",
                  "Powered Access",
                  "Welfare",
                  "Security",
                ]}
              />

              <Field
                name="orders_placed"
                className={`form-field ${handleValidation(
                  touched.orders_placed,
                  errors.orders_placed
                )}`}
                as="select"
              >
                <option value="">Where are orders normally placed</option>
                <option value="local">Local branch</option>
                <option value="online">Online</option>
                <option value="call">By Phone</option>
                <option value="sms">Text message</option>
              </Field>
              <Field
                name="po_required"
                className={`form-field ${handleValidation(
                  touched.po_required,
                  errors.po_required
                )}`}
                as="select"
              >
                <option value="">
                  Do all orders require a formal purchase order
                </option>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </Field>
            </div>
          </div>

          <button
            type="submit"
            
            className=" my-6 px-20 py-2 rounded-md bg-orange text-white text-center "
          >
            Continue
          </button>
        </Form>
      )}
    </Formik>
  );
}

export const initialValues = {
  business_nature: "",
  business_role: "",
  company_type: "",
  buyer_name: "",
  buyer_title: "",
  buyer_email: "",
  buyer_tel: "",
  accounts_name: "",
  accounts_email: "",
  accounts_tel: "",
  turnover: "",
  monthly_spend: "",
  projects_no: "",
  projects_size: "",
  employees: "",
  equipment_types: "",
  orders_placed: "",
  po_required: "",
  credit_required: "",
};

export const validationSchema = Yup.object({
  business_nature: Yup.array().of(Yup.string()).min(1, "Required"),
  business_role: Yup.array().of(Yup.string()).min(1, "Required"),
  company_type: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  buyer_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  buyer_title: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  buyer_email: Yup.string().email("Invalid email address").required("Required"),
  buyer_tel: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  accounts_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  accounts_email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  accounts_tel: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  turnover: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  monthly_spend: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  projects_no: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  projects_size: Yup.string()
    .required("Required"),
  employees: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  equipment_types: Yup.array().of(Yup.string()).min(1, "Required"),
  orders_placed: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  po_required: Yup.boolean().required("Required"),
  credit_required: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
});
