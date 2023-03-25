import React from "react";
import Popcorn from './movietitle.png'

export default function Title() {
    return (
        <div className="row text-center">
            <div className="col align-contents-center">
                <img src={Popcorn} alt="Title Graphic" className="mx-auto img-fluid"></img>
            </div>
        </div >
    )
}
