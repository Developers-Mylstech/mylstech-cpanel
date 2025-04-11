// import React, { useState, useEffect } from 'react';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';

// export default function ServiceForm({ passedData }) {
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         image: null,
//         feature: false,
//         categories: [],
//     });

//     const categoryOptions = ['Other Service', 'Featured Service', 'Software Service'];

//     // Set passed data on mount or update
//     useEffect(() => {
//         if (passedData) {
//             setFormData({
//                 title: passedData.title || '',
//                 description: passedData.description || '',
//                 image: passedData.image || null,
//                 feature: passedData.feature || false,
//                 categories: passedData.categories || [],
//             });
//         }
//     }, [passedData]);

//     const handleFileUpload = (e) => {
//         setFormData({ ...formData, image: e.target.files[0] });
//     };

//     const handleSubmit = () => {
//         console.log('Submitted Form:', formData);
//     };

//     return (
//         <div className="border-gray-300 pb-6 px-4 mx-auto space-y-4">
//             <h2 className="text-xl font-semibold mb-2">Add New Service</h2>

//             {/* Upload Image */}
//             <div>
//                 <label className="block mb-1 font-medium">Upload Image</label>
//                 <input type="file" onChange={handleFileUpload} />
//             </div>

//             {/* Title */}
//             <div>
//                 <InputText
//                     className="w-full border-b rounded-none p-3 focus:outline-none focus:ring-0"
//                     placeholder="Enter Title here...."
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 />
//             </div>

           
//             <div>
//                 <InputTextarea
//                     className="w-full border-b rounded-none p-3 focus:outline-none focus:ring-0"
//                     placeholder="Enter Description here...."
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 />
//             </div>

            
//             <div className="flex items-center space-x-2">
//                 <InputTextarea
//                     className="w-full border-b rounded-none p-3 focus:outline-none focus:ring-0"
//                     placeholder='Enter Features here.... (Optinal)'
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, feature: e.checked })} />
//             </div>

//             {/* Categories */}
//             <div>
//                 <label className="block mb-1 font-medium">Categories</label>
//                 <div className="flex items-center gap-4 flex-wrap">
//                     {categoryOptions.map((cat, idx) => (
//                         <div key={idx} className="flex items-center gap-2">
//                             <input
//                                 type="checkbox"
//                                 id={`cat${idx}`}
//                                 value={cat}
//                                 checked={formData.categories.includes(cat)}
//                                 onChange={(e) => {
//                                     const { value, checked } = e.target;
//                                     let updatedCategories = [...formData.categories];

//                                     if (checked) {
//                                         updatedCategories.push(value);
//                                     } else {
//                                         updatedCategories = updatedCategories.filter((c) => c !== value);
//                                     }

//                                     setFormData({ ...formData, categories: updatedCategories });
//                                 }}
//                             />
//                             <label htmlFor={`cat${idx}`}>{cat}</label>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end items-center">
//                 <Button label="Submit" icon="pi pi-save" className="bg-pri px-4 py-1 text-white" onClick={handleSubmit} />
//             </div>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

export default function ServiceForm({ passedData }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        images: [],           // store files
        imagePreviews: [],    // store preview URLs
        feature: false,
        categories: [],
    });

    const categoryOptions = ['Other Service', 'Featured Service', 'Software Service'];

    useEffect(() => {
        if (passedData) {
            setFormData({
                title: passedData.title || '',
                description: passedData.description || '',
                images: passedData.images || [],
                imagePreviews: passedData.images
                    ? passedData.images.map((img) => URL.createObjectURL(img))
                    : [],
                feature: passedData.feature || false,
                categories: passedData.categories || [],
            });
        }
    }, [passedData]);

    const handleFileUpload = (event) => {
        const files = event.files || [];
        const filePreviews = files.map((file) => URL.createObjectURL(file));

        setFormData((prev) => ({
            ...prev,
            images: files,
            imagePreviews: filePreviews,
        }));
    };

    const handleSubmit = () => {
        console.log('Submitted Form:', formData);
        // Submit formData.images to backend using FormData if needed
    };

    return (
        <div className="border-gray-300 pb-6 px-4 mx-auto space-y-4">
            <h2 className="text-xl font-semibold mb-2">Add New Service</h2>

            {/* Upload Image */}
            <div>
                <label className="block mb-1 font-medium">Upload Images</label>
                <FileUpload
                    name="images"
                    accept="image/*"
                    customUpload
                    uploadHandler={handleFileUpload}
                    auto
                    mode="advanced"
                    chooseLabel="Choose Images"
                    emptyTemplate={<p className="m-0">Drag and drop images here</p>}
                    multiple
                />
                <div className="flex flex-wrap gap-3 mt-3">
                    {formData.imagePreviews.map((preview, idx) => (
                        <img
                            key={idx}
                            src={preview}
                            alt={`Preview ${idx}`}
                            className="w-24 h-24 object-cover border rounded"
                        />
                    ))}
                </div>
            </div>

            {/* Title */}
            <div>
                <InputText
                    className="w-full border-b rounded-none p-3 focus:outline-none focus:ring-0"
                    placeholder="Enter Title here...."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </div>

            {/* Description */}
            <div>
                <InputTextarea
                    className="w-full border-b rounded-none p-3 focus:outline-none focus:ring-0"
                    placeholder="Enter Description here...."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>

            {/* Feature Checkbox */}
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="feature"
                    checked={formData.feature}
                    onChange={(e) => setFormData({ ...formData, feature: e.target.checked })}
                />
                <label htmlFor="feature">Mark as Featured</label>
            </div>

            {/* Categories */}
            <div>
                <label className="block mb-1 font-medium">Categories</label>
                <div className="flex items-center gap-4 flex-wrap">
                    {categoryOptions.map((cat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={`cat${idx}`}
                                value={cat}
                                checked={formData.categories.includes(cat)}
                                onChange={(e) => {
                                    const { value, checked } = e.target;
                                    const updatedCategories = checked
                                        ? [...formData.categories, value]
                                        : formData.categories.filter((c) => c !== value);

                                    setFormData({ ...formData, categories: updatedCategories });
                                }}
                            />
                            <label htmlFor={`cat${idx}`}>{cat}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end items-center">
                <Button
                    label="Submit"
                    icon="pi pi-save"
                    className="bg-pri px-4 py-1 text-white"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
}
