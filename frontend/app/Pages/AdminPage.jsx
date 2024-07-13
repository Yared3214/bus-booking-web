'use client'
import React, { useEffect, useState } from 'react'

function page() {
  const [currentBookings, setCurrentBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Current');
  const [userCount, setUserCount] = useState();
  const [tickets, setTickets] = useState();
  const [buses, setBuses] = useState();
  const [pending, setPending] = useState();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin');
        const data = await response.json();
        setCurrentBookings(data.current);
        setUpcomingBookings(data.upcoming);
        setPastBookings(data.past);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/user-count');
        const data = await response.json();
        setUserCount(data.count);
      } catch(error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/ticket-count');
        const data = await response.json();
        setTickets(data.count);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    const fetchBuses = async() => {
      try {
        const response = await fetch('http://localhost:5000/admin/bus-count');
        const data = await response.json();
        setBuses(data.count);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    const fetchPendings = async() => {
      try {
        const response = await fetch('http://localhost:5000/admin/pending-count');
        const data = await response.json();
        setPending(data.count);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    }

    fetchPendings();
    fetchBuses();
    fetchTickets();
    fetchUsers();
    fetchBookings();
  }, []);
  const renderBookings = (bookings) => {
    return bookings.map((booking) => (
        <tr key={booking._id} className="border-t border-t-[#E9DFCE]">
          <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">#{booking._id}</td>
          <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
            {booking.user.fullName}
          </td>
          <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">{booking.routeId.source}</td>
          <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">{booking.routeId.destination}</td>
          <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
            {booking.date}
          </td>
          <td className="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full">
              <span className="truncate">{booking.paymentStatus}</span>
            </button>
          </td>
        </tr>
      )) 
  };
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Welcome, Admin!</h1>
            <div className="flex flex-wrap gap-4 p-4">
              {/* Statistics Cards */}
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Total Users</p>
                <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">{userCount}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Tickets Sold</p>
                <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">{tickets}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Active Buses</p>
                <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">{buses}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Pending Requests</p>
                <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">{pending}</p>
              </div>
            </div>
              <div class="flex px-4 py-3">
              <div class="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
                {['Current', 'Upcoming', 'Past'].map((tab)=>(
                    <label
                    class={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 ${selectedTab == tab && 'bg-[#FFFFFF] shadow-[0_0_4px_rgba(0,0,0,0.1)] text-[#1C160C]'}  text-[#A18249] text-sm font-medium leading-normal`}
                  >
                    <span class="truncate">{tab}</span>
                    <input type='button' onClick={()=>setSelectedTab(tab)} name="09a81f49-bafd-46f7-b26d-058eb8d2c90a" class="invisible w-0" value="Current" />
                  </label>
                ))}
              </div>
            </div>
            <div class="px-4 py-3 @container">
              <div class="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
                <table class="flex-1">
                  <thead>
                    <tr class="bg-[#FFFFFF]">
                      <th class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Booking ID
                      </th>
                      <th class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">User</th>
                      <th class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Departure
                      </th>
                      <th class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Destination
                      </th>
                      <th class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">Date</th>
                      <th class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 px-4 py-3 text-left text-[#1C160C] w-60 text-sm font-medium leading-normal">Status</th>
                    </tr>
                  </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedTab === 'Current' && renderBookings(currentBookings)}
                  {selectedTab === 'Upcoming' && renderBookings(upcomingBookings)}
                  {selectedTab === 'Past' && renderBookings(pastBookings)}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page