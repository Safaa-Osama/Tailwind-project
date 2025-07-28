import React from "react";

export default function Lightbox(props) {
  return (
    <>
      onClick={() => props.setOpened(false)}
      <div className="top-0 start-0 left-0 bottom-0 bg-sky-200 flex justify-center items-center">
        <img className="w-50 h-75" src={props.image} alt="image show" />
      </div>
    </>
  );
}
