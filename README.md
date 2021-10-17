## YardLink Tech Task - Marketing Page & Credit Application Form.

This is my YardLink Tech Task Submition. 
It is built with Next.js, Tailwindcss & Sass

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.


## Consuming API
I used the Nextjs hook getServerSideProps to get the product and category data on the serverside before page load.

The data is then passed to two components that render cards mapped to the array. For categories and featured products respectively. 


## Credit Application form
I have used Formik for the credit application form and yup for validation.
Formik allows custom react components to be used, and has lots of useful features to make complex forms.

In this example I built two custom form components, one for multiple choice dropdown and one for single choice dropdown.

I made a confirmation page to show how easy it is to have multiple stages to a form using react components and state.


## Testing
I have used Jest and react testing library for unit testing components, combined with proptype typechecking.


## Preview

Preview the example live on [Vercel](https://yardlink-tech-task.vercel.app/):

