import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [uname, setUname] = useState("");
  const [uage, setUage] = useState("");
  const [uemail, setUemail] = useState("");
  const [upass, setUpass] = useState("");

  return (
    <>
    <div>
 <Heading title="contact section" color="text-black" bgColor="bg-black" />

      <form className="mx-auto w-1/2 my-10 relative">
        <label
          className={`text-[#1ABC9C] relative opacity-0 top-0 transition-all
              delay-250 duration-500 ease-in  ${uname ? " opacity-100" : ""}`}
        >
          User Name:
        </label>
        <input
          onChange={(e) => setUname(e.target.value)}
          className="block mb-2 w-full p-2 border border-grey-100 rounded-md focus:outline-[#1ABC9C] "
          type="text"
          placeholder="userName"
        />

        <label
          className={`text-[#1ABC9C] relative opacity-0 top-0 transition-all
              delay-250 duration-500 ease-in  ${uage ? " opacity-100" : ""}`}
        >
          User Age:
        </label>
        <input
          onChange={(e) => setUage(e.target.value)}
          className="block mb-2 w-full p-2 border border-grey-100 rounded-md focus:outline-[#1ABC9C] "
          type="number"
          placeholder="userAge"
        />

        <label
          className={`text-[#1ABC9C] relative opacity-0 top-0 transition-all
              delay-250 duration-500 ease-in  ${uemail ? " opacity-100" : ""}`}
        >
          User Email:
        </label>
        <input
          onChange={(e) => setUemail(e.target.value)}
          className="block mb-2 w-full p-2 border border-grey-100 rounded-md focus:outline-[#1ABC9C] "
          type="email"
          placeholder="userEmail"
        />

        <label
          className={`text-[#1ABC9C] relative opacity-0 top-0 transition-all
              delay-250 duration-500 ease-in  ${upass ? " opacity-100" : ""}`}
        >
          User Pass:
        </label>
        <input
          onChange={(e) => setUpass(e.target.value)}
          className="block mb-2 w-full p-2 border border-grey-100 rounded-md focus:outline-[#1ABC9C] "
          type="password"
          placeholder="userPassword"
        />

        <button className="bg-[#1ABC9C] text-white px-3 py-1 rounded-md cursor-pointer start-0">
          Send message
        </button>
      </form>
    </div>
     
    </>
  );
}
