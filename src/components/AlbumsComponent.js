import {useEffect,useState} from "react"

// import AlbumComponent from "./AlbumComponent"
import AlbumComponent from "./AlbumComponent"

import {getAlbums} from "../services"

export default function AlbumsComponent(){
    let [albums,setAlbums] = useState([]);

    useEffect( () =>{
        getAlbums.then((value)=> setAlbums([...value]))
    },[]);




    return (
        <div>
            {
                albums.map(album => <AlbumComponent album={album} key={album.id}/>)
            }
        </div>
    );
}