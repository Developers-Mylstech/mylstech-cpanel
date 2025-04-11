


import React, { useRef } from 'react';
import { MdModeEdit } from "react-icons/md";
import { RxUpdate } from 'react-icons/rx';


export default function About() {
  // Refs for image uploads
  const imageInputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleImageClick = (index) => {
    imageInputs[index].current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File:", file);
      // handle preview/upload logic here
    }
  };

  return (
    <div className=" bg-white">
      <div className="flex justify-end items-center my-3">
            
            <button className="flex gap-2 items-center bg-pri uppercase text-xs text-white px-5 py-2 rounded-md  font-medium">
            <RxUpdate /> Update
            </button>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Section 1 */}
        <div>
          <h2 className="font-semibold text-base text-gray-700 mb-4 uppercase">Section - 1</h2>

          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="text-sm font-semibold block mb-1 text-gray-600">Title</label>
              <input
                type="text"
                value="Your Vision Our Expertise Your Success Get Noticed Generate Leads Dominate"
                className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri"
                readOnly
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-semibold block mb-1 text-gray-600">Description</label>
              <textarea
                value="At MYLS TECH, we welcome you to a world of innovation, expertise, and tailored solutions. We are dedicated to providing exceptional IT solutions that empower businesses of all sizes to achieve their goals and grow their presence online."
                className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri"
                rows={5}
                readOnly
              />
            </div>

            {/* Achievements */}
            <div>
              <p className={`text-sm font-semibold block mb-4 text-gray-600`}>Achievements</p>

              <div>
                <label className='text-xs font-semibold block mb-1 text-gray-500'>Completed Projects</label>
                <input type="text" value="1k+" className="w-full px-4 py-2 mb-3 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri" readOnly />
              </div>
              <div>
                <label className='text-xs font-semibold block mb-1 text-gray-500'>Happy Customers</label>
                <input type="text" value="3k+" className="w-full px-4 py-2 mb-3 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri" readOnly />
              </div>
              <div>
                <label className='text-xs font-semibold block mb-1 text-gray-500'>Years of Mastery</label>
                <input type="text" value="3+" className="w-full px-4 py-2 mb-3 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri" readOnly />
              </div>
              <div>
                <label className='text-xs font-semibold block mb-1 text-gray-500'>Workloads/Hour</label>
                <input type="text" value="20" className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri" readOnly />
              </div>
            </div>

            {/* Images with hidden file input */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full">
              {[0, 1, 2].map((index) => (
                <div className="relative  h-40" key={index}>
                  <img
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60"
                        : index === 1
                        ? "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=600&auto=format&fit=crop&q=60"
                        : "https://plus.unsplash.com/premium_photo-1661636219766-e20ffa03c056?w=600&auto=format&fit=crop&q=60"
                    }
                    alt={`Section 1 Img ${index + 1}`}
                    className="h-full w-full object-cover rounded-md border "
                  />
                  <button
                    className="absolute top-1 right-1 bg-[#2F80ED] border border-gray-300 rounded-full p-1 shadow-md "
                    title="Update Image"
                    onClick={() => handleImageClick(index)}
                  >
                    <MdModeEdit className='text-white text-xs' />
                  </button>
                    <div className='absolute bottom-2 left-2 p-1 bg-black/70 rounded-md text-[10px] text-white'>
                    {
                      index==0?"Main Image":index==1?"Second Image":"Third Image"
                    }
                    </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={imageInputs[index]}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-sm text-gray-700 uppercase">Section - 2</h2>
           
          </div>

          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="text-xs font-semibold block mb-1 text-gray-600">Title</label>
              <input
                type="text"
                value="Providing IT Solutions for Diverse Business Verticals."
                className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri"
                readOnly
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-xs font-semibold block mb-1 text-gray-600">Description</label>
              <textarea
                value="MYLS TECH excels in providing customized IT solutions tailored to diverse business verticals. From innovative web development to user-friendly UI/UX designs, we are committed to enhancing your business's online presence."
                className="w-full px-4 text-gray-500 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pri"
                rows="5"
                readOnly
              ></textarea>
            </div>

            {/* Image with upload */}
            
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full'>
           <div className="relative  h-40">
              <img
                src="https://mylstech.com/assets/Subtract-Beni9ABL.png"
                alt="Section 2 Img"
                className="h-full w-full object-cover rounded-md"
              />
              <button
                className="absolute top-1 right-1 bg-[#2F80ED] border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100"
                title="Update Image"
                onClick={() => handleImageClick(3)}
              >
                <MdModeEdit className='text-white'  />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={imageInputs[3]}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
