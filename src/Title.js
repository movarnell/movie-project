import React from "react";
import Popcorn from './popcorn.svg';


export default function Title() {
    return (
        <>
            <h1 className="text-center display-1 fw-bold text-light"><img src={Popcorn}></img>Movie Reviews</h1>
        </>
    )
}