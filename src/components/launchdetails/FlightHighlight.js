import React from "react";
import PropTypes from "prop-types";

//import "../../styles/components/launchdetails/MissionHighlight.sass";
import Counter from '../general/Counter';

class FlightHighlight extends React.Component {

  render() {
    const {launch, rocket} = this.props;
    let date = new Date(launch.launch_date_local);
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let locale = "en-us";
    let month =  date.toLocaleString(locale, { month: "long" });
    let readydate = `${day} ${month} ${date.getFullYear()}`

    return (
        <section className="flight__highlight">
            <span className="flight__highlight-date">{readydate}</span>
            <h1 className="flight__highlight-name">{`${rocket.name} launch`}</h1>
            <Counter date={date}/>
            <img className="flight__highlight-patch" src={launch.links.mission_patch_small} alt="mission patch"/>
        </section>
    );
  }
}

export default FlightHighlight;