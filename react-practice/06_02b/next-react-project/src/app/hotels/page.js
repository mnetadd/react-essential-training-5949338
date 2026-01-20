async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

function HotelRow({ hotel }) {
  return (
    <div>
      <h2>Hotel name: {hotel.name}, Capacity: {hotel.capacity}</h2>
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
          <HotelRow key={hotel.id} hotel={hotel} location={hotel.location} capacity={hotel.capacity} />
        ))}</div>
      </div>
    </main>
  );
}