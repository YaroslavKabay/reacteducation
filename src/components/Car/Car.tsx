import { FC } from 'react';
import {ICar} from '../../interfaces'
import {
    ReactNode
} from "../../../../../../../Applications/IntelliJ IDEA.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

interface IProps{
    car: ICar,
    children?: ReactNode
}

const Car:FC<IProps> = ({car}) => {
    const {id, model, price, year} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export  {Car};