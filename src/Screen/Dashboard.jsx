import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate()

    return (
        <>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 ">

                <div class="col-span-1 border p-5 rounded-xl">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-sm text-gray-500">Total Customers</p>
                            <p class="text-2xl font-bold">2,890</p>
                        </div>
                        <svg class="w-20 h-10" viewBox="0 0 100 30"><polyline fill="none" stroke="green" stroke-width="2" points="0,20 20,10 40,15 60,5 80,15 100,10" /></svg>
                    </div>
                    <p class="text-green-500 text-sm mt-2">+40% this month</p>
                    <button onClick={() => navigate('customer')} class="text-pri text-sm">View All →</button>
                </div>


                <div class="col-span-1 border p-5 rounded-xl">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-sm text-gray-500">Total Employees</p>
                            <p class="text-2xl font-bold">28</p>
                            <button onClick={() => navigate('employee   ')} class="text-pri text-sm">View All →</button>
                        </div>

                    </div>
                </div>


                <div class="col-span-1 border p-5 rounded-xl">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-sm text-gray-500">Total Services</p>
                            <p class="text-2xl font-bold">24</p>
                        </div>
                        <svg class="w-20 h-10" viewBox="0 0 100 30">
                            <polyline fill="none" stroke="orange" stroke-width="2" points="0,10 20,20 40,15 60,25 80,20 100,15" />
                        </svg>
                    </div>
                    <p class="text-green-500 text-sm mt-2">+2 this month</p>
                    <button onClick={() => navigate('services   ')} class="text-pri text-sm">View All →</button>
                </div>

                <div class="col-span-1 border p-5 rounded-xl">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-sm text-gray-500">Subscribed Customers</p>
                            <p class="text-2xl font-bold">3,214</p>
                        </div>
                        <svg class="w-20 h-10" viewBox="0 0 100 30">
                            <polyline fill="none" stroke="purple" stroke-width="2" points="0,15 20,20 40,12 60,22 80,16 100,18" />
                        </svg>
                    </div>
                    <p class="text-green-500 text-sm mt-2">+18% this month</p>
                </div>



                <div class="col-span-1 border p-5 rounded-xl">
                    <h3 class="font-semibold mb-4">Contact Form Submissions</h3>
                    <ul class="space-y-3 text-sm">
                        <li class="flex justify-between items-center">
                            <div>
                                <p>Michael Jordan</p>
                                <span className='text-[10px] text-gray-500'>MichaelJordan@gmail.com</span>
                            </div>
                            <span>Apr 01</span>
                        </li>
                        <li class="flex justify-between items-center">
                            <div>
                                <p>Emigo Kiaren</p>
                                <span className='text-[10px] text-gray-500'>MichaelJordan@gmail.com</span>
                            </div>
                            <span>Apr 04</span>
                        </li>
                        <li class="flex justify-between items-center">
                            <div>
                                <p>Randy Origoan</p>
                                <span className='text-[10px] text-gray-500'>MichaelJordan@gmail.com</span>
                            </div>
                            <span>Apr 10</span>
                        </li>
                        <li class="flex justify-between items-center">
                            <div>
                                <p>George Pieterson</p>
                                <span className='text-[10px] text-gray-500'>MichaelJordan@gmail.com</span>
                            </div>
                            <span>Apr 11</span>
                        </li>

                    </ul>
                </div>


                <div class="col-span-1 border  p-5 rounded-xl flex flex-col justify-between">
                    <h3 class="font-semibold mb-4">Profit Earned</h3>
                    <div className='space-y-2'>

                        <div class="flex justify-between items-end">
                            <div class="w-4 h-10 bg-pri"></div>
                            <div class="w-4 h-16 bg-pri"></div>
                            <div class="w-4 h-20 bg-pri"></div>
                            <div class="w-4 h-12 bg-pri"></div>
                            <div class="w-4 h-20 bg-pri"></div>
                            <div class="w-4 h-16 bg-pri"></div>
                            <div class="w-4 h-14 bg-pri"></div>
                        </div>
                        <div class="flex justify-between  text-xs text-gray-500">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 border  p-6 rounded-xl">
                    <h3 class="font-semibold mb-2">Revenue Analytics</h3>
                    <p class="text-sm text-gray-500 mb-4">Revenue Analytics with sales & profit (USD)</p>
                    <div class="w-full h-40 bg-gray-100 rounded-md"></div>
                </div>

                <div class="col-span-1 border  p-5 rounded-xl">
                    <h3 class="font-semibold">Deals Status</h3>
                    <p class="text-2xl font-bold mt-2">4,289 <span class="text-green-500 text-sm">↑ 1.02</span></p>
                    <p class="text-gray-500 text-sm">compared to last week</p>
                    <div class="mt-4">
                        <p class="text-pri text-sm">● Successful Deals: 987</p>
                        <p class="text-yellow-600 text-sm">● Pending Deals: 1,073</p>
                        <p class="text-red-500 text-sm">● Rejected Deals: 1,674</p>
                        <p class="text-green-500 text-sm">● Upcoming Deals: 921</p>
                    </div>
                </div>
            </div>

        </>
    )
}
