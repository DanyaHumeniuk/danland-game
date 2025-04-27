import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { useState } from "react"

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="overflow-x-hidden ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="">
        {showNavbar && <Navbar />}
        <Hero setShowNavbar={setShowNavbar} />
      </div>
    </div>
  )
}

export default App
