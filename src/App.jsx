import Bitcoinfile from "./components/Bitcoinfile"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <h2 className="p-3">Cryptocurrencies -- Bitcoin</h2>
      <Bitcoinfile/>
    </>
  )
}

export default App
