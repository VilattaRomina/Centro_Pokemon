import React, { useContext, useState} from "react";
import { PokemonContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", isPokemon= false }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos del formulario y una manera de actualizar los mismos.
  const {state, dispatch} = useContext(PokemonContext)

  // También, utilizaremos un estado local para manejar el estado del input.
  const [input, setInput] = useState('')

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInput(e.target.value)

  };
  //Onblur se activa cuando el usuario retira el foco de la aplicación de un elemento de la página
  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar los datos en el estado global usando una notación de { clave: valor }
    
    if(isPokemon){
      dispatch({
        type: "ACTUALIZAR_POKEMON",
      payload: { [name] : input},
      })
    }else dispatch({
      type: "ACTUALIZAR_ENTRENADOR",
      payload: { [name] : input},
    });

  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={input}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
