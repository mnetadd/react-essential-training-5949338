import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>Welcome to myKitchen by {props.name}</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Mahesh."/>
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </div>
  );
}

export default App;