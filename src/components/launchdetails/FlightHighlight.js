import React from "react";
import PropTypes from "prop-types";
import Counter from '../general/Counter';

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('MainStore')
@observer
class FlightHighlight extends React.Component {

  render() {
    const {launch, isError} = this.props.MainStore.listState;
    let date, day, month, readydate, rocket_name;
    if(!isError && launch){
      rocket_name = launch.rocket.rocket_name || "";
    
      date = new Date(launch.launch_date_local);
      day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
      let locale = "en-us";
      month =  date.toLocaleString(locale, { month: "long" });
      readydate = `${day} ${month} ${date.getFullYear()}`
    }

    return (
      
      <section className="flight__highlight">
      {!isError && launch ? 
        <div>
          <span className="flight__highlight-date">{readydate}</span>
          <h1 className="flight__highlight-name">{`${rocket_name} launch`}</h1>
          <Counter date={date}/>
          <img className="flight__highlight-patch" src={launch.links.mission_patch_small} alt="mission patch"/> 
        </div> : null
      }
      </section> 

    );
  }
}

export default FlightHighlight;
