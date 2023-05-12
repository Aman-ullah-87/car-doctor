import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id,title,price,img}=service
    return (
        <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800  duration-300 hover:scale-105 hover:shadow-lg">
  <img className="h-48 w-full object-cover object-center" src={img} alt="Product Image" />
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{title}</h2>
   
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-primary dark:text-white">Price: ${price}</p>
     
      <Link to={`/servicesdetails/${_id}`}><button className="ml-auto text-base font-medium text-primary"><svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;