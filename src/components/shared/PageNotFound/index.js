/* Package JSON Import will be here */
import React, { Component } from "react";
/* Package JSON Import will be here */

/* Project Import will be here */
import "./script";
/* Project Import will be here */

/* Styles will be here */
import "./PageNotFound.css";
/* Styles will be here */

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="body">
        <div className="moving-zone">
          <div className="popup">
            <div className="popup-content">
              <div className="popup-text">
                404
                <br />
                Page Not Found !
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageNotFound.displayName = "PageNotFound";
