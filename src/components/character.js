import React from 'react';

function Character(props) {
    const {name,status,species,gender,photo} = props;
    return (
        <div>

            <h2> {name}</h2>
            <p> {status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={photo} alt="photo"/>
        </div>
    );
}
export default Character;