import React from "react";
import Popcorn from './popcorn.png'


export default function Title() {
    return (
        <>
            <h1 className="text-center display-1 fw-bold text-light"><img src={Popcorn} className="titleImage" alt="popcorn spill"></img>Movie Reviews</h1>
        </>
    )
}