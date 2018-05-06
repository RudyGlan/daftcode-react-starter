import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/MainContent.sass";
import rocketImg from "../../assets/img/rocket.png";
import iridiumLogo from "../../assets/img/iridium-5-logo.png";
import Counter from '../Counter';


class MainContent extends React.Component {

  render() {
    const {launch, launchSite, rocket} = this.props;
    let date = new Date(launch.launch_date_local);
    console.log(`sss ${date.getDate()}`);
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let locale = "en-us";
    let month =  date.toLocaleString(locale, { month: "long" });
    let readydate = `${day} ${month} ${date.getFullYear()}`
    console.log(readydate);

    return (
      <main>
        <article>
          <section className="launchinfo">
            <div className="baseInfo half">
              <span className="launchdate">{readydate}</span>
              <h1>{rocket.id} next {launch.flight_number} launch</h1>
              <Counter date={date}/>
              <img src={launch.links.mission_patch} alt="iridium logo"/>
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
                <li><a href={launch.links.reddit_campaign} target='_blank'>reddit campaign</a></li>
                <li><a href={launch.links.presskit} target='_blank'>presskit</a></li>
                <li><a href={launch.links.video_link} target='_blank'>mission video</a></li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default MainContent;
