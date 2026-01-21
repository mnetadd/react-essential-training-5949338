async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <h1>Lift Status Info</h1>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}