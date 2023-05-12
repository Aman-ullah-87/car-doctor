import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="py-2 bg-[#e8e8e8]">
      <div className=" space-y-6 text-center">
        <h4 className="font-inter font-bold text-xl text-primary">About us</h4>
        <p className="font-inter font-bold text-5xl text-[#151515]">
          Our Service Area
        </p>

        <p className="font-inter font-semibold text-base capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center py-12">
        <button className="btn btn-outline text-primary hover:bg-primary hover:border-white">
          More Services
        </button>
      </div>{" "}
    </div>
  );
};

export default Service;
