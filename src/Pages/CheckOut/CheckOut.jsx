import { useLoaderData } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const checkoutData = useLoaderData();
  const {title,price,img}=checkoutData;
  const {users}=useContext(AuthContext)

  const handleCheckout=(e)=>{
        e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const date=form.date.value;
    const email=users?.email
    const booking={
        name:name,
        date:date,
        img,
        email,
        title,
        price
    }
   
    fetch(`http://localhost:5000/bookings`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(booking),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Confirmed order successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  return (
    <div>
      <PageHeader />
      <div className="lg:p-10 bg-[#F3F3F3]">
        <form onSubmit={handleCheckout}  className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md  p-6  lg:p-10 bg-white">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className=""> First Name </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className=""> Price </label>
              <input
                type="text"
                defaultValue={`$${price}`}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className=""> Service Name </label>
              <input
                type="text"
                defaultValue={title}
                readOnly
                placeholder="service name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className=""> Service Date </label>
              <input
                type="date"
                name="date"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
         
          <div>
            <label className=""> Email Address </label>
            <input
              type="email"
              readOnly
              defaultValue={users?.email}
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
         
         

          <div>
            <button
              type="submit"
              className="btn btn-outline text-white bg-primary hover:bg-white hover:text-primary hover:border-primary w-full"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
