import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a className="simple-text" href="#">
            Marketing Leverage
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li key={key}>
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                  {prop.children && (
                    <ul className="nested-nav">
                      {prop.children.map((child) => (
                        <li
                          key={child.uid}
                          className={activeRoute(child.path)}
                          style={{ listStyleType: "none" }}
                        >
                          <NavLink
                            to={child.layout + child.path}
                            className="nav-link"
                            activeClassName="active"
                          >
                            <p>{child.name}</p>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
