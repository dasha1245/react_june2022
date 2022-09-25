import {useEffect, useState} from "react";

import {albumsServices} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        albumsServices.getAll().then(value => setAlbums(value.data))
    }, [])
    return (
        <div>
            {albums.map((album) => <Album album={album} key={album.id}/>)}
        </div>
    );
};

export {Albums}