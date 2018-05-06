import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/structure/MainContent.sass";

class MainContent extends React.Component {

  render() {
    const {rocket} = this.props;
    return (
        <section id="rocketdetails" className="rocketinfo">
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
    );
  }
}

export default MainContent;
