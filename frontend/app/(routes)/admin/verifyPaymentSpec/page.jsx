'use client'
import PaymentDetails from '@/app/components/PaymentDetails';
import ProofOfPayment from '@/app/components/ProofOfPayment';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function VerifyPaymentSpec() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const amount = searchParams.get('amount');
    const payment = {
        method: 'Visa 1234',
        status: 'Paid',
        amount: amount,
        user: name
      };
  return (
    <div>
      <main className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Verify payment</h1>
        <a href="#" className="text-blue-500 mb-4 block">Order #12345</a>
        <PaymentDetails payment={payment} />
        <ProofOfPayment imageUrl="https://media.istockphoto.com/id/1420767944/vector/register-sale-receipt-isolated-on-white-background-cash-receipt-printed.jpg?s=612x612&w=0&k=20&c=eV7CDJK0DZgKo7KVlGTDJeVMN_2xybqIPvt1ATl_kkM=" />
      </main>
    </div>
  )
}

export default VerifyPaymentSpec