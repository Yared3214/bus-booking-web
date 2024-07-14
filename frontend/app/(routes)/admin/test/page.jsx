'use client'
import { useState } from 'react';

const CheckBooking = () => {
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
        const response = await fetch(
            `http://localhost:5000/admin/search-bookings?${new URLSearchParams({
              userName,
              date,
              source,
              destination,
            })}`
          );
          const data = await response.json();
          setBookings(data);
          setError(data.message);
    } catch (error) {
        console.error('Error fetching results', error)
        setError(error.message);
    }
  };

  return (
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">Check booking</p></div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Date"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Departure location"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Destination address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={handleSearch}
              >
                <span className="truncate">Search</span>
              </button>
            </div>
            {bookings.length > 0 ? <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
                <table className="flex-1">
                    <thead>
                    <tr class="bg-[#FFFFFF]">
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Booking ID
                      </th>
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Booking date
                      </th>
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Username
                      </th>
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Departure location
                      </th>
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Destination address
                      </th>
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">Driver</th>
                      <th class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 px-4 py-3 text-left text-[#1C160C] w-60 text-sm font-medium leading-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                 {bookings.length > 0 ? bookings?.map(booking => (
                    <tr key={booking._id} class="border-t border-t-[#E9DFCE]">
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">{booking._id}</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        {booking.date}
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">{booking.user.userName}</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        {booking.routeId.source}
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                      {booking.routeId.destination}
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">{booking.routeId.bus.driverName}</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Completed</span>
                        </button>
                      </td>
                    </tr>
                    )) : <div>
                    </div>}
                  </tbody>
                </table>
              </div>
            </div> : error.length > 0 && <div className='ml-28 mt-5 py-2 rounded-sm bg-red-200 text-center w-72'>
                {error}
                </div>}
            
            <div className="py-4 flex flex-wrap justify-between gap-4 px-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBooking;
