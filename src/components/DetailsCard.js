import React from "react";

function DetailsCard({ image, title, author, publisher, date }) {
   
    return (
      <div className="detailCard">
        <card>
          <img className="detailImg" src={image}/>
          <card className="detailText">
            <h3>{title}</h3>
            <h4>{`by ${author}`}</h4>
            <p>{`published by ${publisher}`}</p>
            <p>{`for ${date} meeting`}</p>
          </card>
        </card>
      </div>
          );
}

export default DetailsCard;
