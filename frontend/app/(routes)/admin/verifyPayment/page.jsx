'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function VerifyPayment() {
  const [deposits, setDeposits] = useState([]);;

  useEffect(() => {
    fetchDeposits();
  }, []);

  const fetchDeposits = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/deposits');
      setDeposits(response.data);
    } catch (error) {
      console.error('Error fetching deposits:', error);
    }
  };
  return (
    <div className='min-h-screen mx-36 mt-24'>
      <p className='text-start text-3xl font-bold mb-5'>Verify Deposits</p>
      <div className='border rounded-lg w-3/4'>
      {deposits?.map((deposit) => (
        <Link href={`/admin/verifyPaymentSpec?name=${deposit.user.fullName}&amount=${deposit.amount}`} className='p-4'>
          <h2 className='text-[#a18249]'><span className='font-bold text-black'>#</span> {deposit._id}</h2>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default VerifyPayment