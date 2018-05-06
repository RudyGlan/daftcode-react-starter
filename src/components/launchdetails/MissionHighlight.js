import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/structure/MainContent.sass";
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
        <div id='highlight' className="baseInfo">
            <span className="launchdate">{readydate}</span>
            <h1>{rocket.id} next {launch.flight_number} launch</h1>
            <Counter date={date}/>
            <img src={launch.links.mission_patch_small} alt="mission patch"/>
        </div>
    );
  }
}

export default MissionHighlight;
