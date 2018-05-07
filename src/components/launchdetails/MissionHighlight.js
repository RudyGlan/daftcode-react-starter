import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/MissionHighlight.sass";
import Counter from '../general/Counter';

class MissionHighlight extends React.Component {

  render() {
    const {launch, rocket} = this.props;
    let date = new Date(launch.launch_date_local);
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let locale = "en-us";
    let month =  date.toLocaleString(locale, { month: "long" });
    let readydate = `${day} ${month} ${date.getFullYear()}`

    return (
        <div id='highlight' className="highlight">
            <span className="highlight__date">{readydate}</span>
            <h1 className="highlight__title">{rocket.id} next {launch.flight_number} launch</h1>
            <Counter date={date}/>
            <img className="highlight__img" src={launch.links.mission_patch_small} alt="mission patch"/>
        </div>
    );
  }
}

export default MissionHighlight;
