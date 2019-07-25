import React, { Component } from "react";
import "./ScriptOverview.css";
import { Tabs, Row, Col } from "antd";
import CharacterCard from "components/shared/CharacterCard";
import GeneralScriptDetails from "components/GeneralScriptDetails";
import CreateLocationModal from "components/Location/AddLocationModal";
import ActorTab from "components/ActorTab";
import SetTab from "components/SetTab";
import CostumesTab from "components/CostumesTab";
import MakeupTab from "components/MakeupTab";
import Songtab from "components/songtab";
import VFXTab from "components/VFXTab";
import StuntTab from "components/Stunttab";
import LocationTab from "components/LocationTab";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

class ScriptOverview extends Component {
  constructor(props) {
    super(props);
    const panes = [
      {
        tabId: "1",
        tabName: "General",
        tabContent: (
          <GeneralScriptDetails
            handleVfxTabStatus={this.handleVfxTabStatus}
            handleSongStuntTab={this.handleSongStuntTab}
            handleSetTab={this.handleSetTab}
          />
        )
      },
      {
        tabId: "2",
        tabName: "Actors",
        tabContent: <ActorTab />
      },
      {
        tabId: "3",
        tabName: "Location",
        tabContent: <LocationTab />
      },
      {
        tabId: "5",
        tabName: "Costume",
        tabContent: <CostumesTab />
      },
      {
        tabId: "6",
        tabName: "Makeup",
        tabContent: <MakeupTab />
      }
    ];

    this.state = {
      activeKey: panes[0].tabId,
      panes
    };
  }

  handleVfxTabStatus = vfxTab => {
    console.log("activetab", vfxTab);
    if (vfxTab == "Yes") {
      let temp = this.state.panes;
      temp.splice(6, 0, {
        tabId: "7",
        tabName: "VFX",
        tabContent: <VFXTab />
      });
      this.setState({
        panes: temp
      });
    } else if (vfxTab == "No") {
      var filtereddata = this.state.panes.filter(a => a.tabName != "VFX");
      console.log("filtereddata", filtereddata);
      this.setState({
        panes: filtereddata
      });
    }
  };

  renderTabPanes = panes => {
    this.setState({
      panes
    });
  };

  handleSongStuntTab = e => {
    if (e) {
      const { panes } = this.state;
      let tempPanes = panes;

      let isSongsSelected = e.includes("Songs");
      let isStuntSelected = e.includes("Stunt");

      if (isSongsSelected) {
        let isAlreadyAvail = tempPanes.filter(a => a.tabName.includes("Songs"));
        if (isAlreadyAvail.length === 0) {
          tempPanes.push({
            tabId: "8",
            tabName: "Songs",
            tabContent: <Songtab />
          });
        }
      } else {
        tempPanes = tempPanes.filter(a => a.tabName !== "Songs");
      }

      if (isStuntSelected) {
        let isAlreadyAvail = tempPanes.filter(a => a.tabName.includes("STUNT"));
        if (isAlreadyAvail.length === 0) {
          tempPanes.push({
            tabId: "9",
            tabName: "Stunts",
            tabContent: <StuntTab />
          });
        }
      } else {
        tempPanes = tempPanes.filter(a => a.tabName !== "Stunts");
      }
      this.renderTabPanes(tempPanes);
    }
  };

  onChangeTab = activeKey => {
    this.setState({
      activeKey
    });
  };

  handleSetTab = e => {
    const { panes } = this.state;
    let tempPanes = panes;
    let isSetSelected = e != "Live";
    let isSetAvail = tempPanes.filter(a => a.tabName === "Art / Set");
    console.log(isSetAvail);
    if (isSetSelected) {
      if (isSetAvail.length === 0) {
        tempPanes.push({
          tabId: "4",
          tabName: "Art / Set",
          tabContent: <SetTab />
        });
      }
    } else {
      tempPanes = tempPanes.filter(a => a.tabName != "Art / Set");
    }
    this.renderTabPanes(tempPanes);
  };

  render() {
    return (
      <Row
        style={{
          backgroundColor: "#F0F2F5",
          minHeight: "93vh",
          maxHeight: "1000vh"
        }}
      >
        <Col
          style={{
            backgroundColor: "#fff",
            margin: "20px",
            paddingBottom: "30px"
          }}
        >
          <Tabs onChange={this.onChangeTab} activeKey={this.state.activeKey}>
            {this.state.panes.map(pane => (
              <TabPane tab={pane.tabName} key={pane.tabId}>
                <div>{pane.tabContent}</div>
              </TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default ScriptOverview;
