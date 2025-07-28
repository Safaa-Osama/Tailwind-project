import React from "react";
import { useEffect } from "react";
import profile from "../../assets/img/profile.svg";
import Heading from "../Heading/Heading";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="bg-[#1ABC9C] flex flex-col justify-center items-center w-full">
        <img src={profile} className="w-1/4" alt="profile" />
        <Heading
          title="Start Framework"
          color="text-white"
          bgColor="bg-white"
        />
        <p className="text-white my-6">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
