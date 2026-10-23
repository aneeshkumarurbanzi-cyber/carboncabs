import Form from "@/components/Contact_form";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact_into() {
  return (
    <div className="container-padding grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-20">
      <div className="lg:col-span-2">
        <Form />
      </div>
      <div className="flex flex-col gap-8 justify-center items-start">
        <h2 className="heading-h2">
          Sit back, relax, and reach your destination with ease.
        </h2>
        <p className="paragraph-p text-gray-200 border-b pb-5">
          Have a question or need a quick cab in Trivandrum? We're here to help
          24/7. Whether you're looking for airport transfers, local taxi rides,
          or planning a trip around Kerala — Wheels On Go is just a call or
          message away.
        </p>
        <div className="flex flex-col gap-5 text-lg md:text-xl">
          <a
            href="tel:+919895519435"
            className="flex items-center gap-3 hover:text-[#CAE942] transition-colors"
          >
            <FaPhoneAlt className="text-[#CAE942]"  /> +91 9895519435
          </a>
          <a
            href="mailto:info.carboncabs@gmail.com"
            className="flex items-center gap-3 hover:text-[#CAE942] transition-colors"
          >
            <IoMdMail className="text-[#CAE942]"/> info.carboncabs@gmail.com

          </a>
         <a href="#" className="flex items-start gap-3 hover:text-[#CAE942] transition-colors">
            <div className="mt-1">
              <FaLocationDot className="text-[#CAE942]" />
            </div>
            <span>
               Trivandrum | Kochi
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
