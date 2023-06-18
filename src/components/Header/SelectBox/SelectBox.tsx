import React, {useState, useContext} from "react";
import "./SelectBox.Module.scss";
import Select from 'react-select';
import axios from "axios";
import {Context} from "../../App";
import {apikey, City} from "../../../assets/data/globalVariables";


let data: any = '';

function SelectBox() {
    const [selectedCity, setSelectedCity]: any = useState();
    const contextValue: any = useContext(Context);
    const changeCityValue = (selected: any) => {
        console.log("selected", selected);
        setSelectedCity(selected);
        let weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?lat=" + `${selected.lat}` + "&lon=" + `${selected.lon}` + "&units=metric&&lang=ru&appid=" + `${apikey}`;
        axios.get(weatherUrlFree).then(result => {
            console.log(result.data);
            data = result.data.list.filter((el: any) => el.dt_txt.includes("12:00:00"));
            contextValue.setCity(selected);
            contextValue.setData(data);
        });
    };

    if (!selectedCity) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let geoCity: any = {
                    value: "",
                    label: "",
                    lat: null,
                    lon: null,
                };
                const urlResponse = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + `${position.coords.latitude}` + "&lon=" + `${position.coords.longitude}` + "&limit=5&appid=" + `${apikey}`;
                console.log(urlResponse);
                axios.get(urlResponse).then(result => {
                    console.log(result.data[0]);
                    geoCity.value = result.data[0].name;
                    geoCity.label = result.data[0].local_names.ru;
                    geoCity.lat = position.coords.latitude;
                    geoCity.lon = position.coords.longitude;
                    changeCityValue(geoCity);
                });
            });
        } else {
            console.log('NO geolocation!')
        }
    }

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