'use client'
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function SeatNumber() { 

    const router = useRouter();
    const searchParams = useSearchParams(); 
    const numbersArray = Array.from({ length: 26 }, (_, i) => i + 1);
    const { user } = useAuth();
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [error, setError] = useState('');
    const [routeId, setRouteId] = useState('');
    const [data, setData] = useState(null);
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('paid'); // Placeholder for payment status

    useEffect(() => {
      const from = searchParams.get('from');
      if (from !== 'BookTicket') {
          router.push('/user/BookTicket');
      }
  }, [router, searchParams]);

    useEffect(() => {
      const userData = sessionStorage.getItem('userData');
      if (userData) {
        setData(JSON.parse(userData))
      }
    }, []);

    useEffect(()=>{
      if (data) {
        setSource(data.source);
        setDestination(data.destination);
        setDate(data.date);
      }
    },[data]);

    useEffect(() => {
      const fetchRouteId = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/routes`, {
            params: { source, destination }
          });
          setRouteId(response.data);
        } catch (error) {
          setError("Error fetching route ID:");
        }
      };
    
      if (source && destination) {
        fetchRouteId();
      }
    }, [source, destination]);

  
    
    
      useEffect(() => {
        if (routeId) {
          const fetchSeats = async () => {
            try {
              const response = await axios.get(`http://localhost:5000/seats`, {
                params: { routeId, date }
              });
              setSeats(response.data);
            }
            catch (error) {
              setError("Error fetching seats:");
            }
          };
          fetchSeats();
        }
      }, [routeId, date, seats]);
    
      const handleSeatClick = (seat) => {
        if (!seat.isBooked) {
          setSelectedSeat(seat.seatNumber);
        }
      };
    
      const handleBooking = async () => {
        if (selectedSeat) {
          try {
            const response = await axios.post('http://localhost:5000/book', {
            seatNumber: selectedSeat,
            routeId: routeId,
            date: date,
            user: user?._id,
          });
          alert(response.data.message);
          const updatedSeats = await axios.get(`http://localhost:5000/seats/`, {
            params: { routeId, date }
          });
          setSeats(updatedSeats.data);
          setSelectedSeat(null);
        }
        catch(error) {
          setError('error booking a ticket');
        } 
        }
      };
    
  return (
    <ProtectedRoute>
    <div className='min-h-screen'>
    {seats?.length > 0 ? <div className='grid grid-cols-2 mx-48'>
      <div className='grid grid-cols-2 w-[600px] mt-10'>
      <div className='grid grid-cols-2 w-[150px]'>
      {seats?.filter((seat, index) => {
        return Math.floor(index / 2) % 2 === 0;
      }).map((seat, index)=>(
          <div onClick={() => handleSeatClick(seat)}
           id={index} 
           className={`p-3 rounded-lg w-[50px] ${seat?.isBooked ? 'bg-red-400 cursor-not-allowed' : seat.seatNumber == selectedSeat ? 'bg-green-400 cursor-pointer' : 'bg-gray-300 cursor-pointer'} text-center mb-3`}>
              {seat.seatNumber}
          </div>
      ))}
      </div>
      <div className='grid grid-cols-2 w-[150px]'>
          {seats?.filter((seat, index) => {
        return Math.floor((index - 2) / 2) % 2 === 0;
      }).map((seat, index)=>(
              <div onClick={() => handleSeatClick(seat)} 
              id={index} 
              className={`p-3 rounded-lg w-[50px] ${seat?.isBooked ? 'bg-red-400 cursor-not-allowed' : seat.seatNumber == selectedSeat ? 'bg-green-400 cursor-pointer' : 'bg-gray-300 cursor-pointer'} text-center mb-3
              `}>
                  {seat.seatNumber}
              </div>
          ))}
      </div>
  </div>
  <div className='mt-10'>
      <h2 className='text-lg font-semibold'>Select a seat to book ticket</h2>
      <h2 className='text-md text-gray-500 mt-5'>Description</h2>
      <div className='flex flex-col gap-5 mt-5 mb-5'>
      <div className='flex gap-3'>
      <div className='p-3 rounded-lg w-[40px] bg-red-400'></div>
      <p>- Not available(Already booked)</p>
      </div>
      <div className='flex gap-3'>
      <div className='p-3 rounded-lg w-[40px] bg-gray-300'></div>
      <p>- available</p>
      </div>
      </div>
      <button onClick={handleBooking} disabled={!selectedSeat} className='p-32 py-2 rounded-lg bg-[#F4EFE6] ml-32'>
      Book
      </button>
      {error && <p className='px-5 py-2 w-[400px] bg-red-200 text-center mt-5 rounded-lg ml-20'>{error}</p>}
  </div>
  </div> :  
  <div className='grid grid-cols-2 mx-48'>
  <div className='grid grid-cols-2 w-[600px] mt-10'>
  <div className='grid grid-cols-2 w-[150px]'>
  {numbersArray.map((item, index)=>(
      <div id={index} 
       className='p-3 rounded-lg w-[50px] bg-slate-200  mb-3 animate-pulse'>
      </div>
  ))}
  </div>
  <div className='grid grid-cols-2 w-[150px]'>
      {numbersArray.map((item, index)=>(
          <div id={index} 
          className='p-3 rounded-lg w-[50px] bg-slate-200  mb-3 animate-pulse'>
          </div>
      ))}
  </div>
  </div>
  <div className='mt-10'>
  <div className='p-4 w-[500px] bg-slate-200 animate-pulse rounded-md mb-10'></div>
  <button className='p-32 py-5 rounded-lg bg-slate-200 ml-32 animate-pulse'>
  </button>
  {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  </div> }
  </div>
  </ProtectedRoute>
  )
}

export default SeatNumber