import FundSection from "./components/FundSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/NavBar"

function App() {
  return (
  <div className="mx-0 my-0 md:mx-8 md:my-2">
    <Navbar />
    <HeroSection />
    <FundSection />
    {/* <h1 className="text-2xl font-bold">Elevata 243 </h1> */}
  </div>
  )
}

export default App
