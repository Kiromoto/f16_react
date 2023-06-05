import React, {Fragment} from "react";
import axios from "axios";
import Card from "./Card";


const apikey = "f548d72749c6aad919dcb1751ae76631";

const City = [
    {
        value: "Minsk",
        label: "Минск",
        lat: 53.9024716,
        lon: 27.5618225,
    },
    {
        value: "Moskow",
        label: "Москва",
        lat: 55.7504461,
        lon: 37.6174943,
    },
    {
        value: "London",
        label: "Лондон",
        lat: 51.51561771,
        lon: -0.0919983,
    },
    {
        value: "Kiev",
        label: "Киев",
        lat: 50.4500336,
        lon: 30.5241361,
    },
    {
        value: "Istanbul",
        label: "Стамбул",
        lat: 41.0091982,
        lon: 28.9662187,
    },
];

let selected = City[4];

let weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?lat=" + `${selected.lat}` + "&lon=" + `${selected.lon}` + "&units=metric&&lang=ru&appid=" + `${apikey}`;


class WeekWeather extends React.Component {
    state = {
        days: [],
        weatherNow: [],
    };


    componentDidMount = () => {
        axios.get(weatherUrlFree).then(result => {
                    this.state.weatherNow = result.data.list;
                    const fiveDaysData: any = result.data.list.filter((el:any) => el.dt_txt.includes("12:00:00"));
                    this.setState({days: fiveDaysData});
                });
    }

    makeDayCards = () => {
        return this.state.days.map((day:any, index:number) => <Card day={day} key={index}/>)
    };

    render() {
        return (
            <div className="allWeatherContainer">
                <div className="titleWContainer">Погода для города {selected.label}</div>
                {this.makeDayCards()}
            </div>
        );
    };

}


export default WeekWeather;