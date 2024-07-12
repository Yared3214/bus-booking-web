import React from 'react'

function CheckBooking() {
  return (
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">Check booking</p></div>
            <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Departure location"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Destination address"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Search</span>
              </button>
            </div>
            <div class="px-4 py-3 @container">
              <div class="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
                <table class="flex-1">
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
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">#123</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Sep 1, 2023
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Tommy</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Los Angeles
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Jenny</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Completed</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">#124</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Sep 1, 2023
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">John</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Los Angeles
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Sam</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Pending</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">#125</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Sep 1, 2023
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Tony</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Los Angeles
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Lily</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Completed</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">#126</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Sep 1, 2023
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Tina</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Los Angeles
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Eva</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">In progress</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">#127</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Sep 1, 2023
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Tracy</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        Los Angeles
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">Grace</td>
                      <td class="table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Cancelled</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <style>
                          @container(max-width:120px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-120{display: none;}}
                @container(max-width:240px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-240{display: none;}}
                @container(max-width:360px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-360{display: none;}}
                @container(max-width:480px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-480{display: none;}}
                @container(max-width:600px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-600{display: none;}}
                @container(max-width:720px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-720{display: none;}}
                @container(max-width:840px){.table-fe5fcdae-98b3-4ff2-85e8-a62ca04cd1b3-column-840{display: none;}}
              </style> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckBooking


  
