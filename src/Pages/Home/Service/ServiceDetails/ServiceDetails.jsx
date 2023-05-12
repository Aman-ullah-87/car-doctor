import { Link, useLoaderData } from "react-router-dom";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import { FaArrowRight, FaSdCard } from "react-icons/fa";
import logo from "/src/assets/logo.svg";

const ServiceDetails = () => {
  const servicesDetails = useLoaderData();
  const { _id, title, img, description, facility, price } = servicesDetails;
  return (
    <div className="bg-white">
      <PageHeader>Service Details</PageHeader>
      <div className="py-20 flex gap-10 flex-row 	">
        <div className="space-y-8 basis-3/4	">
          <img
            className=" object-cover w-full h-[400px] rounded-lg"
            src={img}
            alt=""
          />
          <h1 className="font-inter font-bold text-4xl">{title}</h1>
          <p className="font-inter  font-normal text-base capitalize leading-7 text-[#737373] w-full">
            {description}
          </p>
          <div className="grid lg:grid-cols-2 gap-4">
            {facility.map((facial, i) => (
              <>
                <div
                  className="w-full  h-[204px] bg-[#F3F3F3] my-2 p-6 border-t-2 border-primary rounded-lg"
                  key={i}
                >
                  <h4 className="font-inter font-bold text-xl leading-6 text-[#444444]">
                    {facial.name}
                  </h4>
                  <p className="py-4 font-inter font-normal text-base leading-5 capitalize text-[#737373]">
                    {facial.details}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* right side content */}
        <div className="">
          <div className=" w-full h-[262px] bg-black text-white space-y-6 py-4 rounded-lg">
            <h5 className="font-inter font-bold text-center text-2xl ">
              Download
            </h5>
            <div className="flex gap-4 items-center justify-between px-6">
              <FaSdCard />

              <h5 className="flex flex-col text-md font-bold font-inter ">
                {" "}
                Our Brochure{" "}
                <span className="font-inter font-normal text-base leading-4 text-[#A2A2A2]">
                  Download
                </span>{" "}
              </h5>
              <button className="btn bg-primary hover:text-primary hover:bg-white border-none">
                {" "}
                <FaArrowRight />{" "}
              </button>
            </div>
            <div className="flex gap-4 items-center jus px-6">
              <FaSdCard />

              <h5 className="flex flex-col text-md font-bold font-inter">
                {" "}
                Company Details{" "}
                <span className="font-inter font-normal text-base leading-4 text-[#A2A2A2]">
                  Download
                </span>{" "}
              </h5>
              <button className="btn bg-primary hover:text-primary hover:bg-white border-none">
                {" "}
                <FaArrowRight />{" "}
              </button>
            </div>
          </div>
          <div className="h-[420px] flex flex-col py-10 items-center bg-black text-white my-10 p-4 rounded-lg space-y-6">

            <img src={logo} className="w-[133px] h-[73px] text-white" alt="" />
            <h5 className="font-inter font-bold text-md text-center ">Need Help? We Are Here <br /> To Help You</h5>
            <div className="h-[126px] relative w-full bg-white rounded-lg ">
                <h3 className="font-inter text-primary font-bold text-md text-center py-4">Car Doctor <span className="text-black">Special</span> </h3>
                <h5 className="font-inter text-gray-700 font-bold text-base text-center">Save up to <span className="text-primary">60% off</span></h5>
                <button className=" absolute text-center left-16 -bottom-4 btn bg-primary hover:text-primary hover:bg-white hover:border-primary border-primary">
                Get A Quote
              </button>
            </div>
          </div>
          <h1 className="font-inter font-extrabold text-3xl ">Price: ${price}</h1>
          <Link to={`/checkout/:${_id}`}><button className="btn w-full my-4 bg-primary hover:text-primary hover:bg-white border-primary hover:border-primary">
          Proceed Checkout
              </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
