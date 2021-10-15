import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DropdownSelection from "./custominput/DropdownSelection";
import DropdownSingle from "./custominput/DropdownSingle";

export default function CreditApplicationForm({ handleSubmit, values }) {
  // Takes touched input fields and errors. Returns style for valid/invalid fields
  function handleValidation(touched, errors) {
    if (!!touched && !!errors) return "bg-lightred border-darkred";
    else if (!!touched && !errors) return "bg-lightgreen border-darkgreen";
  }

  return (
    <Formik
      initialValues={values ? values : initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, isSubmitting) => {
        handleSubmit(values);
        console.log(isSubmitting);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="form-wrapper p-2 lg:p-0 flex flex-col justify-center items-center">
          {/* Account Details */}
          <div className="w-full lg:w-10/12 mt-12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6">
            <h2 className="form-heading text-[#292825] md:col-span-2">
              Account Details
            </h2>
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
              <DropdownSingle
                className={`form-field ${handleValidation(
                  touched.company_type,
                  errors.company_type
                )}`}
                fieldName="company_type"
                title="Company type"
                data={["Sole Trader", "Partnership", "LLC / LTD", "PLC"]}
              />
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
          <div className="mt-12 w-full lg:w-10/12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6 ">
            <h2 className="text-[#292825] md:col-span-2">
              Credit Information
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
              <DropdownSingle
                className={`form-field ${handleValidation(
                  touched.projects_no,
                  errors.projects_no
                )}`}
                fieldName="projects_no"
                title="Number of live projects at any given time"
                data={["0 - 3", "3 - 10", "10+"]}
              />
              <DropdownSingle
                className={`form-field ${handleValidation(
                  touched.projects_size,
                  errors.projects_size
                )}`}
                fieldName="projects_size"
                title="Average size of projects"
                data={[
                  "£0-5000",
                  "£5000 - £25000",
                  "£25000 - £100000",
                  "£100000 - £1M",
                  "£1M+",
                ]}
              />
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
              <DropdownSingle
                className={`form-field ${handleValidation(
                  touched.employees,
                  errors.employees
                )}`}
                fieldName="employees"
                title="Number of employees"
                data={["0 - 3", "3 - 10", "10 - 100", "100+"]}
              />
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
              <DropdownSingle
                className={`form-field ${handleValidation(
                  touched.orders_placed,
                  errors.orders_placed
                )}`}
                fieldName="orders_placed"
                title="Where are orders normally placed"
                data={["Local branch", "Online", "By Phone", "Text message"]}
              />
              <DropdownSingle
                className={`form-field ${handleValidation(
                  touched.po_required,
                  errors.po_required
                )}`}
                fieldName="po_required"
                title="Do all orders require a formal purchase order"
                data={["Yes", "No"]}
              />
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
  projects_size: Yup.string().required("Required"),
  employees: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  equipment_types: Yup.array().of(Yup.string()).min(1, "Required"),
  orders_placed: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
  po_required: Yup.string().oneOf(["Yes", "No"]).required("Required"),
  credit_required: Yup.string()
    .max(15, "Must be 10 characters or less")
    .required("Required"),
});
