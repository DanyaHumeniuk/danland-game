import { useState, useEffect } from "react";
import map from "../assets/Map2.jpg"
import avatar from "../assets/fred.png"

const Hero = ({ setShowNavbar }) => {

  const [position, setPosition] = useState({top: "20%", left: "30%"});
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isChoosing, setIsChoosing] = useState(true);
  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const moveAvatar = (top, left) => {
    setPosition({ top, left });
  };

  const handleMove = (top, left, locationName) => {
    moveAvatar(top, left);
    setPopupText(`Welcome to ${locationName}!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  useEffect(() => {
    const getRandomIds = (count, max = 898) => {
      const ids = new Set();
      while (ids.size < count) {
        const randId = Math.floor(Math.random() * max) + 1;
        ids.add(randId);
      }
      return Array.from(ids);
    };
  
    const fetchRandomPokemons = async () => {
      const randomIds = getRandomIds(6);
      try {
        const promises = randomIds.map(id =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
        );
        const detailedPokemons = await Promise.all(promises);
        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error fetching random pokemons:", error);
      }
    };
  
    fetchRandomPokemons();
  }, []);
  

  if (isChoosing) {
    return (
      <div className="flex flex-wrap justify-center items-center h-screen p-8 gap-6 bg-white">
        <h1 className="w-full text-center text-2xl font-bold">Pick Your Pokémon</h1>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              setSelectedPokemon(pokemon);
              setIsChoosing(false);
              setShowNavbar(true);
            }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24" />
            <p className="capitalize mt-2 text-sm">{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="relative w-full max-w-lg aspect-square rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${map})` }}>
        {showPopup && (
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black px-4 py-2 rounded shadow-lg z-50">
        {popupText}
      </div>
      )}
            <div 
              className="absolute top-[17%] left-[27%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm cursor-pointer"
              onClick={() => handleMove("20%", "30%", "the House")}
            >
            A
            </div>
            <div 
              className="absolute top-[51%] left-[17%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm cursor-pointer"
              onClick={() => handleMove("54%", "20%", "Lake Ireylo")}
            >
            B
            </div>
            <div 
              className="absolute top-[23%] left-[62%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm cursor-pointer"
              onClick={() => handleMove("25%", "65%", "the Snowy Mountains")}

            >
            C
            </div>
            <div 
              className="absolute top-[81%] left-[35%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm cursor-pointer"
              onClick={() => handleMove("83%", "38%", "Paradise Park")}

            >
            D
            </div>
            <div 
              className="absolute top-[69%] left-[80%] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black font-bold text-xs sm:text-sm cursor-pointer"
              onClick={() => handleMove("71%", "83%", "the Chest of Dreams")}

            >
            E
            </div>
            {selectedPokemon && (
                <img
                    src={selectedPokemon.sprites.front_default}
                    alt={selectedPokemon.name}
                    className="absolute scale-150"
                    style={{
                    top: position.top,
                    left: position.left,
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "top 0.5s ease, left 0.5s ease",
                    }}
                />
            )}
        </div>
    </div>
  )
}

export default Hero