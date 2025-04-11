

// import React, { useState } from 'react';
// import { Dialog } from 'primereact/dialog';
// import { FiEdit2 } from 'react-icons/fi';
// import { IoIosTrash } from 'react-icons/io';
// import { InputSwitch } from 'primereact/inputswitch';

// const initialFaqs = [
//     { question: "What services does Mylstech offer?", answer: "Mylstech provides ZATCA compliance, software dev, UI/UX design, etc.", image: "https://mylstech.com/assets/services3d-iyYuJ_fd.png" },
//     { question: "What is ZATCA compliance?", answer: "Ensures financial transparency and regulatory adherence.", image: "https://mylstech.com/assets/zatca3d-C896lXwb.png" },
//     { question: "How does MYLS TECH help with ZATCA?", answer: "We guide businesses through ZATCA compliance steps.", image: "https://mylstech.com/assets/shield3d-0Q1A8rsj.png" },
//     { question: "What makes MYLS TECH's Software Development unique?", answer: "Tailored, innovative, and user-centric solutions.", image: "https://mylstech.com/assets/development3d-D-ze70aE.png" },
//     { question: "How does MYLS TECH approach Software Maintenance?", answer: "We prevent issues before they arise.", image: "https://mylstech.com/assets/maintanance3d-C5h5jm-M.png" },
//     { question: "What makes MYLS TECH's UI/UX Design unique?", answer: "Creative and functional user-friendly interfaces.", image: "https://mylstech.com/assets/uiux3d-D0BUSZ2O.png" },
//     { question: "How does MYLS TECH provide Customized Solutions?", answer: "We align solutions with your business needs.", image: "https://mylstech.com/assets/solution3d-CN1Jk132.png" },
//     { question: "How can I contact MYLS TECH?", answer: "Visit our website or email contact@mylstech.com.", image: "https://mylstech.com/assets/phone3d-DOVENLPC.png" },
//   ];

// export default function FaqTable() {
//   const [faqs, setFaqs] = useState(initialFaqs);
//   const [dialogVisible, setDialogVisible] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [formData, setFormData] = useState({ question: '', answer: '', image: '' });
//   const [previewImage, setPreviewImage] = useState(null);
//   const [holdStates, setHoldStates] = useState({});

//   const handleDialogOpen = (item, index) => {
//     setFormData({ ...item });
//     setCurrentIndex(index);
//     setPreviewImage(item.image);
//     setDialogVisible(true);
//   };

//   const handleDialogClose = () => {
//     setDialogVisible(false);
//     setFormData({ question: '', answer: '', image: '' });
//     setPreviewImage(null);
//   };

//   const handleDelete = (index) => {
//     const updated = [...faqs];
//     updated.splice(index, 1);
//     setFaqs(updated);
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, image: file });
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSave = () => {
//     const updated = [...faqs];
//     const updatedItem = {
//       ...formData,
//       image: previewImage,
//     };
//     updated[currentIndex] = updatedItem;
//     setFaqs(updated);
//     handleDialogClose();
//   };

//   const toggleHold = (title) => {
//     setHoldStates(prev => ({ ...prev, [title]: !prev[title] }));
//   };

//   return (
//     <div className="overflow-x-auto p-4">
//         <h2 className='md:text-2xl text-xl font-semibold my-4'>FAQs List</h2>
//       <table className="min-w-[800px] w-full bg-white rounded-t-lg shadow-md overflow-hidden">
//         <thead className="bg-gray-100 text-gray-400 text-left uppercase text-xs">
//           <tr>
//             <th className="py-3 px-4 font-normal">Image</th>
//             <th className="py-3 px-4 font-medium">Question</th>
//             <th className="py-3 px-4 font-normal">Answer</th>
   
//             <th className="py-3 px-4 font-normal">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {faqs.map((item, idx) => (
//             <tr key={idx} className="border-b hover:bg-gray-50">
//               <td className="py-3 px-4">
//                 <img
//                   src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)}
//                   alt=""
//                   className="h-16 w-24 object-cover rounded"
//                 />
//               </td>
//               <td className="py-3 px-4 font-semibold text-sm text-gray-800">
//                 {item.question}
//               </td>
//               <td className="py-3 px-4 text-sm text-gray-600">
//                 {item.answer}
//               </td>
              
//               <td className="py-3 px-4 flex gap-2">
//                 <button
//                   className="text-lg text-white bg-blue-900 py-2 px-4 rounded-lg"
//                   onClick={() => handleDialogOpen(item, idx)}
//                 >
//                   <FiEdit2 />
//                 </button>
//                 <button
//                   className="text-lg text-white bg-blue-900 py-2 px-4 rounded-lg"
//                   onClick={() => handleDelete(idx)}
//                 >
//                   <IoIosTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Dialog */}
//       <Dialog
//         header="Edit FAQ"
//         visible={dialogVisible}
//         style={{ width: '30rem' }}
//         onHide={handleDialogClose}
//         footer={
//           <div className="flex justify-end gap-2">
//             <button onClick={handleDialogClose} className="bg-gray-300 px-4 py-2 rounded">
//               Cancel
//             </button>
//             <button onClick={handleSave} className="bg-blue-900 text-white px-4 py-2 rounded">
//               Save
//             </button>
//           </div>
//         }
//       >
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="question"
//             value={formData.question}
//             onChange={(e) => setFormData({ ...formData, question: e.target.value })}
//             placeholder="Question"
//             className="border p-2 rounded w-full"
//           />
//           <textarea
//             name="answer"
//             rows={3}
//             value={formData.answer}
//             onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
//             placeholder="Answer"
//             className="border p-2 rounded w-full"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileUpload}
//             className="w-full"
//           />
//           {previewImage && (
//             <img src={previewImage} alt="Preview" className="w-32 h-20 object-cover rounded mt-2" />
//           )}
//         </div>
//       </Dialog>
//     </div>
//   );
// }





import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosTrash } from 'react-icons/io';

const initialFaqs = [
  { question: "What services does Mylstech offer?", answer: "Mylstech provides ZATCA compliance, software dev, UI/UX design, etc.", image: "https://mylstech.com/assets/services3d-iyYuJ_fd.png" },
  { question: "What is ZATCA compliance?", answer: "Ensures financial transparency and regulatory adherence.", image: "https://mylstech.com/assets/zatca3d-C896lXwb.png" },
  { question: "How does MYLS TECH help with ZATCA?", answer: "We guide businesses through ZATCA compliance steps.", image: "https://mylstech.com/assets/shield3d-0Q1A8rsj.png" },
  { question: "What makes MYLS TECH's Software Development unique?", answer: "Tailored, innovative, and user-centric solutions.", image: "https://mylstech.com/assets/development3d-D-ze70aE.png" },
  { question: "How does MYLS TECH approach Software Maintenance?", answer: "We prevent issues before they arise.", image: "https://mylstech.com/assets/maintanance3d-C5h5jm-M.png" },
  { question: "What makes MYLS TECH's UI/UX Design unique?", answer: "Creative and functional user-friendly interfaces.", image: "https://mylstech.com/assets/uiux3d-D0BUSZ2O.png" },
  { question: "How does MYLS TECH provide Customized Solutions?", answer: "We align solutions with your business needs.", image: "https://mylstech.com/assets/solution3d-CN1Jk132.png" },
  { question: "How can I contact MYLS TECH?", answer: "Visit our website or email contact@mylstech.com.", image: "https://mylstech.com/assets/phone3d-DOVENLPC.png" },
];

export default function FaqTable() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null); // null for Add
  const [formData, setFormData] = useState({ question: '', answer: '', image: '' });
  const [previewImage, setPreviewImage] = useState(null);

  const openAddDialog = () => {
    setFormData({ question: '', answer: '', image: '' });
    setPreviewImage(null);
    setCurrentIndex(null);
    setDialogVisible(true);
  };

  const openEditDialog = (item, index) => {
    setFormData({ ...item });
    setPreviewImage(item.image);
    setCurrentIndex(index);
    setDialogVisible(true);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
    setFormData({ question: '', answer: '', image: '' });
    setPreviewImage(null);
    setCurrentIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...faqs];
    updated.splice(index, 1);
    setFaqs(updated);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedFaq = {
      question: formData.question,
      answer: formData.answer,
      image: previewImage,
    };

    const updatedFaqs = [...faqs];
    if (currentIndex === null) {
      updatedFaqs.push(updatedFaq);
    } else {
      updatedFaqs[currentIndex] = updatedFaq;
    }

    setFaqs(updatedFaqs);
    handleDialogClose();
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className='md:text-2xl text-xl font-semibold'>FAQs List</h2>
        <button
          onClick={openAddDialog}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add New
        </button>
      </div>

     <div className='overflow-x-auto'>
     <table className="min-w-[800px] w-full bg-white rounded-t-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100 text-gray-400 text-left uppercase text-xs">
          <tr>
            <th className="py-3 px-4 font-normal">Image</th>
            <th className="py-3 px-4 font-medium">Question</th>
            <th className="py-3 px-4 font-normal">Answer</th>
            <th className="py-3 px-4 font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                <img
                  src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)}
                  alt=""
                  className="h-16 w-24 object-cover rounded"
                />
              </td>
              <td className="py-3 px-4 font-semibold text-sm text-gray-800">{item.question}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{item.answer}</td>
              <td className="py-3 px-4 flex gap-2">
                <button
                  className="text-lg text-white bg-blue-900 py-2 px-4 rounded-lg"
                  onClick={() => openEditDialog(item, idx)}
                >
                  <FiEdit2 />
                </button>
                <button
                  className="text-lg text-white bg-blue-900 py-2 px-4 rounded-lg"
                  onClick={() => handleDelete(idx)}
                >
                  <IoIosTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>

      <Dialog
        header={currentIndex === null ? "Add FAQ" : "Edit FAQ"}
        visible={dialogVisible}
        style={{ width: '90%', maxWidth: '500px' }}
        onHide={handleDialogClose}
        draggable={false}
        resizable={false}
      >
        <div className="space-y-3">
          <div>
            <label className="block font-medium">Question</label>
            <input
              name="question"
              value={formData.question}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              type="text"
              placeholder="Enter question"
            />
          </div>

          <div>
            <label className="block font-medium">Answer</label>
            <textarea
              name="answer"
              value={formData.answer}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              rows="3"
              placeholder="Enter answer"
            />
          </div>

          <div>
            <label className="block font-medium">Image URL or Upload</label>
            <input
              name="image"
              value={typeof formData.image === 'string' ? formData.image : ''}
              onChange={(e) => {
                setFormData({ ...formData, image: e.target.value });
                setPreviewImage(e.target.value);
              }}
              className="w-full border px-3 py-2 rounded mb-2"
              type="text"
              placeholder="Paste image URL or upload below"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="mb-2"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="h-24 w-32 object-cover rounded border"
              />
            )}
          </div>

          <div className="flex justify-end space-x-3 mt-4">
            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={handleDialogClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-900 text-white px-4 py-2 rounded "
              onClick={handleSave}
            >
              {currentIndex === null ? "Add" : "Save"}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
