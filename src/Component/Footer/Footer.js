import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer overflow">
      <div className="container overflow">
        <div className="row overflow">
          {/* Column1 */}
          <div className="col overflow">
            <h4>The Siren</h4>
            <h1 className="list-unstyled overflow">
              <li>342-420-6969</li>
              <li>New Delhi, INDIA</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col overflow">
            <h4>Stuff</h4>
            <ui className="list-unstyled overflow">
              <li>Latest News</li>
              <li>Food </li>
              <li>Technologies</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col overflow">
            <h4>Contact</h4>
            <ui className="list-unstyled overflow">
              <li>Emails:- thakurbipul353@gmail.com</li>
              <li>Phone No.:- 8179726483</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row overflow">
          <p className="col-sm overflow">
            &copy;{new Date().getFullYear()} THE Shiren | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;