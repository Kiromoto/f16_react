import React, {Fragment} from "react";
import WeekWeather from './WeekWeather/WeekWeather';
import './Main.Module.scss'


function Main() {

    return (
        <Fragment>
            <div className="container">
                <WeekWeather/>
            </div>
        </Fragment>
    )

}


export default Main;