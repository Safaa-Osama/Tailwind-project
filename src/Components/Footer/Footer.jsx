import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2C3E50] text-white text-center py-20">
        <div className="container mx-auto grid grid-cols-3 gap-4">
          <div className="flex flex-col ">
            <h2 className="font-bold text-lg">LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">AROUND THE WEB</h2>
            <ul className="flex align-center justify-center">
              <li>
                <i className="fa-brands fa-facebook" />
              </li>
              <li>
                <i class="fa-brands fa-twitter" />
              </li>
              <li>
                <i class="fa-brands fa-linkedin" />
              </li>
              <li>
                <i class="fa-solid fa-globe" />
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg">ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
      <div className="text-white text-center py-4 bg-black">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
