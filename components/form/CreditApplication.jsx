import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DropdownSelection from "./custominput/DropdownSelection";

export default function CreditApplicationForm() {

  // Takes touched input fields and errors. Returns style for valid/invalid fields
  function handleValidation(touched, errors) {
    if (!!touched && !!errors) return "bg-lightred border-darkred";
    else if (!!touched && !errors) return "bg-lightgreen border-darkgreen";
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="p-2 lg:p-0 flex flex-col justify-center items-center">
          {/* Account Details */}
          <div className="w-full lg:w-10/12 mt-12 grid md:grid-cols-2 gap-x-2 lg:gap-x-12 gap-y-2 md:gap-y-6">
            <h2 className="text-[#292825] md:col-span-2">Account Details</h2>
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
});
