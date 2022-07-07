import {useEffect,useState} from "react"

import AlbumComponent from "./AlbumComponent"

export default function AlbumsComponent(){
    let [albums,setAlbums] = useState([]);

    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums([...value])
            });

    },[]);




    return (
        <div>
            {
                albums.map(album => <AlbumComponent album={album} key={album.id}/>)
            }
        </div>
    );
}