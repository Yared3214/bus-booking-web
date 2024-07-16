'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function VerifyPayment() {
  const [deposits, setDeposits] = useState([]);

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
    <div className='flex flex-col min-h-screen'>
      
    </div>
  )
}

export default VerifyPayment