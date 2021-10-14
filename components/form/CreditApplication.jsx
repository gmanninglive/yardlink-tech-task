import { Formik, Form, Field } from "formik";

export default function CreditApplicationForm(){
    return(
    <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="p-2 lg:p-0 flex flex-col justify-center items-center">

                </Form>
              )}
            </Formik>
    )
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