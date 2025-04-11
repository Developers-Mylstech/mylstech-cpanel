import React from 'react';
import { RxUpdate } from 'react-icons/rx';

export default function Additional() {
  return (
    <div className="my-5 space-y-10">

      <section className="bg-white border p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Update Home Page Banner</h2>
        <form className="space-y-4">
          <div>
            <input type="text" className="mt-1 block w-full border-b rounded-md p-2" placeholder="Enter banner title" />
          </div>
          <div>
            <input type="text" className="mt-1 block w-full border-b rounded-md p-2" placeholder="Enter banner subtitle" />
          </div>
          <div className='flex-col md:flex-row flex gap-4 justify-between'>
            <input type="file" className="mt-1" />
            <button className="bg-pri  text-white px-4 py-2 rounded-lg w-full md:w-fit">Update Banner</button>
          </div>
        </form>
      </section>

      <section className="bg-white border p-6 rounded-lg">
        <h2 className="text-xl font-semibold">Add Client Logos</h2>

        <div className='flex-col md:flex-row flex gap-4 justify-between my-5'>
            <input type="file" className="" />
            <button className="bg-pri w-full md:w-fit text-white px-4 py-2 h-fit flex justify-center items-center gap-3 rounded-md hover:bg-purple-700"> <RxUpdate /> Add Logos</button>
          </div>

      </section>
      <section className="bg-white border p-6 rounded-lg">
        <h2 className="text-xl font-semibold">Update Mylstech Logo</h2>

        <div className='flex-col md:flex-row flex gap-4 justify-between my-5'>
            <input type="file" className="" />
            <button className="bg-pri w-full md:w-fit text-white px-4 py-2 h-fit flex justify-center items-center gap-3 rounded-md hover:bg-purple-700"> <RxUpdate /> Update Logos</button>
          </div>

      </section>

      <section className="bg-white border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add Contact Details</h2>
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

            <button className="bg-pri w-full md:w-fit text-white px-4 py-2 h-fit flex items-center gap-3 rounded-md hover:bg-purple-700"> <RxUpdate /> Update Contact</button>
          </div>
        </form>
      </section>
    </div>
  );
}
