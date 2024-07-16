'use client'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Header() {
  
  const { logout, user } = useAuth();
  const userProfile = user ? (user?.fullName?.split(' ')[0][0] + user?.fullName?.split(' ')[1][0]).toUpperCase() : '';
  const handleLogout = () => {
    logout();
  }
    const router = useRouter();
  return (
    <div>
      {user && user?.role == "admin" ? <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
          <div class="flex items-center gap-4 text-[#1C160C]">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <Link href='/'><h2 class="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Bus Travel Admin</h2></Link>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/">Dashboard</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/admin/checkBooking">Check Booking</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/admin/cancelBooking">Cancel bookings</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/admin/verifyPayment">Verify Deposit</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/admin/manageRoute">Manage Route</a>

            </div>
            <div class="flex gap-2 items-center">
              <div className='p-3 bg-green-400 rounded-full'>{userProfile}</div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={handleLogout}

              >
                <span class="truncate">Logout</span>
              </button>
            </div>
          </div>
        </header> : user && <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
          <div class="flex items-center gap-4 text-[#1C160C]">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <Link href='/'><h2 class="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Bus Travel</h2></Link>
          </div>
          
            {user && 
            <div className='ml-10 flex gap-3 items-center'>
            <h2 className='font-semibold'>Balance:</h2>
          <div className='px-4 py-2 bg-[#F4EFE6] w-[100px] rounded-lg text-center'>{user?.balance} br</div>
          </div>}
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/user/BookTicket">Book ticket</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/user/Deposit">Deposit</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/user/MyBooking">My bookings</a>
              <a class="text-[#1C160C] text-sm font-medium leading-normal" href="/user/ChangeProfile">Edit profile</a>
            </div>
            {!user ? <div class="flex gap-2">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={()=>router.push('/SignUpPage')}
              >
                <span class="truncate">Sign up</span>
              </button>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={()=>router.push('/SignInPage')}

              >
                <span class="truncate">Sign in</span>
              </button>
            </div> : <div class="flex gap-2 items-center">
              <div className='p-3 bg-green-400 rounded-full'>{userProfile}</div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={handleLogout}

              >
                <span class="truncate">Logout</span>
              </button>
            </div>}
          </div>
        </header>}        
    </div>
  )
}

export default Header