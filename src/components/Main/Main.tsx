import React, {Fragment, useContext, useState} from "react";
import WeekWeather from './WeekWeather/WeekWeather';
import './Main.Module.scss'
import {Context} from "../App";


function Main() {
    const contextValue:any = useContext(Context);
    contextValue.setTest('String from Main.tsx! Test!2');


    return (
        <Fragment>
            <div className="container">
                <WeekWeather/>
            </div>
        </Fragment>
    )

}


export default Main;