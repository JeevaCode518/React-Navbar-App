import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Table from "./Components/Table"

function App() {
  const items = ["A", "B", "C", "D", "E", "F"];
  return (
    <>
      <NavBar />
      <Table items={items} heading="Dynamic List" />
      <Footer />
    </>

  )
}

export default App
