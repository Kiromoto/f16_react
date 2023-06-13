import React, {Fragment, useState} from "react";
import WeekWeather from './WeekWeather/WeekWeather';
import SelectBox from "./SelectBox/SelectBox";
import './Main.Module.scss'



function Main() {

    return (
        <Fragment>
            <div className="container">
                <SelectBox/>
                <WeekWeather/>
            </div>
        </Fragment>
    )

}


export default Main;