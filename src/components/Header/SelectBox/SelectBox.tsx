import React, {useState} from "react";
import "./SelectBox.Module.scss";
import Select from 'react-select'

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

function SelectBox() {
    const [selectedCity, setSelectedCity] = useState(null);

    const changeCityValue = (selected: any) => {
        setSelectedCity(selected);
        console.log(selected);
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