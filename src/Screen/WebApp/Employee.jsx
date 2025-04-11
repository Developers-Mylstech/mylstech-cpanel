




import { MultiSelect } from 'primereact/multiselect';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';

const accessOptions = [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Employee Management', value: 'employee' },
    { label: 'Customer Management', value: 'customer' },
    { label: 'Settings', value: 'settings' },
    { label: 'Reports', value: 'reports' },
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
    { label: 'Plans', value: 'plans' },
    { label: 'Services', value: 'services' },
];


const employeeDataInitial = [
    {
        empId: 'EMP101',
        name: 'Alice Johnson',
        profilePic: 'https://i.pravatar.cc/40?img=3',
        contact: '+1 123 456 7890',
        designation: 'HR Manager',
        accessRight: ['dashboard', 'employee', 'settings'],
    },
    {
        empId: 'EMP102',
        name: 'Robert Langdon',
        profilePic: 'https://i.pravatar.cc/40?img=4',
        contact: '+1 456 789 0123',
        designation: 'Developer',
        accessRight: ['dashboard', 'reports'],
    },
];

export default function Employee() {
    const [employees, setEmployees] = useState(employeeDataInitial);

    const handleAccessChange = (e, empId) => {
        const updated = employees.map(emp => {
            if (emp.empId === empId) {
                return { ...emp, accessRight: e.value };
            }
            return emp;
        });
        setEmployees(updated);
    };
    return (
        <div className=" ">
            <h2 className="text-xl font-semibold mb-4">Employee List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-[800px] w-full bg-white rounded-t-lg shadow-md  overflow-hidden text-sm">
                    <thead className="bg-gray text-gray-400  text-left uppercase text-xs">
                    <tr>
                            <th className="py-3 px-4 font-normal">Emp ID</th>
                            <th className="py-3 px-4 font-normal">Profile</th>
                            <th className="py-3 px-4 font-normal">Name</th>
                            <th className="py-3 px-4 font-normal">Contact</th>
                            <th className="py-3 px-4 font-normal">Access Rights</th>
                            <th className="py-3 px-4 font-normal">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {employees?.map((emp) => (

                            <tr key={emp.empId} className="border-b">
                                <td className="py-3 px-4 uppercase text-[10px] font-bold">{emp.empId}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={emp.profilePic}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4 flex flex-col font-bold">
                                    {emp.name}
                                    <span className='text-xs font-normal text-gray-400'>{emp.designation}</span>
                                </td>
                                <td className="py-3 px-4">{emp.contact}</td>
                                <td className="py-3 px-4">
                                    <MultiSelect
                                        value={emp.accessRight}
                                        options={accessOptions}
                                        onChange={(e) => handleAccessChange(e, emp.empId)}
                                        optionGroupTemplate={() => "h"}
                                        placeholder="Select"
                                        className="w-64 border rounded-lg "
                                    />

                                </td>
                                <td className="py-3 px-4 flex justify-center items-center">
                                    <span className='border flex w-full rounded-lg overflow-hidden'>
                                        <button className="text-sm w-1/2 px-3 py-2 flex justify-center items-center bg-pri text-white">
                                            <FiEdit2 />
                                        </button>
                                        <button className="text-sm w-1/2 px-3 py-2 flex justify-center items-center bg-white text-red-500">
                                            <FaTrash />
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



// import { MultiSelect } from 'primereact/multiselect';
// import React, { useState } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import { FiEdit2 } from 'react-icons/fi';

// const accessOptions = [
//     { label: 'Dashboard', value: 'dashboard' },
//     { label: 'Employee Management', value: 'employee' },
//     { label: 'Customer Management', value: 'customer' },
//     { label: 'Settings', value: 'settings' },
//     { label: 'Reports', value: 'reports' },
//     { label: 'Home', value: 'home' },
//     { label: 'About', value: 'about' },
//     { label: 'Contact', value: 'contact' },
//     { label: 'Plans', value: 'plans' },
//     { label: 'Services', value: 'services' },
// ];


// const employeeDataInitial = [
//     {
//         empId: 'EMP101',
//         name: 'Alice Johnson',
//         profilePic: 'https://i.pravatar.cc/40?img=3',
//         contact: '+1 123 456 7890',
//         designation: 'HR Manager',
//         accessRight: ['dashboard', 'employee', 'settings'],
//     },
//     {
//         empId: 'EMP102',
//         name: 'Robert Langdon',
//         profilePic: 'https://i.pravatar.cc/40?img=4',
//         contact: '+1 456 789 0123',
//         designation: 'Developer',
//         accessRight: ['dashboard', 'reports'],
//     },
// ];

// export default function Employee() {

//     const [employees, setEmployees] = useState(employeeDataInitial);

//     const handleAccessChange = (e, empId) => {
//         const updated = employees.map(emp => {
//             if (emp.empId === empId) {
//                 return { ...emp, accessRight: e.value };
//             }
//             return emp;
//         });
//         setEmployees(updated);
//     };

//     return (
//         <div className="">
//             <h2 className="text-xl font-semibold mb-4">Customer List</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-[800px] w-full bg-white rounded-t-lg shadow-md  overflow-hidden text-sm">
//                     <thead className="bg-gray text-gray-400  text-left uppercase text-xs">
//                     <tr>
//                             <th className="py-3 px-4 font-normal">Emp ID</th>
//                             <th className="py-3 px-4 font-normal">Profile</th>
//                             <th className="py-3 px-4 font-normal">Name</th>
//                             <th className="py-3 px-4 font-normal">Contact</th>
//                             <th className="py-3 px-4 font-normal">Access Rights</th>
//                             <th className="py-3 px-4 font-normal">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {employees.map((customer) => (
//                             <tr key={customer.id} className="border-b">
//                                 <td className="py-3 px-4 uppercase text-[10px] font-bold">{customer.id}</td>
//                                 <td className="py-3 px-4">
//                                     <img
//                                         src={customer.profilePic}
//                                         alt="Profile"
//                                         className="w-10 h-10 rounded-full object-cover"
//                                     />
//                                 </td>
//                                 <td className="py-3 px-4">{customer.name}</td>
//                                 <td className="py-3 px-4">{customer.contact}</td>
//                                 <td className="py-3 px-4 uppercase text-[10px] text-white font-bold"><span className={` py-1 ${customer.Subscriber === 'true' ? "bg-green-700" : "bg-red-700"} rounded-lg w-[70%] flex items-center justify-center`}>{customer.Subscriber}</span></td>
//                                 <td className="py-3 px-4">{customer.joinDate}</td>
//                                 {/* <td className="py-3 px-4">
//                                     <MultiSelect
//                                         value={customer.accessRight}
//                                         options={accessOptions}
//                                         onChange={(e) => handleAccessChange(e, emp.empId)}
//                                         optionGroupTemplate={() => "h"}
//                                         placeholder="Select"
//                                         className="w-52 border rounded-lg"
//                                     />

//                                 </td> */}
//                                 <td className="py-3 px-4 flex ">
//                                     <span className='border flex w-full rounded-lg overflow-hidden'>
//                                         <button className="text-sm w-1/2 px-3 py-2 h-full flex justify-center items-center  bg-pri text-white "> <FiEdit2 /></button>
//                                         <button className="text-sm w-1/2 px-3 py-2 h-full flex justify-center items-center  bg-white text-red-500 "><FaTrash /></button>
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


