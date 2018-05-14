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

  getTableSection() {
    const {launches, onLaunchClick} = this.props;

    if (launches.length > 0) {
      let leftItems =[];
      let rightItems =[];

      let j =0;
      while(j<launches.length){
        leftItems.push(launches[j]);
        if(j+1<launches.length) rightItems.push(launches[j+1]);
        j+=2;
      }

      const tableFieldsLeft = leftItems.map(item => (
        <div className="chart__item" key={item.flight_number} onClick={onLaunchClick}>
          <span className="chart__item-date">{ `${this.getDate(item.launch_date_local)}` }</span>
          <span className="chart__item-arrow icon-arrow icon-arrow-left">
            <img
              src={arrowPointerSrc}
              alt=""
            />
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
        <div className="chart__item" key={item.flight_number} onClick={onLaunchClick}>
          <span className="chart__item-date">{ `${this.getDate(item.launch_date_local)}` }</span>
          <span className="chart__item-arrow">
            <span className="icon-arrow icon-arrow-right">
              <img
                src={arrowPointerSrc}
                alt=""
              />
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
          { tableFieldsRight.length > 0 ? (<div className="chart__table-column chart__table-column-right">{ tableFieldsRight }</div>) : null }
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
          {this.getTableSection()}
        </div>
      </div>
    );
  }
}

export default ListBody;