import React from 'react'

export default function Table() {
    const data = [
        {
            no: 1,
            name: 'Jamal',
            age: 19,
            place: 'Kozhikode',
            email: 'jamaljohndoe@example.com',
            contactNo: '7846383846'
        },
        {
            no: 2,
            name: 'Mahshooq',
            age: 23,
            place: 'Tirur',
            email: 'mahshooq@example.com',
            contactNo: '8797443390'
        },
        {
            no: 3,
            name: 'Jasim',
            age: 20,
            place: 'Vengad',
            email: 'jasim@example.com',
            contactNo: '9870567890'
        },
        {
            no: 4,
            name: 'Anshif',
            age: 21,
            place: 'Vengad',
            email: 'anshif@example.com',
            contactNo: '7987654321'
        },
        {
            no: 5,
            name: 'Ramshad',
            age: 22,
            place: 'Ponnani',
            email: 'ramshad@example.com',
            contactNo: '9934567890'
        },
        {
            no: 6,
            name: 'Sahal',
            age: 18,
            place: 'Mannarkkad',
            email: 'sahal@example.com',
            contactNo: '9987654321'
        }
    ]

  return (
    <div>
        <h1 className='text-[30px] font-semibold text-center' >TABLE</h1>
 <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 text-left text-sm text-gray-600">
    <thead className="bg-gray-100">
      <tr>
        <th className="border-b border-l bg-slate-400  border-gray-300 px-4 py-2 font-medium">No</th>
        <th className="border-b border-l bg-slate-400 border-gray-300 px-4 py-2 font-medium">Name</th>
        <th className="border-b border-l bg-slate-400 border-gray-300 px-4 py-2 font-medium">Age</th>
        <th className="border-b border-l bg-slate-400 border-gray-300 px-4 py-2 font-medium">Place</th>
        <th className="border-b border-l bg-slate-400 border-gray-300 px-4 py-2 font-medium">Email</th>
        <th className="border-b border-l bg-slate-400 border-gray-300 px-4 py-2 font-medium">Contact No</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr 
          key={index} 
          
        >
          <td className="px-4 border-l border-b bg-slate-100 py-2">{item.no}</td>
          <td className="px-4 border-l border-b bg-slate-100 py-2">{item.name}</td>
          <td className="px-4 border-l border-b bg-slate-100 py-2">{item.age}</td>
          <td className="px-4 border-l border-b bg-slate-100 py-2">{item.place}</td>
          <td className="px-4 border-l border-b bg-slate-100 py-2">{item.email}</td>
          <td className="px-4 border-l border-b bg-slate-100 py-2">{item.contactNo}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className="">
  <h1 className="text-center text-2xl font-bold text-gray-800 mt-3 mb-6">CARD</h1>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((item, card) => (
      <div 
        key={card} 
        className="rounded-lg border hover:bg-[#ffffff] border-gray-300 bg-[#d7d5d5]  p-4 shadow hover:shadow-lg transition-shadow"
      >
        <h1 className="text-center text-2xl font-bold text-gray-800  mb-6">ID CARD</h1>
        <p className="mb-2 text-sm text-gray-500">No: <span className="font-medium text-gray-800">{item.no}</span></p>
        <p className="mb-2 text-sm text-gray-500">Name: <span className="font-medium text-gray-800">{item.name}</span></p>
        <p className="mb-2 text-sm text-gray-500">Age: <span className="font-medium text-gray-800">{item.age}</span></p>
        <p className="mb-2 text-sm text-gray-500">Place: <span className="font-medium text-gray-800">{item.place}</span></p>
        <p className="mb-2 text-sm text-gray-500">Email: <span className="font-medium text-gray-800">{item.email}</span></p>
        <p className="text-sm text-gray-500">Contact No: <span className="font-medium text-gray-800">{item.contactNo}</span></p>
      </div>
    ))}
  </div>
</div>



    </div>
  )
}
