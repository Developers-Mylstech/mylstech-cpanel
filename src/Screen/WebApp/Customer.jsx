import React from 'react';

const dummyData = [
  {
    id: 'CUST001',
    name: 'John Doe',
    profilePic: 'https://i.pravatar.cc/40?img=1',
    contact: '+1 234 567 890',
    joinDate: '2024-01-15',
    Subscriber : "true"
},
{
    id: 'CUST002',
    name: 'Jane Smith',
    profilePic: 'https://i.pravatar.cc/40?img=2',
    contact: '+1 987 654 321',
    joinDate: '2024-02-10',
    Subscriber : "false"
  },
];

export default function Customer() {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Customer List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full bg-white rounded-t-lg shadow-md  overflow-hidden">
          <thead className="bg-gray-100 text-gray-400  text-left uppercase text-xs">
            <tr>
              <th className="py-3 px-4 font-normal ">ID</th>
              <th className="py-3 px-4 font-medium ">Profile</th>
              <th className="py-3 px-4 font-normal ">Name</th>
              <th className="py-3 px-4 font-normal ">Contact</th>
              <th className="py-3 px-4 font-normal ">Subscriber</th>
              <th className="py-3 px-4 font-normal ">Join Date</th>
              <th className="py-3 px-4 font-normal ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((customer) => (
              <tr key={customer.id} className="border-b">
                    <td className="py-3 px-4 uppercase text-[10px] font-bold">{customer.id}</td>
                <td className="py-3 px-4">
                  <img
                    src={customer.profilePic}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4">{customer.name}</td>
                <td className="py-3 px-4">{customer.contact}</td>
                <td className="py-3 px-4 uppercase text-[10px] text-white font-bold"><span className={` py-1 ${customer.Subscriber==='true'?"bg-green-700":"bg-red-700"} rounded-lg w-[70%] flex items-center justify-center`}>{customer.Subscriber}</span></td>
                <td className="py-3 px-4">{customer.joinDate}</td>
                <td className="py-3 px-4">
                  <button className="text-sm text-blue-600 hover:underline mr-2">View</button>
                  <button className="text-sm text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
