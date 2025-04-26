import map from "../assets/Map2.jpg"
import avatar from "../assets/fred.png"

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="relative w-full max-w-lg aspect-square rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${map})` }}>
            <div className="absolute top-[17%] left-[27%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm">
            A
            </div>
            <div className="absolute top-[51%] left-[17%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm">
            B
            </div>
            <div className="absolute top-[23%] left-[62%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm">
            C
            </div>
            <div className="absolute top-[81%] left-[35%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm">
            D
            </div>
            <div className="absolute top-[69%] left-[80%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm">
            E
            </div>
            <img 
              src={avatar} 
              alt="Avatar" 
              className="absolute top-[15%] left-[25%] w-10 h-10 sm:w-14 sm:h-14 rounded-full scale-150"
            />

        </div>
    </div>
  )
}

export default Hero