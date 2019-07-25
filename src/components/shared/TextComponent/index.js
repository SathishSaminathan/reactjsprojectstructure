import React, { Component } from "react";
import { connect } from "react-redux";

import "./TextComponent.css";

class TextComponent extends Component {
  render() {
    const { style, customize } = this.props;
    return (
      <span
      className={customize && "textStyle"}
        style={
          customize
            ? { ...style, fontSize: this.props.fontStyle.fontSize }
            : { ...style }
        }
      >
        {this.props.children}
      </span>
    );
  }
}

const mapStateToProps = ({ fontStyle }) => {
  return {
    fontStyle: fontStyle
  };
};

export default connect(
  mapStateToProps,
  null
)(TextComponent);
