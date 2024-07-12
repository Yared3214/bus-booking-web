import React from 'react'

function AdminPage() {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   <main>
    //     <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    //       <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    //         <div className="p-6 bg-white border-b border-gray-200">
    //           <h2 className="text-2xl font-semibold text-gray-900">Welcome, Admin!</h2>
    //           <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    //             <div className="bg-white p-4 rounded-lg shadow">
    //               <h3 className="text-lg font-medium text-gray-700">Total Users</h3>
    //               <p className="mt-1 text-3xl font-semibold text-gray-900">1,234</p>
    //             </div>
    //             <div className="bg-white p-4 rounded-lg shadow">
    //               <h3 className="text-lg font-medium text-gray-700">Tickets Sold</h3>
    //               <p className="mt-1 text-3xl font-semibold text-gray-900">3,567</p>
    //             </div>
    //             <div className="bg-white p-4 rounded-lg shadow">
    //               <h3 className="text-lg font-medium text-gray-700">Active Buses</h3>
    //               <p className="mt-1 text-3xl font-semibold text-gray-900">45</p>
    //             </div>
    //           </div>
    //           <div className="mt-4 bg-white p-4 rounded-lg shadow">
    //             <h3 className="text-lg font-medium text-gray-700">Pending Requests</h3>
    //             <p className="mt-1 text-3xl font-semibold text-gray-900">78</p>
    //           </div>
    //           <div className="mt-8">
    //             <div className="border-b border-gray-200">
    //               <nav className="-mb-px flex space-x-8" aria-label="Tabs">
    //                 <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 border-indigo-500 text-sm font-medium text-indigo-600">Current</a>
    //                 <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Upcoming</a>
    //                 <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Past</a>
    //               </nav>
    //             </div>
    //             <div className="mt-4">
    //               <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
    //                 <table className="min-w-full divide-y divide-gray-200">
    //                   <thead>
    //                     <tr>
    //                       <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
    //                       <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
    //                       <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
    //                       <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
    //                       <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
    //                       <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody className="bg-white divide-y divide-gray-200">
    //                     <tr>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#001</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Alice Smith</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New York</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boston</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/20/2023</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
    //                     </tr>
    //                     <tr>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#002</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bob Jones</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Washington</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Philadelphia</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/21/2023</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
    //                     </tr>
    //                     <tr>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#003</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Charlie Davis</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boston</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New York</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/22/2023</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled</span></td>
    //                     </tr>
    //                     <tr>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#004</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Diana Prince</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Philadelphia</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Washington</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/23/2023</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
    //                     </tr>
    //                     <tr>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#005</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ethan Hunt</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New York</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boston</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/24/2023</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
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