import React, { Component } from "react";

import { Images } from "assets/images";

import "./Loader.css";
import TextComponent from "../TextComponent";

class LoaderComponent extends Component {
  render() {
    const { text, textColor } = this.props;

    return (
      <div className="pageContainer">
        <div className="loaderContainer">
          <div className="image">
            <img src={Images.loading} alt="loader image" />
          </div>
          <TextComponent style={{ color: textColor, fontSize: "20px" }}>
            {text}
          </TextComponent>
        </div>
      </div>
    );
  }
}

export default LoaderComponent;
