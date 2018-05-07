import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/Details.sass";

class MainContent extends React.Component {

  render() {
    const {rocket} = this.props;
    return (
        <section id="rocketdetails" className="details">
            <h2 className="details__title">rocket</h2>
            <hr className="details__line"/>
            <div className="infotable">
                <div className="infotable-half">
                    <ul className="infotable__props">
                        <li className="infotable__item"><span className="infotable__name">name:</span><span className="infotable__value">{rocket.name}</span></li>
                        <li className="infotable__item"><span className="infotable__name">company:</span><span className="infotable__value">{rocket.company}</span></li>
                        <li className="infotable__item"><span className="infotable__name">height:</span><span className="infotable__value">{rocket.height.meters}m / {rocket.height.feet}ft</span></li>
                        <li className="infotable__item"><span className="infotable__name">diameter:</span><span className="infotable__value">{rocket.diameter.meters}m / {rocket.diameter.feet}ft</span></li>
                        <li className="infotable__item"><span className="infotable__name">mass:</span><span className="infotable__value">{rocket.mass.kg}kg / {rocket.mass.lb}lb</span></li>
                    </ul>
                </div>
                <div className="infotable-half">
                    <ul className="infotable__props">
                        <li className="infotable__item"><span className="infotable__name">first flight:</span><span className="infotable__value">{rocket.first_flight}</span></li>
                        <li className="infotable__item"><span className="infotable__name">country:</span><span className="infotable__value">{rocket.country}</span></li>
                        <li className="infotable__item"><span className="infotable__name">succes rate:</span><span className="infotable__value">{rocket.success_rate_pct}%</span></li>
                        <li className="infotable__item"><span className="infotable__name">cost per launch:</span><span className="infotable__value">${rocket.cost_per_launch}</span></li>
                    </ul>
                </div>
            </div>
            <p className="details__description">{rocket.description}</p>
        </section>
    );
  }
}

export default MainContent;
