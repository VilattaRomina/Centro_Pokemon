// Aqui debemos crear nuestro contexto y nuestro provider.
import {createContext, useState} from "react";

export const PokemonContext = createContext();

export const PokemonProvider =({children}) =>{
    // const [data, setData] = useState({});
    const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
    });

  

  return (
    <PokemonContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;