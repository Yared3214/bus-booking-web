import React from 'react'

function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Welcome, Admin!</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700">Total Users</h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">1,234</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700">Tickets Sold</h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">3,567</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-700">Active Buses</h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">45</p>
                </div>
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-700">Pending Requests</h3>
                <p className="mt-1 text-3xl font-semibold text-gray-900">78</p>
              </div>
              <div className="mt-8">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 border-indigo-500 text-sm font-medium text-indigo-600">Current</a>
                    <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Upcoming</a>
                    <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Past</a>
                  </nav>
                </div>
                <div className="mt-4">
                  <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#001</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Alice Smith</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New York</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boston</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/20/2023</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#002</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bob Jones</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Washington</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Philadelphia</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/21/2023</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#003</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Charlie Davis</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boston</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New York</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/22/2023</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled</span></td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#004</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Diana Prince</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Philadelphia</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Washington</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/23/2023</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#005</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ethan Hunt</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">New York</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boston</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">05/24/2023</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminPage