import { Formik, Form, Field } from "formik";
import Link from 'next/link'

export default function CreditIndex() {
    return (
        <div className="w-screen">
          <div className="w-full p-4 bg-darkblue text-white"><Link href="/" ><a >Home</a></Link></div>
          <div>
            <Formik
              initialValues={""}
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
          </div>
        </div>
      );
    }