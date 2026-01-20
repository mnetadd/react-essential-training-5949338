"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {  
    return `./hotels/${src}.jpeg`;
  };
  return (
    <div>
      <h2>Hotel name: {name}, Capacity: {capacity}</h2>
      <Image
        src={id} 
        alt="image file"
        width={300}
        height={300}
        loader={imageLoader}
      />  
    </div>
  );
}