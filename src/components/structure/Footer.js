import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/structure/Footer.sass";

class Footer extends React.Component {

  render() {

    return (
      <footer className="footer">
        <div className="socials">
          <span className="socials__text">Follow SpaceX</span>
          <span className="socials__spacer">|</span>
          <ul className="socials__list">
            <li className="socials__item">
              <a className="socials__link" href="https://twitter.com/spacex" target="_blank">twitter</a>
            </li>
            <li className="socials__item">
              <a  className="socials__link" href="https://www.youtube.com/user/spacexchannel" target="_blank">youtube</a>
            </li>
            <li className="socials__item">
              <a  className="socials__link" href="https://www.flickr.com/photos/spacex/" target="_blank">flickr</a>
            </li>
            <li className="socials__item">
              <a  className="socials__link" href="https://www.instagram.com/spacex/" target="_blank">instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer__text">
            2018 space exploration technologies corp.
        </div>
      </footer>
    );
  }
}

export default Footer;
