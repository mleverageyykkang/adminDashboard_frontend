import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const [openItems, setOpenItems] = useState({});

  const toggleItems = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key], // 클릭 시 열리고 닫히도록 토글
    }));
  };

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a className="simple-text" href="#" style={{ color: "#f86400" }}>
            Marketing Leverage
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  key={key}
                  className={prop.items ? "" : activeRoute(prop.path)}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active font-weight-bold"
                    onClick={(e) => {
                      if (prop.items) {
                        e.preventDefault(); // 기본 링크 동작 방지
                        toggleItems(key); // 아이템 열기/닫기
                      }
                    }}
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                  {prop.items &&
                    openItems[key] && ( // 열려 있는 상태일 때만 렌더링
                      <ul style={{ paddingLeft: "20px" }}>
                        {prop.items.map((item, subKey) => (
                          <li
                            key={subKey}
                            className={activeRoute(item.path)}
                            style={{ listStyleType: "none", padding: "5px 0" }}
                          >
                            <NavLink
                              to={item.layout + item.path}
                              className="nav-link"
                              activeClassName="active"
                            >
                              {item.name}
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
