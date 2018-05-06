import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/structure/MainContent.sass";
import rocketImg from "../../assets/img/rocket.png";

class MissionLinks extends React.Component {

  render() {
    const {launch} = this.props;

    return (
        <section id='missionlinks' className="launchlinks">
            <img src={rocketImg} alt="rocket"/>
            <div className="linkscontent">
                <span className='linkstext'>mission links</span>
                <ul className='linkslist'>
                    <li><a href={launch.links.reddit_campaign} target='_blank'>reddit campaign</a></li>
                    <li><a href={launch.links.presskit} target='_blank'>presskit</a></li>
                    <li><a href={launch.links.video_link} target='_blank'>mission video</a></li>
                </ul>
            </div>
        </section>
    );
  }
}

export default MissionLinks;
