import React from "react";
import PropTypes from "prop-types";
import arrowPointerSrc from '../../../assets/img/arrow_pointer.png';
import './ListBody.sass';


class ListBody extends React.Component {

  getDate(value){
    let date = new Date(value);
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let locale = "en-us";
    let month =  date.toLocaleString(locale, { month: "long" });
    let readydate = `${day} ${month} ${date.getFullYear()}`
    return readydate;
  }

  handleLaunchClick = (event) => {
    this.props.onLaunchClick(event.currentTarget.id);
  }
  getTableSection() {
    const {launches} = this.props;

    if (launches && launches.length > 0) {
      let leftItems =[];
      let rightItems =[];

      let j =0;
      while(j<launches.length){
        leftItems.push(launches[j]);
        if(j+1<launches.length) rightItems.push(launches[j+1]);
        j+=2;
      }

      const tableFieldsLeft = leftItems.map(item => (
        <div className="chart__item" id={item.flight_number} key={item.flight_number} onClick={this.handleLaunchClick}>
          <span className="chart__item-date">{ `${this.getDate(item.launch_date_local)}` }</span>
          <span className="chart__item-arrow icon-arrow icon-arrow-left">
            <img
              src={arrowPointerSrc}
              alt=""
            />
            <span className="dot dot-left"></span>
          </span>
          <span className="chart__item-details">
            <span className="chart__item-label">{ `rocket:` }</span>
            <span className="chart__item-value">{ `${item.rocket.rocket_id}` }</span>
            <span className="chart__item-line">{`|`}</span>
            <span className="chart__item-label">{ `launch site:` }</span>
            <span className="chart__item-value">{ `${item.launch_site.site_name_long}` }</span>
          </span>
        </div>
      ));
      
      const tableFieldsRight = rightItems.map(item => (
        <div className="chart__item" id={item.flight_number} key={item.flight_number} onClick={this.handleLaunchClick}>
          <span className="chart__item-date">{ `${this.getDate(item.launch_date_local)}` }</span>
          <span className="chart__item-arrow">
            <span className="icon-arrow icon-arrow-right">
              <img
                src={arrowPointerSrc}
                alt=""
              />
              <span className="dot dot-right"></span>
            </span>
          </span>
          <span className="chart__item-details">
            <span className="chart__item-label">{ `rocket:` }</span>
            <span className="chart__item-value">{ `${item.rocket.rocket_id}` }</span>
            <span className="chart__item-line">{`|`}</span>
            <span className="chart__item-label">{ `launch site:` }</span>
            <span className="chart__item-value">{ `${item.launch_site.site_name_long}` }</span>
          </span>
        </div>
      ));

      return (
        <div className="chart__table">
          <div className="chart__table-column chart__table-column-left">{ tableFieldsLeft }</div>
          <div className="chart__table-column chart__table-column-right">{ tableFieldsRight }</div>
        </div>
      );
    }

    return null;
  }

  render() {
    const {launches, onLaunchClick} = this.props;
    return (
      <div className="list__body">
        <div className="list__body-content">
          {this.props.launches && this.props.launches.length > 0 ? this.getTableSection() : <div className="list__noitem"><span className="list__noitem-text">sorry, no launches found</span></div>}
        </div>
      </div>
    );
  }
}

export default ListBody;
