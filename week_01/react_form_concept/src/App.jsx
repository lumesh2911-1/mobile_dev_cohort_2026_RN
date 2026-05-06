import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) {
      alert("Please fill all the fields");
      return;
    }
    const payload = { name, email, mobile };
    console.log("payload", payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Record Form
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Mobile</label>

          <input
            type="number"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
