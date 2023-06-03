import React, {Fragment} from "react";
import WeekWeather from './WeekWeather';
import './styles/Main.css'

function Main() {

    return (
        <Fragment>
            <div>
                <button id="find-me">Show my location</button><br/>
                <p id="status"></p>
                <a id="map-link" target="_blank"></a>

            </div>
            <WeekWeather/>
        </Fragment>
    )

}


export default Main;