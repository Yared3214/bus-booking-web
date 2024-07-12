import React from 'react'

function PaymentDetails({ payment }) {
  return (
    <div class="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p class="text-[#A18249] text-sm font-normal leading-normal">Payment method</p>
                <p class="text-[#1C160C] text-sm font-normal leading-normal">{payment.method}</p>
              </div>
              <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p class="text-[#A18249] text-sm font-normal leading-normal">Payment status</p>
                <p class="text-[#1C160C] text-sm font-normal leading-normal">{payment.status}</p>
              </div>
              <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p class="text-[#A18249] text-sm font-normal leading-normal">Amount paid</p>
                <p class="text-[#1C160C] text-sm font-normal leading-normal">{payment.amount}</p>
              </div>
              <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p class="text-[#A18249] text-sm font-normal leading-normal">User</p>
                <p class="text-[#1C160C] text-sm font-normal leading-normal">John Smith</p>
              </div>
            </div>
  )
}

export default PaymentDetails