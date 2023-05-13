import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import {FaRegTimesCircle} from 'react-icons/fa'
import PageHeader from "../../Components/PageHeader/PageHeader";
import Swal from "sweetalert2";

const Booking = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
//    const [cardBook,setCarBook]=useState([bookings])

  const url = `http://localhost:5000/bookings?email=${users?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);


  const handleDelete=(id)=>{


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then((res) => res.json())
            .then(data=>{
                if(data.deletedCount>0){
                  const remaining=bookings.filter(book=>book._id!==id)
                  
                  setBookings(remaining)
                }
            })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

        
  }
  const handleConfrim=(id)=>{

      fetch(`http://localhost:5000/bookings/${id}`,
      {
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({status:'confirm'})
      }
      )
      .then(res=>res.json())
      .then(data=>
        {
            if(data.modifiedCount>0){
                const remaining=bookings.filter(booking=>booking._id!==id);
                const updated=bookings.find(booking=>booking._id===id)
                updated.status='confirm'
                const result=[updated,...remaining]
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Confirmed Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setBookings(result)
            }
        }
        )
  }

  return (
    <div>
        <PageHeader>Cart Details</PageHeader>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="text-gray-500">
               {bookings.map(bookCard=>
                 <tr key={bookCard._id}>
                 <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                   <button onClick={()=> handleDelete(bookCard._id)} className="whitespace-no-wrap"><FaRegTimesCircle/></button>
                 </td>
                 <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                   <div className="flex items-center">
                     <div className="  flex-shrink-0">
                       <img
                         className="h-[120px] w-[120px] "
                         src={bookCard.img}
                         alt=""
                       />
                     </div>
                     <div className="ml-3">
                       <p className="whitespace-no-wrap text-black font-bold">{bookCard.name}</p>
                     </div>
                   </div>
                 </td>
                 <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                   <p className="whitespace-no-wrap text-black font-bold">${bookCard.price}</p>
                 </td>
                 <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                   <p className="whitespace-no-wrap text-black font-bold">{bookCard.date}</p>
                 </td>

                 <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                 {
                    bookCard.status==='confirm'?   <button  className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                    Confirm
                  </button>:  <button onClick={()=>handleConfrim(bookCard._id)} className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                     Pending
                   </button>
                 }
                 </td>
               </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
