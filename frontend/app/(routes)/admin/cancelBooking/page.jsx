import React from 'react'

function CancelBooking() {
  return (
    <div className='px-48'>
        <h2 className='text-3xl font-bold m-5'>Cancel Booking</h2>
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
                          <span class="truncate">Canc</span>
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
                          <span class="truncate">Canc</span>
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
                          <span class="truncate">Canc</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
    </div>  
  )
}

export default CancelBooking