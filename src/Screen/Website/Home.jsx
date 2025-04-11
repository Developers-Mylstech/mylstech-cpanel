import React from 'react';
import { RxUpdate } from 'react-icons/rx';
import { FaStar, FaRegStar, FaTrash } from 'react-icons/fa';

export default function Home() {
    const testimonials = [
        { id: 1, name: "John Doe", comment: "Great service!", rating: 5 },
        { id: 2, name: "Jane Smith", comment: "Very satisfied.", rating: 4 },
        { id: 3, name: "Alex Ray", comment: "Could be better.", rating: 3 },
    ];

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) =>
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
            </div>
        );
    };

    return (
        <div className="my-5 space-y-10">
            {/* Banner Section */}
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
                        <button className="bg-pri justify-center w-full md:w-fit text-white px-4 py-2 h-fit flex items-center gap-3 rounded-md hover:bg-purple-700">
                            <RxUpdate /> Update Banner
                        </button>
                    </div>
                </form>
            </section>

            {/* Client Logos Section */}
            <section className="bg-white border p-6 rounded-lg">
                <h2 className="text-xl font-semibold">Update Client Logos</h2>
                <div className='flex-col md:flex-row flex gap-4 justify-between my-5'>
                    <input type="file" className="" />
                    <button className="bg-pri justify-center w-full md:w-fit text-white px-4 py-2 h-fit flex items-center gap-3 rounded-md hover:bg-purple-700">
            <RxUpdate /> Update Logs
          </button>       
                </div>
            </section>

            {/* Testimonial Listing Section */}
            <section className="bg-white border p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                        <thead>
                            <tr className="bg-gray-100 text-left uppercase text-xs ">
                                <th className="px-4 py-2 border font-medium">User Name</th>
                                <th className="px-4 py-2 border font-medium">Comment</th>
                                <th className="px-4 py-2 border font-medium">Rating</th>
                                <th className="px-4 py-2 border font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map((item) => (
                                <tr key={item.id} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{item.name}</td>
                                    <td className="px-4 py-2 border">{item.comment}</td>
                                    <td className="px-4 py-2 border">{renderStars(item.rating)}</td>
                                    <td className="px-4 py-2 border">
                                        <button className="text-red-500 hover:text-red-700">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
