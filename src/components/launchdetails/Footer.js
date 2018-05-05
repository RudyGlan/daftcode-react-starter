import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/launchdetails/Footer.sass";

class Footer extends React.Component {

  render() {

    return (
      <footer>
        <span className="lfloat">
          Follow SpaceX<span className="spacer">|</span>
        <ul className="socials">
          <li><a href="https://twitter.com/spacex" target="_blank">twitter</a></li>
          <li><a href="https://www.youtube.com/user/spacexchannel" target="_blank">youtube</a></li>
          <li><a href="https://www.flickr.com/photos/spacex/" target="_blank">flickr</a></li>
          <li><a href="https://www.instagram.com/spacex/" target="_blank">instagram</a></li>
        </ul>

        </span>
        <span className="rfloat">
            2018 space exploration technologies corp
        </span>
      </footer>
    );
  }
}

export default Footer;
