'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'sonner';

function CancelBooking() {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/canceled');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching canceled bookings:', error);
      }
    };

    getBookings();
  });

  const handleCancelation = async(id) => {
    try {
      const response = await fetch(`http://localhost:5000/admin/delete/${id}`, {
        method: 'DELETE'
      });
      toast("Booking cancelled successfully", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    } catch (error) {
      console.error('Error cancelling booking', error);
    }
  }
  return (
    <div className='px-48'>
        <h2 className='text-3xl font-bold m-5'>Cancel Booking</h2>
        <div className="px-4 py-3 @container">
              <div className={` ${bookings.length > 0 ? 'flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]' : ''}`}>
                {bookings.length > 0 ? <table className="flex-1" >
                  <thead>
                    <tr className="bg-[#FFFFFF]">
                      <th className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Booking ID
                      </th>
                      <th className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">User</th>
                      <th className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Departure
                      </th>
                      <th className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Destination
                      </th>
                      <th className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">Date</th>
                      <th className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 px-4 py-3 text-left text-[#1C160C] w-60 text-sm font-medium leading-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings?.length > 0 ? bookings?.map((booking) => (
                   <tr key={booking._id} className="border-t border-t-[#E9DFCE]">
                      <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">{booking._id}</td>
                      <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                      {booking.user.userName}
                      </td>
                      <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">{booking.routeId.source}</td>
                      <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">{booking.routeId.destination}</td>
                      <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                      {booking.date}
                      </td>
                      <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button onClick={() => handleCancelation(booking._id)}
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Cancel</span>
                        </button>
                      </td>
                    </tr>
                    )) : <div></div>}
                  </tbody>
                </table> : <div className='text-center text-lg'>
                  No bookings found
                  </div>}
                
              </div>
              </div>
    </div>  
  )
}

export default CancelBooking