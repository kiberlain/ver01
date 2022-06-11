import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = (session) => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <header className="Header">
      <div className="Container">
        <a href="/" className="Logo">
          LOGO
        </a>
        <nav className="Nav">
          <ul className="NavList">
            <li className="NavItem">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="NavLink"
              >
                Задачи
              </NavLink>
            </li>
            <li className="NavItem">
              <NavLink
                to="topics"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="NavLink"
              >
                Темы
              </NavLink>
            </li>
            <li className="NavItem">
              <NavLink
                to="users"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="NavLink"
              >
                Пользователи
              </NavLink>
            </li>

            {!session ? (
              <li className="NavItem">
                <NavLink
                  to="login"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="NavLink"
                >
                  Войти
                </NavLink>
              </li>
            ) : (
              <li className="NavItem">
                <NavLink
                  to="account"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="NavLink"
                >
                  Профиль
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
