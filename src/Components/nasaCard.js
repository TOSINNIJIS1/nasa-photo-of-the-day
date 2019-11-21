import React from "react";

const NasaCard = (props) => {
    console.log(props);
    return ( 
        <div className="Card" >
            <h2> {props.date} </h2>
            <img src = {props.image} />
            <h2>  {props.title} </h2>
            <p> {props.explanation} </p>
        </div>
    )
}

export default NasaCard;