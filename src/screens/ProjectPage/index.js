import React, { Component, Fragment } from "react";
import { Layout } from "antd";

import MenuNavigations from "components/shared/MenuNavigations";
import { Menus } from "constants/AppConstants";
import { ProjectRoutes } from "config/routes";

const { Content, Footer, Sider } = Layout;

const MenuData = [
  // {
  //   menuId: 1,
  //   menuName: "Back To Projects",
  //   url: "/welcome"
  // },
  {
    menuId: 1,
    menuName: "Dashboard",
    url: "/project/overview/1"
  },
  {
    menuId: 2,
    menuName: "Script Breakdown",
    url: "/project/script"
  },
  {
    menuId: 3,
    menuName: "Actors",
    url: "/project/actor"
  },
  {
    menuId: 4,
    menuName: "Location",
    url: "/project/location"
  },
  {
    menuId: 5,
    menuName: "ART/SET",
    url: "/project/art/set"
  },
  {
    menuId: 6,
    menuName: "Costumes",
    url: "/project/costumes"
  },
  {
    menuId: 7,
    menuName: "Makeup",
    url: "/project/makeup"
  },
  {
    menuId: 8,
    menuName: "VFX",
    url: "/project/vfx"
  },
  {
    menuId: 9,
    menuName: "Song",
    url: "/project/song"
  },
  {
    menuId: 10,
    menuName: "Stunt",
    url: "/project/stunt"
  }
];

class ProjectPage extends Component {
  state = {
    collapsed: false,
    user: null,
    drawerVisible: false,
    selectedMenu: Menus.DASHBOARD
  };

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
                <ProjectRoutes />
                {/* <Workspace showComponent={selectedMenu} /> */}
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

export default ProjectPage;
