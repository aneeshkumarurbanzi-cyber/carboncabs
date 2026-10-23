import { MdFlight } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";

export default function Contact_service() {
  const Service = [
    {
      title: "Airport Taxi in Trivandrum",
      discription:
        "24/7 reliable airport transfers with on-time pickup and drop.",
      icon: <MdFlight />,
    },

    {
      title: " Local City Rides",
      discription:
        "Comfortable and affordable city cab services in Trivandrum for daily commutes.",
      icon: <FaTaxi />,
    },

    {
      title: " Outstation Taxi Service",
      discription:
        "Book safe and convenient outstation cabs from Trivandrum to nearby cities.",
      icon: <FaCableCar />,
    },
  ];

  return (
    <div className="container-padding flex flex-col gap-5 ">
      <h2 className="heading-h2">Our Service</h2>
      <p className="paragraph-p">
        We're available 24/7, so you can rely on us for last-minute travel
        needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {Service.map((service, index) => (
          <div
            key={index}
            className="bg-[#232526] p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 transition-transform duration-200 hover:-translate-y-2 hover:border-[#CAE942] hover:shadow-2xl"
          >
            <div className="text-4xl text-[#CAE942]">{service.icon}</div>
            <h3 className="text-xl font-semibold text-center text-[#CAE942]">
              {service.title}
            </h3>
            <p className="text-gray-200 text-center">{service.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
