import React from 'react';

function Character(props) {
    const {name,info,photo} = props;
    return (
        <div>

            <h2> {name}</h2>
            <p> {info}</p>
            <img src={photo} alt=""/>
        </div>
    );
}
export default Character;