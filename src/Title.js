import React from "react";
import Popcorn from './popcorn.png'


export default function Title() {
    return (
        <>
            <h1 className="titleText display-1"><img src={Popcorn} className="titleImage" alt="popcorn spill"></img>Movie Reviews</h1>
        </>
    )
}