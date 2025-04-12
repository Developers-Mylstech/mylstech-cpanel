





import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import EmployeeUpadateForm from '../../Components/Forms/EmployeeUpadateForm';

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
        accessRight: ['dashboard', 'reports',],
    },
];

export default function Employee() {
    const [employees, setEmployees] = useState(employeeDataInitial);
    const [dialogVisible, setDialogVisible] = useState(false);

   
    return (
        <>

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
                                    <td className="py-3 px-4 align-middle">
                                        <div className="flex flex-wrap gap-2">
                                            {emp.accessRight.slice(0, 2).map((item, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-200 font-semibold px-3 py-1 text-[10px] rounded-lg uppercase"
                                                >
                                                    {item}
                                                </span>
                                            ))}

                                            {emp.accessRight.length > 2 && (
                                                <span className="">...</span>
                                            )}
                                        </div>
                                    </td>


                                    <td className="py-3 px-4 flex justify-center items-center">
                                        <span className='border flex w-full rounded-lg overflow-hidden'>
                                            <button onClick={()=>setDialogVisible(true)} className="text-sm w-1/2 px-3 py-2 h-full flex justify-center items-center  text-pri border-r ">
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
            <Dialog draggable={false}  blockScroll className='w-full md:w-1/2 ' visible={dialogVisible} onHide={()=>setDialogVisible(!dialogVisible)}>
<EmployeeUpadateForm/>
            </Dialog>
        </>
    );
}

