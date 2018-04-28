import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/launchdetails/MainContent.sass";
import rocket from "../../assets/img/rocket.png";
import "../../styles/components/launchdetails/MainContent.sass";


class MainContent extends React.Component {

  render() {

    return (
      <main>
        <article>
          <section className="launchinfo">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </section>
          <section className="launchlinks">
            <img src={rocket} alt="rocket"/>
          </section>
        </article>
      </main>
    );
  }
}

export default MainContent;
