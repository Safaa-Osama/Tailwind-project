import React, { useState } from "react";
import Heading from "../Heading/Heading";
import home from "../../assets/img/home.png";
import cake from "../../assets/img/cake.png";
import house from "../../assets/img/house.png";
import LightBox from "../Lightbox/Lightbox";
import { useEffect } from "react";

export default function Portofolio() {
  useEffect(() => {
    document.title = "Portofolio";
  }, []);

  const [openimg, setOpenimg] = useState(false);
  const [imgShow, setImgshow] = useState(house);

  return (
    <>
      <div className="my-8">
        <Heading
          title="Portofolio component"
          color="text-black"
          bgColor="bg-black"
        />

        <div className="gallery container mx-auto grid grid-cols-3 gap-6">
          <div className="item flex gap-6 justify-center mt-10 relative">
            <div>
              <img src={home} className="w-full rounded-md" alt="home" />
              <div
                onClick={() => {
                  setImgshow(home);
                  setOpenimg(true);
                }}
                className="layer w-full bg-[#1ABC9C] rounded-md absolute inset-0 flex justify-center items-center opacity-0"
              >
                <i className="text-white fa-solid fa-plus fa-3x"></i>
              </div>
            </div>
          </div>

          <div className="item flex gap-6 justify-center mt-10 relative">
            <div>
              <img src={cake} className="w-full rounded-md" alt="cake" />
              <div
                onClick={() => {
                  setImgshow(cake);
                  setOpenimg(true);
                }}
                className="layer w-full bg-[#1ABC9C] rounded-md absolute inset-0 flex justify-center items-center opacity-0"
              >
                <i className="text-white fa-solid fa-plus fa-3x"></i>
              </div>
            </div>
          </div>

          <div className="item flex gap-6 justify-center mt-10 relative">
            <div>
              <img src={house} className="w-full rounded-md" alt="house" />
              <div
                onClick={() => {
                  setImgshow(house);
                  setOpenimg(true);
                }}
                className="layer w-full bg-[#1ABC9C] rounded-md absolute inset-0 flex justify-center items-center opacity-0"
              >
                <i className="text-white fa-solid fa-plus fa-3x"></i>
              </div>
            </div>
          </div>

          <div className="item flex gap-6 justify-center mt-10 relative">
            <div>
              <img src={home} className="w-full rounded-md" alt="home" />
              <div
                onClick={() => {
                  setImgshow(home);
                  setOpenimg(true);
                }}
                className="layer w-full bg-[#1ABC9C] rounded-md absolute inset-0 flex justify-center items-center opacity-0"
              >
                <i className="text-white fa-solid fa-plus fa-3x"></i>
              </div>
            </div>
          </div>

          <div className="item flex gap-6 justify-center mt-10 relative">
            <div>
              <img src={cake} className="w-full rounded-md" alt="cake" />
              <div
                onClick={() => {
                  setImgshow(cake);
                  setOpenimg(true);
                }}
                className="layer w-full bg-[#1ABC9C] rounded-md absolute inset-0 flex justify-center items-center opacity-0"
              >
                <i className="text-white fa-solid fa-plus fa-3x"></i>
              </div>
            </div>
          </div>

          <div className="item flex gap-6 justify-center mt-10 relative">
            <div>
              <img src={house} className="w-full rounded-md" alt="house" />
              <div
                onClick={() => {
                  setImgshow(house);
                  setOpenimg(true);
                }}
                className="layer w-full bg-[#1ABC9C] rounded-md absolute inset-0 flex justify-center items-center opacity-0"
              >
                <i className="text-white fa-solid fa-plus fa-3x"></i>
              </div>
            </div>
          </div>
        </div>

        <LightBox opened={openimg} setOpened={setOpenimg} image={imgShow} />
        
      </div>
    </>
  );
}
