import React, { useContext, useState} from "react";
import { PokemonContext } from "../../context/ContextoFormulario";

/**
 * este componente recibe como parametros los valores capturados en el formulario
 * @param {string} name 
 * @param {strin} label 
 * @param {Boolean} isPokemon 
 * @param {string} type
 */

const Input = ({ name, label, type = "text", isPokemon= false }) => {

  // Aqui deberíamos acceder al estado global 
  const { dispatch} = useContext(PokemonContext)

  // También, utilizaremos un estado local para manejar el estado del input.
  const [input, setInput] = useState('')

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInput(e.target.value)

  };

   /**
   * @type {string} type
   * @type {object} payload
   * @type {object} dispatch
   * 
   * @param {object} e 
   * 
   * @return {object} contiene el objeto guardado en el dispatch
   */
  const onBlur = (e) => {
    e.preventDefault();
    
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
