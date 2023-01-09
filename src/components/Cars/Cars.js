import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars); // дістає шось зі стору(стейт це стор а стейткарс це редюсер а карс це інішнстейт)
    const dispatch = useDispatch();// ceтає в стор карс

    useEffect(() => {
        dispatch(carActions.getAll())//ceтає в стор карс
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};