import Image from "next/image";
import React from "react";

const Travel = () => {
  return (
    <div className="my-5 p-5">
      <h2 className="text-center text-2xl font-bold p-5">Travel Photos</h2>
      <div className="flex sm:flex-col md:flex-row w-fit mx-auto">
        <div className="mr-2">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="/"
          width="677"
          height="451"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
            alt="/"
            width="215"
            height="217"
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80"
            alt="/"
            width="215"
            height="217"
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="/"
            width="215"
            height="217"
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80"
            alt="/"
            width="215"
            height="217"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
