import {useForm} from "react-hook-form";
import {useReducer} from "react";

import {Cat} from "../cat/Cat";
import {Dog} from "../dog/Dog";


const reducer = (state, action) =>{
    switch(action.id){
        case 'cat':
            state.cats.push(action.cat)
            return {...state}
        case 'dog':
            state.dogs.push(action.dog)
            return {...state}
        case 'deleteCat':
            state.cats.splice(action.index, 1)
            return {...state}
        case 'deleteDog':
            state.dogs.splice(action.index, 1)
            return {...state}
    }
}

const Animals = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    return (
        <div>
            <div>

                <div>
                    {<Cat dispatch={dispatch} state={state}/>}
                </div>

                <div>
                    {<Dog dispatch={dispatch} state={state}/>}
                </div>
            </div>

            <div>
                <div>
                    <h3>Cats:</h3>
                    {state.cats.map((cat, index) => <div>{cat} <button onClick={() => dispatch({id:'deleteCat', index:index})}>Delete</button></div>)}
                </div>

                <div>
                    <h3>Dogs:</h3>
                    {state.dogs.map((dog, index) => <div>{dog} <button onClick={() => dispatch({id:'deleteDog', index:index})}>Delete</button></div>)}
                </div>
            </div>
        </div>
    );
};

export {Animals}