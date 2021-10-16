export default function Footer() {
  return (
    <>
      <div className="p-6 md:p-20 w-full bg-yardblue text-white flex flex-col gap-y-6 lg:flex-row lg:justify-between flex-wrap">
        <ul className="flex flex-col ">
          <h6>Contact Details</h6>
          <span className="font-normal underline leading-loose">
            <li>Talk to us on 020 3642 5223</li>
            <li>hire@yardlink.com</li>
            <li>Contact Us</li>
          </span>
          
        </ul>

        <ul className="flex flex-col">
          <h6>Yardlink Hire</h6>
          <span className="font-normal underline leading-loose">
            <li>Tool Hire</li>
            <li>Plant Hire</li>
            <li>Site Welfare Hire</li>
            <li>Powered Access Hire</li>
            <li>Services</li>
          </span>
        </ul>
        <ul className="flex flex-col ">
          <h6>Useful Information</h6>
          <div className="font-normal underline flex gap-x-12 leading-loose">
            <span>
            <li>Create Account</li>
            <li>About us</li>
            <li>Careers</li>
            <li>How Plant Hire Works</li>
            <li>Tool and Plant Locator</li>
            <li>Equipment Manufacturers</li>
            </span>
            <span>
            <li>Blog</li>
            <li>Suppliers</li>
            <li>FAQs</li>
            <li>Damage Waiver</li>
            <li>YardLink Privacy Policy</li>
            <li>Terms and Conditions</li>
            </span>
          </div>
        </ul>
        <p className=" lg:absolute bottom-12 left-20 pt-12 text-sm font-thin">
            © Copyright 2021 · YardLink
          </p>
      </div>
    </>
  );
}
