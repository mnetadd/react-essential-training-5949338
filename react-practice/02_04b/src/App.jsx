import './App.css'

let cnt = "some junk text"

function Header() {
  return (
    <header>
      <h1>Welcome to My React App by Mahesh {cnt}</h1>
    </header>
  )
}

function App() {

  return (
    <div>
      <Header />
      <h1>Hello, React! {cnt} here too</h1>
    </div>
  )
}

export default App
