import React, { Component, Fragment } from "react";
import { Layout, Button, Breadcrumb } from "antd";

import DrawerComponent from "components/shared/DrawerComponent";
import MenuNavigations from "components/shared/MenuNavigations";
import Workspace from "components/shared/Workspace";
import { Menus } from "constants/AppConstants";
import { WelcomeRoutes, ProjectRoutes } from "config/routes";

const { Content, Footer, Sider } = Layout;

const MenuData = [
  {
    menuId: 1,
    menuName: "Dashboard",
    url: "/projects"
  },
  {
    menuId: 2,
    menuName: "Approvals",
    url: "/approvals"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      user: null,
      drawerVisible: false,
      selectedMenu: Menus.DASHBOARD
    };
    if (window.performance) {
      if (performance.navigation.type === 1) {
        // alert("This page is reloaded");
      } else {
        // alert("This page is not reloaded");
      }
    }
  }

  componentWillMount() {
    window.addEventListener("resize", this.resize());
  }
  resize = () => {
    this.setState({ isMobileView: window.innerWidth <= 760 ? true : false });
  };

  onDrawerClose = () => {
    this.setState({ drawerVisible: false });
  };

  onSelectMenu = key => {
    this.setState({ selectedMenu: key });
  };

  render() {
    const { drawerVisible, selectedMenu, isMobileView } = this.state;

    return (
      <Fragment>
        {/* <DrawerComponent visible={drawerVisible} onClose={this.onDrawerClose} /> */}
        <Layout style={{ minHeight: "100%" }}>
          <Sider collapsed={isMobileView}>
            <MenuNavigations
              MenuData={MenuData}
              onSelectMenu={this.onSelectMenu}
            />
          </Sider>
          <Layout>
            {/* <Header style={{ background: "#000000", padding: 0 }} /> */}
            <Content style={{ margin: "0 16px", position: "relative" }}>
              {/* {selectedMenu} */}
              {/* <div
                style={{
                  backgroundColor: "red",
                  position: "absolute",
                  borderRadius: "10px",
                  right: "-5px",
                  top: "5px"
                }}
              >
                <Button
                  type="primary"
                  icon="setting"
                  size="default"
                  onClick={() => this.setState({ drawerVisible: true })}
                />
              </div> */}
              <div
                style={{
                  padding: 24,
                  background: "#fff",
                  minHeight: 360,
                  marginTop: "20px"
                }}
              >
                <WelcomeRoutes />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default Home;
