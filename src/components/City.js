import React from "react";

const City = (props) => {
    return(
        <div>
            <h1>{props.city.name}</h1>
            <h2>{props.city.description}</h2>
            <h2>{props.city.temp}</h2>
        </div>
    )
}

export default City;