'use client'

import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

export default function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/book/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.bookings);
        setBookings(data.bookings);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [user]);

  if (isLoading) {
    return (
      <ProtectedRoute>
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader size={50} color="#A18249" />
      </div>
      </ProtectedRoute>
    );
  }

  if (error) {
    return (
      <ProtectedRoute>
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-5xl mx-auto mt-8">
        <h2 className='text-3xl font-bold mb-10 '>Bookings</h2>
        {bookings?.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-8">
            {bookings?.map((booking) => (
              <div key={booking._id} className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                <div>
                  <p className="text-sm text-[#A18249]">Seat: {booking.seatNumber}</p>
                  <h3 className="text-xl font-semibold">{booking.routeId.source} to {booking.routeId.destination}</h3>
                  <p className="text-sm text-[#A18249]">{booking.date} at {booking.time}</p>
                  <p className={`mt-2 px-2 py-1 inline-block rounded-full text-sm ${
                    booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.paymentStatus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
    </ProtectedRoute>
  );
}

