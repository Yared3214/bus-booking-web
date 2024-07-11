'use client'
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function EditProfile() {
  const { user } = useAuth();  
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    PhoneNumber: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { 
    // Fetch current user data
    console.log('fetching uset with params: ', user?._id);
    axios.get(`http://localhost:5000/change/${user?._id}`)
      .then(response => {
        setFormData({
          ...formData,
          fullName: response.data.fullName,
          userName: response.data.userName,
          PhoneNumber: response.data.PhoneNumber,
        });
      })
      .catch(error => console.log(error));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('updating user info with params: ', formData);
      const response = await axios.put(`http://localhost:5000/change/${user?._id}`, formData);
      // setMessage(response.data.message);
      if(response) {
        toast("Profile updated successfully.", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        location.reload();
      }
      
    } catch (error) {
      // setError(error.response.data.message);
      toast(error.response.data.message, {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };


  return (
    <ProtectedRoute>
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <div class="px-20 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
        {error.length > 0 && <p className="p-2 w-[400px] rounded-lg bg-red-200 text-center">{error}</p>}
        {message.length > 0 && <p className="p-2 w-[400px] rounded-lg bg-green-200 text-center">{message}</p>}
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">Change your profile</p>
          </div>
          <form onSubmit={handleSubmit}>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Full Name</p>
              <input id="fullName"
                  name="fullName"
                  type="text" 
                  value={formData.fullName}
                  onChange={handleChange}
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#A18249] focus:outline-0 
                  focus:ring-0 border-[#faeede] border-2 h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Username</p>
              <input id="username"
                  name="userName"
                  type="text" 
                  value={formData.userName} 
                  onChange={handleChange}
                  placeholder="Pick a username"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#A18249] focus:outline-0 
                  focus:ring-0 border-[#faeede] border-2 h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Phone Number (Optional)</p>
              <input id="phoneNumber"
                  name="PhoneNumber"
                  type="text"
                  value={formData.PhoneNumber} onChange={handleChange}
                  placeholder="Enter your phone number"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#A18249] focus:outline-0 
                  focus:ring-0 border-[#faeede] border-2 h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                    
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Current Password*</p>
              <input id="currentPassword"
                  name="currentPassword"
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange}
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#A18249] focus:outline-0 
                  focus:ring-0 border-[#faeede] border-2 h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">New Password*</p>
              <input id="newPassword"
                  name="newPassword"
                  type="password" 
                  value={formData.newPassword} 
                  onChange={handleChange}
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#A18249] focus:outline-0 
                  focus:ring-0 border-[#faeede] border-2 h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Confirm New Password*</p>
              <input id="confirmPassword"
                  name="confirmPassword"
                  type="password" 
                  value={formData.confirmPassword} 
                  onChange={handleChange}
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#A18249] focus:outline-0 
                  focus:ring-0 border-[#faeede] border-2 h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </label>
          </div>
          <input
              type='submit'
              value='Save Changes'
              className='mt-5 px-5 py-2 bg-[#32a852] rounded-lg text-white'
              />
          </form>
        </div>
      </div>
    </div>
  </div>
  </ProtectedRoute>
  );
}
