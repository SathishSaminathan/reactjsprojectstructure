import React, { Component, Fragment } from "react";
import { Menu, Icon } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Icons, Menus } from "constants/AppConstants";
import IconComponent from "../IconComponent";
import "./MenuNavigations.css";
const { SubMenu } = Menu;

class MenuNavigations extends Component {
  onSelectMenu = ({ key }) => {
    this.props.onSelectMenu(key);
  };

  renderSubMenus(subMenus) {
    let subMenuTemplate = [];
    let menuName = "";
    let iconName = "";
    subMenus.map((subMenu, i) => {
      switch (subMenu.menuName) {
        case Menus.CAST:
          menuName = Menus.CAST;
          iconName = Icons.APPROVALS;
          break;
        case Menus.HERO_AUDITION:
          menuName = Menus.HERO_AUDITION;
          iconName = Icons.HERO_AUDITION;
          break;
        case Menus.HEROINE_AUDITION:
          menuName = Menus.HEROINE_AUDITION;
          iconName = Icons.HEROINE_AUDITION;
          break;
        default:
          break;
      }
      subMenuTemplate.push(
        <Menu.Item key={menuName}>
          <Icon type={iconName} />
          <span>
            <div>{menuName}</div>
          </span>
        </Menu.Item>
      );
      return true;
    });
    return subMenuTemplate;
  }

  renderMenus = MenuData => {
    let menuItemTemplate = [];
    let menuName = "";
    let iconName = "";
    MenuData.map((menu, i) => {
      switch (menu.menuName) {
        case Menus.DASHBOARD:
          menuName = Menus.DASHBOARD;
          iconName = Icons.DASHBOARD;
          break;
        case Menus.COLLECTION:
          menuName = Menus.COLLECTION;
          iconName = Icons.COLLECTION;
          break;
        case Menus.ACTORS:
          menuName = Menus.ACTORS;
          iconName = Icons.ACTORS;
          break;
        case Menus.ART_SET:
          menuName = Menus.ART_SET;
          iconName = Icons.ART_SET;
          break;
        case Menus.COSTUMES:
          menuName = Menus.COSTUMES;
          iconName = Icons.COSTUMES;
          break;
        case Menus.SCRIPTS_BREAKDOWN:
          menuName = Menus.SCRIPTS_BREAKDOWN;
          iconName = Icons.SCRIPTS_BREAKDOWN;
          break;
        case Menus.APPROVALS:
          menuName = Menus.APPROVALS;
          iconName = Icons.APPROVALS;
          break;
        case Menus.OVERVIEW:
          menuName = Menus.OVERVIEW;
          iconName = Icons.OVERVIEW;
          break;
        case Menus.LOCATION_AUDITION:
          menuName = Menus.LOCATION_AUDITION;
          iconName = Icons.OVERVIEW;
          break;
        case Menus.MAKEUP:
          menuName = Menus.MAKEUP;
          iconName = Icons.OVERVIEW;
          break;
        case Menus.VFX:
          menuName = Menus.VFX;
          iconName = Icons.OVERVIEW;
          break;
        case Menus.SONG:
          menuName = Menus.SONG;
          iconName = Icons.OVERVIEW;
          break;
        case Menus.STUNT:
          menuName = Menus.STUNT;
          iconName = Icons.OVERVIEW;
          break;
        case Menus.SCENE_OVERVIEW:
          menuName = Menus.SCENE_OVERVIEW;
          iconName = Icons.OVERVIEW;
          break;
        default:
          menuName = "Back to Projects";
        // iconName = Icons.COLLECTION;
      }
      console.log(menuName);
      if (menu.subMenus) {
        menuItemTemplate.push(
          <SubMenu
            key={menu.menuName}
            title={
              <span>
                <Icon type="mail" />
                {menu.menuName}
              </span>
            }
          >
            <Menu.ItemGroup>
              {this.renderSubMenus(menu.subMenus)}
            </Menu.ItemGroup>
          </SubMenu>
        );
      } else {
        menuItemTemplate.push(
          <Menu.Item key={menuName}>
            <Icon>
              <IconComponent name={Icons.VIDEO_CAMERA} />
            </Icon>
            <span>
              <div>{menuName}</div>
            </span>
            <Link to={menu.url} />
          </Menu.Item>
        );
      }
      return true;
    });
    return menuItemTemplate;
  };

  render() {
    const { MenuData } = this.props;
    return (
      <Fragment>
        {/* <div className="menuContainer">
          <div className="nameArea">
            <div className="userName">{this.props.currentUser && this.props.currentUser.name.firstName}</div>
            <div className="projectName">Project Name</div>
          </div>
        </div> */}
        <Menu
          onSelect={this.onSelectMenu}
          mode="vertical"
          inlineCollapsed={true}
          theme="light"
          defaultSelectedKeys={[Menus.DASHBOARD]}
        >
          {this.renderMenus(MenuData)}
        </Menu>
      </Fragment>
    );
  }
}

MenuNavigations.propTypes = {
  onSelectMenu: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    accessToken: user.accessToken
  };
};

export default connect(
  mapStateToProps,
  null
)(MenuNavigations);
