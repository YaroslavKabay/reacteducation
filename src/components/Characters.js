import React from 'react';
import './Characters.css';

function Character(props) {
    const {name,info,photo} = props; // пропси тягнуть значення з елементу там де він знаходиться
    return (
        <div>

            <h2 className={'lol'}> {name}</h2>
            <p> {info}</p>
            <img src={photo} alt=""/>
        </div> // бажано юзати класнейм а не клас в реакті
    );
}
export default Character;