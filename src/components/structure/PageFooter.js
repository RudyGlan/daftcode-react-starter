import React from "react";
import './PageFooter.sass';
//import "../../styles/components/structure/Footer.sass";

class PageFooter extends React.Component {

  render() {

    return (
      <div className="page-footer">
        <div className="page-footer__content">
          <div className="page-footer__social">
            <span className="page-footer__social-lead">Follow SpaceX</span>
            <ul className="page-footer__social-links">
              <li className="page-footer__social-link">
                <a href="http://twitter.com/">Twitter</a>
              </li>
              <li className="page-footer__social-link">
                <a href="http://youtube.com/">Youtube</a>
              </li>
              <li className="page-footer__social-link">
                <a href="http://flickr.com/">Flickr</a>
              </li>
              <li className="page-footer__social-link">
                <a href="http://instagram.com/">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="page-footer__copyright">
            2018 Space Exploration Technologies Corp.
          </div>
        </div>
      </div>
      //   <div className="socials">
      //     <span className="socials__text">Follow SpaceX</span>
      //     <span className="socials__spacer">|</span>
      //     <ul className="socials__list">
      //       <li className="socials__item">
      //         <a className="socials__link" href="https://twitter.com/spacex" target="_blank">twitter</a>
      //       </li>
      //       <li className="socials__item">
      //         <a  className="socials__link" href="https://www.youtube.com/user/spacexchannel" target="_blank">youtube</a>
      //       </li>
      //       <li className="socials__item">
      //         <a  className="socials__link" href="https://www.flickr.com/photos/spacex/" target="_blank">flickr</a>
      //       </li>
      //       <li className="socials__item">
      //         <a  className="socials__link" href="https://www.instagram.com/spacex/" target="_blank">instagram</a>
      //       </li>
      //     </ul>
      //   </div>
      //   <div className="footer__text">
      //       2018 space exploration technologies corp.
      //   </div>
      // </div>
    );
  }
}

export default PageFooter;
