import map from "../assets/map.jpg"

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-1/2 aspect-square lg:w-[75vh] lg:h-[75vh] rounded-xl flex justify-center items-center">
        <img src={map} alt="MAP" className="h-full rounded-xl" />
      </div>
    </div>
  )
}

export default Hero