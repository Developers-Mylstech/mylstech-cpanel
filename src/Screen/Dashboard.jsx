import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate()

    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Total Customers */}
                <div className="border p-5 rounded-xl flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Total Customers</p>
                            <p className="text-2xl font-bold">2,890</p>
                        </div>
                        <svg className="w-20 h-10" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <polyline fill="none" stroke="green" strokeWidth="2" points="0,20 20,10 40,15 60,5 80,15 100,10" />
                        </svg>
                    </div>
                    <p className="text-green-500 text-sm mt-2">+40% this month</p>
                    <button onClick={() => navigate('customer')} className="text-pri text-sm">View All →</button>
                </div>

                {/* Total Employees */}
                <div className="border p-5 rounded-xl flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Employees</p>
                        <p className="text-2xl font-bold">28</p>
                    </div>
                    <button onClick={() => navigate('employee')} className="text-pri text-sm mt-2">View All →</button>
                </div>

                {/* Total Services */}
                <div className="border p-5 rounded-xl flex flex-col justify-between ">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Total Services</p>
                            <p className="text-2xl font-bold">24</p>
                        </div>
                        <svg className="w-20 h-10" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <polyline fill="none" stroke="orange" strokeWidth="2" points="0,10 20,20 40,15 60,25 80,20 100,15" />
                        </svg>
                    </div>
                    <p className="text-green-500 text-sm mt-2">+2 this month</p>
                    <button onClick={() => navigate('services')} className="text-pri text-sm">View All →</button>
                </div>

                {/* Subscribed Customers */}
                <div className="border p-5 rounded-xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Subscribed Customers</p>
                            <p className="text-2xl font-bold">3,214</p>
                        </div>
                        <svg className="w-20 h-10" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <polyline fill="none" stroke="purple" strokeWidth="2" points="0,15 20,20 40,12 60,22 80,16 100,18" />
                        </svg>
                    </div>
                    <p className="text-green-500 text-sm mt-2">+18% this month</p>
                </div>

                {/* Contact Form Submissions */}
                <div className="border p-5 rounded-xl col-span-1 sm:col-span-2 lg:col-span-1">
                    <h3 className="font-semibold mb-4">Contact Form Submissions</h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            { name: "Michael Jordan", email: "MichaelJordan@gmail.com", date: "Apr 01" },
                            { name: "Emigo Kiaren", email: "MichaelJordan@gmail.com", date: "Apr 04" },
                            { name: "Randy Origoan", email: "MichaelJordan@gmail.com", date: "Apr 10" },
                            { name: "George Pieterson", email: "MichaelJordan@gmail.com", date: "Apr 11" },
                        ].map((item, i) => (
                            <li key={i} className="flex justify-between items-center">
                                <div>
                                    <p>{item.name}</p>
                                    <span className='text-[10px] text-gray-500'>{item.email}</span>
                                </div>
                                <span>{item.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Profit Earned */}
                <div className="border p-5 rounded-xl flex flex-col justify-between col-span-1">
                    <h3 className="font-semibold mb-4">Profit Earned</h3>
                    <div className='space-y-2'>
                        <div className="flex justify-between items-end gap-1">
                            {[10, 16, 20, 12, 20, 16, 14].map((h, i) => (
                                <div key={i} className="w-4 bg-pri" style={{ height: `${h * 4}px` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
                        </div>
                    </div>
                </div>

                {/* Revenue Analytics */}
                <div className="border p-6 rounded-xl col-span-1 sm:col-span-2">
                    <h3 className="font-semibold mb-2">Revenue Analytics</h3>
                    <p className="text-sm text-gray-500 mb-4">Revenue Analytics with sales & profit (USD)</p>
                    <div className="w-full h-40 bg-gray-100 rounded-md"></div>
                </div>

                {/* Deals Status */}
                <div className="border p-5 rounded-xl col-span-1">
                    <h3 className="font-semibold">Deals Status</h3>
                    <p className="text-2xl font-bold mt-2">4,289 <span className="text-green-500 text-sm">↑ 1.02</span></p>
                    <p className="text-gray-500 text-sm">compared to last week</p>
                    <div className="mt-4 space-y-1">
                        <p className="text-pri text-sm">● Successful Deals: 987</p>
                        <p className="text-yellow-600 text-sm">● Pending Deals: 1,073</p>
                        <p className="text-red-500 text-sm">● Rejected Deals: 1,674</p>
                        <p className="text-green-500 text-sm">● Upcoming Deals: 921</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
