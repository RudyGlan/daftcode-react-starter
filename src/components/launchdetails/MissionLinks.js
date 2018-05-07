import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/MissionLinks.sass";
import rocketImg from "../../assets/img/rocket.png";

class MissionLinks extends React.Component {

  render() {
    const {launch} = this.props;

    return (
        <section id='missionlinks' className="missionlinks">
            <img className="missionlinks__img" src={rocketImg} alt="rocket"/>
            <div className="missionlinks__content">
                <span className='missionlinks__text'>mission links</span>
                <ul className="missionlinks__list">
                    <li className="missionlinks__item">
                        <a className="missionlinks__link" href={launch.links.reddit_campaign} target='_blank'>reddit campaign</a>
                    </li>
                    <li className="missionlinks__item">
                        <a className="missionlinks__link" href={launch.links.presskit} target='_blank'>presskit</a>
                    </li>
                    <li className="missionlinks__item">
                        <a className="missionlinks__link" href={launch.links.video_link} target='_blank'>mission video</a>
                    </li>
                </ul>
            </div>
        </section>
    );
  }
}

export default MissionLinks;
