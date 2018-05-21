import React from "react";
import PropTypes from "prop-types";

class DetailsControls extends React.Component {

  render() {
    const {launch} = this.props;

    return (
        <div>
        {launch ? 
        <div className="details__controls">
            <div className="details__controls-content">
                <h1 className="details__controls-title">Mission links</h1>
                <ul className="details__actions">
                    <li className="details__action">
                        <a href={launch.links.reddit_campaign}>Reddit campaign</a>
                    </li>
                    <li className="details__action">
                        <a href={launch.links.presskit}>Presskit</a>
                    </li>
                    <li className="details__action">
                        <a href={launch.links.video_link}>Mission video</a>
                    </li>
                </ul>
            </div>
        </div> :''}
        </div>
    );
  }
}

export default DetailsControls;
