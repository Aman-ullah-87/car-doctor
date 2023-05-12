import { useLoaderData } from "react-router-dom";
import PageHeader from "../../../../Components/PageHeader/PageHeader";


const ServiceDetails = () => {
    const servicesDetails=useLoaderData()
    const {_id,title,img,description,facility,price}=servicesDetails
    return (
        <div className="bg-white">
            <PageHeader>Service Details</PageHeader>
            <div className="py-20 flex gap-10">
               <div className="space-y-8">
               <img className=" object-cover w-[752px] h-[400px] rounded-lg" src={img} alt="" />
                <h1 className="font-inter font-bold text-4xl">{title}</h1>
                <p className="font-inter  font-normal text-base capitalize leading-7 text-[#737373] w-[752px]">{description}</p>
                <div className="grid lg:grid-cols-2">
                    {facility.map((facial,i)=><>
                     <div className="w-[364px] h-[204px] bg-[#F3F3F3] my-2 p-6 border-t-2 border-primary rounded-lg" key={i}>
                       <h4 className="font-inter font-bold text-xl leading-6 text-[#444444]">{facial.name}</h4>
                       <p className="py-4 font-inter font-normal text-base leading-5 capitalize text-[#737373]">{facial.details}</p>
                     </div>
                    </>)}
                </div>
               </div>
               <div>
                
               </div>

            </div>
            
        </div>
    );
};

export default ServiceDetails;