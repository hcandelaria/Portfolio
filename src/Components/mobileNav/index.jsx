import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import FooterNav from "../footerNav";
import Thumbnail from "../thumbnail";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const MobileNavMenu = (props) => {
  return (
    <>
      <nav
        id="mobile-nav-container"
        data-testid="mobile-nav-container"
        className={`absolute inset-x-0 bg-black-russian-900 pt-10 sm:hidden ${
          props.openMobileNavMenu ? "fixed z-20" : "z-[-10]"
        }`}
      >
        <motion.div
          className="h-screen bg-black-russian-900"
          initial={variants.closed}
          animate={props.openMobileNavMenu ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <ul id="mobile-nav-menu" data-testid="mobile-nav-menu">
            <li className="px-[140px]">
              <Thumbnail />
            </li>
            {props.links.map((link) => {
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => {
                    props.updateOpenMobileNavMenu();
                  }}
                >
                  <li className="mobile-link row-span-full text-center text-white hover:bg-black-russian-500 hover:shadow-[inset_-2px_0_0_#0ca5e9]">
                    <span className="pr-3 text-3xl">{link.name}</span>
                    <iconify-icon width="24" height="24" icon={link.icon} />
                  </li>
                </NavLink>
              );
            })}
            {/* Nav Footer */}
            <FooterNav />
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default MobileNavMenu;
