import {useEffect, useState} from "react";
import Space from "./space";


export default function SpaceInfo() {
    let [spaces, setSpaces] = useState([]);

    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setSpaces(value)
                console.log(spaces)
            })
    }, [])

    return(<div>
        {spaces.filter((space) => (space.launch_year !== '2020')).map((space) => (<Space space = {space}/>))}

    </div>)
}