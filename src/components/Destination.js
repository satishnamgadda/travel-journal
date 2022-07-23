import React from "react";
import "./Destination.css";

function Destination(props) {
  return (
    <div className="destination-container">
      <img src={props.destination.imageUrl} alt="" className="destination-cover-pic"/>
      <div className="destination-info-container">
        <div className="destination-location-info">
          <img src="../../images/icons/location-dot-solid.svg" alt="location-pin-icon" className="pin-icon"/>
          <p className="destination-country">{props.destination.location.toUpperCase()}</p>
          <a href={props.destination.googleMapsUrl} target="blank" className="google-url">
            View on Google Maps
          </a>
        </div>
        <h2 className="destination-title">{props.destination.title}</h2>
        <p className="destination-date">
          {props.destination.startDate}-{props.destination.endDate}
        </p>
        <p className="destination-description">
          {props.destination.description}
        </p>
      </div>
    </div>
  );
}

export default Destination;
