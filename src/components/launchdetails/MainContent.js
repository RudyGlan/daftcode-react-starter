import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/MainContent.sass";
import rocketImg from "../../assets/img/rocket.png";
import iridiumLogo from "../../assets/img/iridium-5-logo.png";


class MainContent extends React.Component {

  render() {
    const {launch, launchSite, rocket} = this.props;
    console.log(launch)

    return (
      <main>
        <article>
          <section className="launchinfo">
            <div className="baseInfo half">
            {Date(launch.launch_date_local)}
              <h1>{rocket.id} {launch.flight_number} launch</h1>
              <img src={iridiumLogo} alt="iridium logo"/>
            </div>
            <div className="specificInfo half">
              <section id="details" className="rocketinfo">
                <h2>details</h2>
                <hr/>
                <p className="description">{launch.details}</p>
              </section>
              <section id="rocket" className="rocketinfo">
                <h2>rocket</h2>
                <hr/>
                <div className="sectiontable">
                  <div className="sectiontablehalf">
                    <ul  className="sectionpops">
                      <li><span className="propname">name:</span><span className="propvalue">{rocket.name}</span></li>
                      <li><span className="propname">company:</span><span className="propvalue">{rocket.company}</span></li>
                      <li><span className="propname">height:</span><span className="propvalue">{rocket.height.meters}m / {rocket.height.feet}ft</span></li>
                      <li><span className="propname">diameter:</span><span className="propvalue">{rocket.diameter.meters}m / {rocket.diameter.feet}ft</span></li>
                      <li><span className="propname">mass:</span><span className="propvalue">{rocket.mass.kg}kg / {rocket.mass.lb}lb</span></li>
                    </ul>
                  </div>
                  <div className="sectiontablehalf">
                    <ul className="sectionpops">
                      <li><span className="propname">first flight:</span><span className="propvalue">{rocket.first_flight}</span></li>
                      <li><span className="propname">country:</span><span className="propvalue">{rocket.country}</span></li>
                      <li><span className="propname">succes rate:</span><span className="propvalue">{rocket.success_rate_pct}%</span></li>
                      <li><span className="propname">cost per launch:</span><span className="propvalue">${rocket.cost_per_launch}</span></li>
                    </ul>
                  </div>
                </div>
                <p className="description">{rocket.description}</p>
              </section>
              <section id="pad" className="rocketinfo">
                <h2>launch pad</h2>
                <hr/>
                <div className="sectiontable">
                  <div className="sectiontablehalf">
                    <ul  className="sectionpops">
                      <li><span className="propname">name:</span><span className="propvalue">{launchSite.full_name}</span></li>
                    </ul>
                  </div>
                  <div className="sectiontablehalf">
                    <ul  className="sectionpops">
                      <li><span className="propname">location:</span><span className="propvalue">{launchSite.location.name}, {launchSite.location.region}</span></li>
                    </ul>
                  </div>
                </div>
                <p className="description">{launchSite.details}</p>
              </section>
            </div>
          </section>
          <section className="launchlinks">
            <img src={rocketImg} alt="rocket"/>
            <div className="linkscontent">
              <span className='linkstext'>mission links</span>
              <ul className='linkslist'>
                <li><a href='#'>reddit campaign</a></li>
                <li><a href='#'>presskit</a></li>
                <li><a href='#'>mission video</a></li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default MainContent;
