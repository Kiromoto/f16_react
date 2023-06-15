import React, {useState} from "react";
import "./SelectBox.Module.scss";
import Select from 'react-select';
import axios from "axios";


const apikey:string = "f548d72749c6aad919dcb1751ae76631";
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

let fiveDaysData:any = '';

function SelectBox() {
    const [selectedCity, setSelectedCity] = useState(null);
   const changeCityValue = (selected: any) => {
        setSelectedCity(selected);
        let weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?lat=" + `${selected.lat}` + "&lon=" + `${selected.lon}` + "&units=metric&&lang=ru&appid=" + `${apikey}`;
        axios.get(weatherUrlFree).then(result => {
            // const fiveDaysData: any = result.data.list.filter((el: any) => el.dt_txt.includes("12:00:00"));
            fiveDaysData = result.data.list.filter((el: any) => el.dt_txt.includes("12:00:00"));
        });
    };


    return (
        <div className="divStyle">
            <Select className="select"
                value={selectedCity}
                onChange={changeCityValue}
                options={City}
                placeholder={'Выберите город...'}

            />
        </div>
    );

}


export default SelectBox;