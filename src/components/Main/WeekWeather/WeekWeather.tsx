import React, {useContext} from "react";
import Card from "./Card/Card";
import './WeekWeather.Module.scss';
import {Context} from "../../App";

function WeekWeather() {
    const contextValue: any = useContext(Context);

    const makeDayCards = () => {
        return contextValue.data.map((day: any, index: number) => <Card day={day} key={index}/>)
    };

    if (!contextValue?.city.label) return <p>Choose city...</p>
    if (!contextValue?.data) return <p>Loading data...</p>

    return (
        <>
            <div className="titleContainer">Выбран город {contextValue.city.label}. Долгота: {contextValue.city.lon},
                Широта: {contextValue.city.lat}.
            </div>
            <div className="allWeatherContainer"> {makeDayCards()} </div>
        </>
    );

}


export default WeekWeather;