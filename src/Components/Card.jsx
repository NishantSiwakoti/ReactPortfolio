import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="bg-[#35d16e] max-w-48 rounded-t-lg max-h-56 rounded-b-md shadow-2xl p-2 m-5 transition duration-300 transform hover:scale-125">
          <img
            src={props.img}
            alt="Nishant Siwakoti"
            className="rounded-t-lg card-img opacity-100 duration-300"
          />
          <p className="text-center mt-0.5 font-bold text-white card-title opacity-100 hover:opacity-80 transition-opacity duration-300">
            {props.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
