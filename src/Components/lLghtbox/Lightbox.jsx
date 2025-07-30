import React from "react";

export default function Lightbox(props) {
  return (
    <>
      <div
        onClick={() => props.setOpened(false)}
        className={`fixed bg-green-300/30 top-0 start-0 end-0 bottom-0 
         justify-center w-full h-screen items-center z-2 ${
           props.opened ? "flex" : "hidden"
         }`}
      >
        <img className="w-1/2 h-3/4" src={props.image} alt="image show" />
      </div>
    </>
  );
}
