import React from "react";
import Popcorn from './popcorn.png'


export default function Title() {
    return (
        <>
            <h1 className="titleText display-1">Movie Reviews<img src={Popcorn} className="titleImage" alt="popcorn spill"></img></h1>
        </>
    )
}