import React from "react";
function Card(props) {
    return (
        <div>
            <div style={{ width: "250px", height: "150", backgroundColor: "skyblue", border: "1px solid gray", borderRadius: "5px" }}>
                <img src={props.Productimage} alt="paneer" />
<p>{props.Productname}</p>
<p>{props.Productprice}</p>
            </div>
        </div>
    )
}
export default Card;