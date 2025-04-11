import React from 'react'
import { RxUpdate } from 'react-icons/rx'

export default function Contact() {
    return (
        <section className="bg-white border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Update Contact Details</h2>
            <form className="grid grid-cols-2 gap-3">
                <div>
                    <input type="text" className="mt-1 block w-full border-b  p-2" placeholder="Enter phone number" />
                </div>
                <div>
                    <input type="email" className="mt-1 block w-full border-b  p-2" placeholder="Enter email" />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <textarea className="mt-1 block w-full border-b p-2" placeholder="Enter address"></textarea>
                </div>
                <div className='flex justify-end items-end h-full col-span-2 md:col-span-1'>

                    <button className="bg-pri justify-center w-full md:w-fit text-white px-4 py-2 h-fit flex items-center gap-3 rounded-md hover:bg-purple-700">
                        <RxUpdate /> Update
                    </button>                 </div>
            </form>
        </section>
    )
}
