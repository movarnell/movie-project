import React from "react";


export default function Intro() {
    return (
        <div className="container-fluid introContainer rounded-5 text-light">
            <div className="row pb-5">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <p className="display-6 intoFont">Welcome to the generic movie review site, where you can provide your opinions on these fine movies listed below. Leave a star rating, and more with information provided generously by <a href="https://themoviedb.org" target="_blank" className="introLink">TheMovieDB.org</a></p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <a href="https://themoviedb.org" target="_blank"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="movieDB"></img></a>
                </div>
            </div>
        </div>
    )

}