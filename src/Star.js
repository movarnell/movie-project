import React, { useState } from "react";
// Import the two star images, note the relative location.
import emptyStar from './emptyStar.png';
import fullStar from './fullStar.png';

// Star component takes in a boolean prop called "filled" that determines whether to display a full or empty star
function Star({ filled }) {
    // Render the star image based on the value of the "filled" prop
    return (
        <img src={filled ? fullStar : emptyStar} className="starSet" alt="star" />
    )
}

// Main component called "Rating"
export default function Rating() {
    // Define two state variables - "starIndex" and "selection" - and initialize them to 0
    const [starIndex, setStarIndex] = useState(0);
    const [selection, setSelection] = useState(0);

    // Render the rating component
    return (
        <div className="text-center">
            <h4 className="fw-bold">Your Rating</h4>
            <ul className="text-center">
                {/* Map over an array of 1-5 to display each star */}
                {[1, 2, 3, 4, 5].map((index) => {
                    return (
                        // Each star is rendered within an li element
                        <li onMouseEnter={() => setStarIndex(index)}
                            onMouseLeave={() => setStarIndex(0)}
                            onClick={() => setSelection(index)}
                            className="starList">
                            {/* Render the Star component with a prop of whether to fill the star or not */}
                            <Star filled={(index <= starIndex) || (index <= selection)} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
