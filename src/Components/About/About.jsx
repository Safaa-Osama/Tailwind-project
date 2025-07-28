import React, { useEffect } from "react";
import Heading from "../Heading/Heading";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

 
  

  return (
    <>
      <div className="bg-[#1ABC9C] flex flex-col justify-center items-center text-white">
        <Heading
          title="about component"
          color="text-white"
          bgColor="bg-white"
        />
        <div className="grid grid-cols-2 gap-6 m-4 p-6">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
