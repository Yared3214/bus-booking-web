import React from 'react'

function AdminPage() {
  return (
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
    <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Welcome, Admin!</h1>
            <div class="flex flex-wrap gap-4 p-4">
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p class="text-[#1C160C] text-base font-medium leading-normal">Total Users</p>
                <p class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">1,234</p>
              </div>
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p class="text-[#1C160C] text-base font-medium leading-normal">Tickets Sold</p>
                <p class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">3,567</p>
              </div>
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p class="text-[#1C160C] text-base font-medium leading-normal">Active Buses</p>
                <p class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">45</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-4 p-4">
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
                <p class="text-[#1C160C] text-base font-medium leading-normal">Pending Requests</p>
                <p class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">78</p>
              </div>
            </div>
            <div class="flex px-4 py-3">
              <div class="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
                <label
                  class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span class="truncate">Current</span>
                  <input type="radio" name="09a81f49-bafd-46f7-b26d-058eb8d2c90a" class="invisible w-0" value="Current" />
                </label>
                <label
                  class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span class="truncate">Upcoming</span>
                  <input type="radio" name="09a81f49-bafd-46f7-b26d-058eb8d2c90a" class="invisible w-0" value="Upcoming" />
                </label>
                <label
                  class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span class="truncate">Past</span>
                  <input type="radio" name="09a81f49-bafd-46f7-b26d-058eb8d2c90a" class="invisible w-0" value="Past" />
                </label>
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
                  <tbody>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">#001</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Alice Smith
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">New York</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">Boston</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        05/20/2023
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Confirmed</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">#002</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Bob Jones
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Washington
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Philadelphia
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        05/21/2023
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Pending</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">#003</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Charlie Davis
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">Boston</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">New York</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        05/22/2023
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Cancelled</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">#004</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Diana Prince
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Philadelphia
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Washington
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        05/23/2023
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Confirmed</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-t border-t-[#E9DFCE]">
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">#005</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        Ethan Hunt
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">New York</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">Boston</td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        05/24/2023
                      </td>
                      <td class="table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Confirmed</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <style>
                          @container(max-width:120px){.table-ca879d55-5ce6-4050-b2ed-325488f56824-column-120{display: none;}}
                @container(max-width:240px){.table-ca879d55-5ce6-4050-b2ed-325488f56824-column-240{display: none;}}
                @container(max-width:360px){.table-ca879d55-5ce6-4050-b2ed-325488f56824-column-360{display: none;}}
                @container(max-width:480px){.table-ca879d55-5ce6-4050-b2ed-325488f56824-column-480{display: none;}}
                @container(max-width:600px){.table-ca879d55-5ce6-4050-b2ed-325488f56824-column-600{display: none;}}
                @container(max-width:720px){.table-ca879d55-5ce6-4050-b2ed-325488f56824-column-720{display: none;}}
              </style> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdminPage