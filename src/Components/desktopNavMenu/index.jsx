import React from "react";
import { NavLink } from "react-router-dom";
import FooterNav from "../footerNav";
import Thumbnail from "../thumbnail";
const DesktopNav = (props) => {
  return (
    <>
      <nav
        id="desktop-nav-container"
        data-testid="desktop-nav-container"
        className={
          "fixed top-0 hidden h-screen w-40 bg-black-russian-800 sm:z-10 sm:block"
        }
      >
        <ul id="nav-menu" data-testid="nav-menu">
          <li className="px-4">
            <Thumbnail />
          </li>
          {props.links.map((link) => {
            return (
              <NavLink
                to={link.to}
                key={link.name}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="w-100 menu-link relative min-w-full items-center px-6 text-white hover:bg-black-russian-700 hover:shadow-[inset_-2px_0_0_#0ca5e9]">
                  <span className="pr-3 text-2xl">{link.name}</span>
                  <iconify-icon width="16" height="16" icon={link.icon} />
                </li>
              </NavLink>
            );
          })}
          {/* Nav Footer */}
          <FooterNav />
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
