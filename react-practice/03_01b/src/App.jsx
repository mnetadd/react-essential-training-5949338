import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Macaroni with Cheese", "Pizza Diavola", "Salad with Tofu", "Roast Potatoes", "Chicken with Rice",
  "Pasta with Pesto", "Vegetable Stir Fry", "Beef Stew", "Fish Tacos", "Lentil Soup", "Grilled Cheese Sandwiches", 
  "Caesar Salad", "Spaghetti Bolognese", "Quinoa Salad", "Shrimp Scampi"

];

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish, index) => (
        <li style={{ listStyleType: "none" }} key={index}>{dish}</li>
      ))}
    </ul>

  );
}


function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items} />

    </div>
  );
}

export default App;