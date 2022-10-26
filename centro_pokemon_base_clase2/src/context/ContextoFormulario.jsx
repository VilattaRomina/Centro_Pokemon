import { createContext, useReducer} from "react";

const initialState = {
    entrenador : {
        nombre: '',
        apellido: '',
        email: '',
    },
    pokemon : {
        nombrePokemon: '',
        tipoPokemon: '',
        elementoPokemon: '',
        alturaPokemon: '',
        edadPokemon: '',
    }     
}

//reducer debe devolver un nuevo estado
    //state: estado actual
    //action: Objeto con prop type: string y payload: valor que queremos actualizar

    //La función reducer se ejecutara cada vez que llamemmos a la funcion dispatch
    const reducer =(state, action) => {
        //el switch pregunta por la propiedad tipo de esta accion
       
        switch (action.type) {
            case "ACTUALIZAR_ENTRENADOR":
                //retornamos un objeto que actualice el estado inicial
                console.log(state);
                return {
                    ...state,
                    entrenador:{
                        ...state.entrenador,
                        ...action.payload,
                }
                    
                }
            case "ACTUALIZAR_POKEMON":
                //retornamos un objeto que actualice el estado inicial
                return {
                    ...state,
                    pokemon:{
                    ...state.pokemon,
                    ...action.payload,
                }
            }
            default:
                return state;        
        }
    }
// Aqui debemos crear nuestro contexto y nuestro provider.
export const PokemonContext = createContext();

export const PokemonProvider =({children}) =>{
    
    //dispatch nos va a premitir actualizar los estados que tengamos
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <PokemonContext.Provider value={{state, dispatch}}>
            {children}
        </PokemonContext.Provider>
    )
}