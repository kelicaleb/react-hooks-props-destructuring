import React from 'react';

function Social({
    title,
    image = "https://unsplash.com/photos/6kajEqr84iY",
}) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image}></img>
        </div>
    )
}
export default Social