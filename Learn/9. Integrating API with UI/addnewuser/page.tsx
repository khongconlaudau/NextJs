"use client";

import { useState } from "react";

const AddNewUser: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async (): Promise<void> => {
    let res = await fetch("/api/users text-black", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    res = await res.json();

    if (res.ok) {
      alert("User successfully created");
    } else {
      alert("Error when creating new user");
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter your name"
        className="ml-2 mb-2 outline-none text-black"
      />
      <br />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Enter your age"
        className="ml-2 mb-2 outline-none text-black"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter your email"
        className="ml-2 mb-2 outline-none text-black"
      />
      <br />
      <button
        className="px-10 py-2 mt-2 bg-black hover:bg-sky-300 duration-700"
        onClick={addUser}
      >
        Add User
      </button>
    </div>
  );
};
export default AddNewUser;
