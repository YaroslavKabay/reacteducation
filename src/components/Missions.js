import {useEffect,useState} from "react";
import User from "../components/mission/Mission";

export default function Posts(){

    let [missions, setMissions] = useState ([]);


    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then (value => value.json())
            .then(value => {
                setMissions(value);
            })

    }, [])


    return (
        <div>
            <h2>SpaceX Missions</h2>
            {missions.filter(missions => missions.launch_year !== "2020").map(mission =>
                <User
                    key = {mission.flight_number}
                    item={mission}
                /> )}

        </div>);
}
