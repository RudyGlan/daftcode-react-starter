import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/space_x_logo_bw_centered.png"
import "../../styles/components/launchdetails/Header.sass";

class Header extends React.Component {
  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  };

  state = {
    selectedItem: undefined
  };

  componentDidMount() {
    console.debug("Hi! Header here 👍");
  };

  changeItem = event => {
    const selectedItem = event.currentTarget.name;
    this.setState({ selectedItem });
  };

  render() {
    const { items } = this.props;
    const { selectedItem } = this.state;

    return (
      <header>
        <div className="spacexlogo">
          <a href="http://www.spacex.com/">
            <img src={logo} alt="spacex_logo"/>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
