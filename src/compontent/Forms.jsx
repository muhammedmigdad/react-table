import React, { useState } from 'react'

export default function Forms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const getName = (event) => {
        let nameValue = event.target.value;
        setName(nameValue);
    }

    const getEmail = (event) => {
        let emailValue = event.target.value;
        setEmail(emailValue);
    }
    
    const getNumber = (event) => {
        let numberValue = event.target.value;
        setNumber(numberValue);
    }
    const getMessage = (event) => {
        let messageValue = event.target.value;
        setMessage(messageValue);
    }
    const submitbtn = (event) => {
        event.preventDefault()
        // if (name == "" || number ==""){
        //     console.log("Invalid values");
        // }else{
        //     alert(name)
        //     console.log("Success");
        //     console.log("Name" + name);
        //     console.log("Email" + email);
        //     console.log("Number" + number);
        //     console.log("Message" + message);
        // }
        // alert(${name},${email},${number},${message})
        document.getElementById("display").innerHTML=`${name},<br>${email},<br>${number},<br>${message}`
    }
      return (
    <div className=''>
      <div class="max-w-lg mx-auto p-6 bg-black  rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-white">FORM</h2>
                <form onSubmit={submitbtn} class="space-y-6" method='post'>
        <div>
            <label for="name" class="block text-sm font-medium text-white">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={getName}
                placeholder="Enter your full name"
                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
            />
        </div>

        <div>
            <label for="email" class="block text-sm font-medium text-white">Email</label>
            <input
                type="email"
                id="email"
                onChange={getEmail}
                name="email"
                placeholder="Enter your email"
                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
            />
        </div>

        <div>
            <label for="phone" class="block text-sm font-medium text-white">Phone Number</label>
            <input
                type="tel"
                id="phone"
                onChange={getNumber}
                name="phone"
                placeholder="Enter your phone number"
                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
            />
        </div>

        <div>
            <label for="message" class="block text-sm font-medium text-white">Message</label>
            <textarea
                id="message"
                name="message"
                onChange={getMessage}
                rows="4"
                placeholder="Write your message"
                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
            ></textarea>
        </div>

        <div>
            <button
                type="submit"
                class="w-full  px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
        </div>
    </form>
</div>

    <div className="text-white bg-[#000000] w-[450px] h-[400px]" id='display'>
   
    </div>



    </div>
  )
}

