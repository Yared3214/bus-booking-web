'use client'
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SeatNumber() {
    const array = [1,2,5,6,9,10,13,14,17,18,21,22,25,26,29,30,33,34,37,38,41,42,45,46,49,50]
    const array1 = [3,4,7,8,11,12,15,16,19,20,23,24,27,28,31,32,35,36,39,40,43,44,47,48] 

    const { user } = useAuth();
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [routeId, setRouteId] = useState('');
    const [data, setData] = useState(null);
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('paid'); // Placeholder for payment status

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
    },[data])

    useEffect(() => {
      const fetchRouteId = async () => {
        try {
          console.log("Fetching route ID with params:", { source, destination });
          const response = await axios.get(`http://localhost:5000/routes`, {
            params: { source, destination }
          });
          setRouteId(response.data);
        } catch (error) {
          console.error("Error fetching route ID:", error);
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
              console.log("Fetching seats with params:", { routeId, date });
              const response = await axios.get(`http://localhost:5000/seats`, {
                params: { routeId, date }
              });
              setSeats(response.data);
            }
            catch (error) {
              console.error("Error fetching seats:", error);
            }
          };
          fetchSeats();
        }
      }, [routeId, date]);
    
      const handleSeatClick = (seat) => {
        if (!seat.isBooked) {
          setSelectedSeat(seat.seatNumber);
        }
      };
    
      const handleBooking = async () => {
        if (selectedSeat) {
          const response = await axios.post('http://localhost:5000/book', {
            seatNumber: selectedSeat,
            route: routeId,
            date: date,
            user: user?.fullName,
          });
          alert(response.data.message);
          const updatedSeats = await axios.get(`http://localhost:5000/seats/${routeId}/${date}/${time}`);
          setSeats(updatedSeats.data);
          setSelectedSeat(null);
        }
      };
    
  return (
    <div className='grid grid-cols-2 mx-48'>
        <div className='grid grid-cols-2 w-[600px] mt-10'>
        <div className='grid grid-cols-2 w-[150px]'>
        {array.map((item, index)=>(
            <div id={index} className='p-3 rounded-lg w-[50px] bg-gray-300 text-center mb-3'>
                {item}
            </div>
        ))}
        </div>
        <div className='grid grid-cols-2 w-[150px]'>
            {array1.map((item, index)=>(
                <div id={index} className='p-3 rounded-lg w-[50px] bg-gray-300 text-center mb-3'>
                    {item}
                </div>
            ))}
        </div>
    </div>
    <div className='mt-10'>
        <h2 className='text-lg'>select a seat to book ticket</h2>
    </div>
    </div>
    
  )
}

export default SeatNumber