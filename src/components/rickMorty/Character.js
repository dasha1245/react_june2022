import {useState} from "react";
import Character from "./oneCharacter";

export default function Characters(props){
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results)
        })



    return(<div>
        {characters.map(item => <Character item={item}/>)}
    </div>)
}