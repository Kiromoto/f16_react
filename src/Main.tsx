import React, {Fragment} from "react";
import WeekWeather from './WeekWeather';
import './styles/Main.css'

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