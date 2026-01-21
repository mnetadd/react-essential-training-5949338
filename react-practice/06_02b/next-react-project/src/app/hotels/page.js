import Image from "next/image";

async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {  
    return `./hotels/${src}.jpeg`;
  }
  return (
    <div>
      <h2>Hotel name: {name}, Capacity: {capacity}</h2>
      <Image
        src={id}
        width={300}
        height={300}
      />  
    </div>
  );
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>{data.map((hotel) => (
          <HotelBlock key={hotel.id} name={hotel.name} capacity={hotel.capacity} />
        ))}</div>
      </div>
    </main>
  );
}