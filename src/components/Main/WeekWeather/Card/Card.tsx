import React, {Fragment} from "react";
import './Card.Module.scss';



function Card(props: any) {
    const ms = props.day.dt * 1000;
    // const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
    const weekdayName = new Date(ms).toLocaleString('ru');

    const imgURL = "owf owf-" + props.day.weather[0].id + " owf-5x icon-style"

    return (
        <div className="card">
            <h3 className="card-title">{weekdayName}</h3>
            <i className={imgURL}></i>
            <h2>{Math.round(props.day.main.temp)} °C</h2>
            <div className="card-body">
                <p className="card-text">{props.day.weather[0].description}</p>
            </div>
        </div>
    )
}

export default Card;