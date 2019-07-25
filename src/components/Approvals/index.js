import React, { Component } from "react";
import {
  InfoWindow,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withStateHandlers } from "recompose";
import { Button, Modal } from "antd";

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null
    }),
    {
      onMapClick: ({ isMarkerShown }) => e => ({
        markerPosition: e.latLng,
        isMarkerShown: true
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={e => {
      props.onMapClick(e);
      console.log("lat...", e.ra.x);
      console.log("long...", e.ra.y);
    }}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
));

class Approvals extends Component {
  componentDidMount() {
    console.log("componentDidMount Approvals");
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      />
    ));
    return (
      <div>
        <Button onClick={this.showModal}>Add Location</Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="location-modal"
          destroyOnClose
        >
          <div style={{ height: "100%" }}>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAX7iIf-pqfdU-hc9z8F9u0nfyYDb0mekc"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Approvals;
