'use client'
import React, { useEffect, useState } from 'react'

function SingUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    password: '',
    email: '',
    PhoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully');
        setFormData({
          fullName: '',
          userName: '',
          password: '',
          email: '',
          PhoneNumber: '',});
      } else {
        console.log(formData);
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };
  return (
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <div class="px-20 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">Create your account</p>
          </div>
          <form onSubmit={handleSubmit}>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Full Name</p>
              <input name='fullName' value={formData.fullName} onChange={handleChange}
                placeholder="Enter your full name"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Username</p>
              <input name='userName' value={formData.userName} onChange={handleChange}
                placeholder="Pick a username"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </label>
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Your username is public. It must be at least 3 characters long, can only contain letters, numbers, and underscores, and must not begin with a number.
          </p>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Phone Number (Optional)</p>
              <input name='PhoneNumber' value={formData.PhoneNumber} onChange={handleChange}
                placeholder="Enter your phone number"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </label>
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal pb-3 pt-1 px-4">
            By providing your phone number, you agree to receive SMS updates from us and our affiliates, including reminders about your upcoming reservations. Standard text
            messaging rates may apply.
          </p>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Email</p>
              <input name='email' value={formData.email} onChange={handleChange}
                placeholder="Enter your email"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Password</p>
              <input name='password' value={formData.password} onChange={handleChange}
                placeholder="Create a password"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
              <input
                placeholder="confirm a password"
                class="mt-7 form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
              <input
              type='submit'
              value='SingUp'
              className='mt-5 px-5 py-2 bg-[#32a852] rounded-lg text-white'
              />
            </label>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SingUpPage