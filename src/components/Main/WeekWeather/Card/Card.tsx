import React, {useContext} from "react";
import './Card.Module.scss';
import {Context} from "./../../../App";



function Card(props: any) {
    const ms = props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
    const dayDate = new Date(ms).toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'});
    const imgURL = "owf owf-" + props.day.weather[0].id + " owf-5x icon-style"

    const contextValue:any = useContext(Context);

    return (
        <div className="card">
            <h3 className="card-title">{dayDate}</h3>
            <h3 className="card-title">{weekdayName}</h3>
            <i className={imgURL}></i>
            <h2>{Math.round(props.day.main.temp)} °C</h2>
            <div className="card-body">
                <p className="card-text">{props.day.weather[0].description}</p>
            </div>
            <div> contextValue: {contextValue.city.label} </div>
        </div>
    )
}

export default Card;