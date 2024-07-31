import React from "react";
import DesktopNavMenu from "../../Components/desktopNavMenu";
import MobileNavMenu from "../../Components/mobileNav";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMobileNavMenu: true,
      location: window.location.pathname || "/",
      links: [
        { to: "/", name: "Home", icon: "home-outline" },
        { to: "/about", name: "About", icon: "book-outline" },
        { to: "/projects", name: "Projects", icon: "briefcase-outline" },
      ],
    };
    this.updateOpenMobileNavMenu = this.updateOpenMobileNavMenu.bind(this);
  }
  updateOpenMobileNavMenu() {
    this.setState({ openMobileNavMenu: !this.state.openMobileNavMenu });
  }
  render() {
    return (
      <>
        {/* Menu button */}
        <div>
          <button
            className="absolute z-50 block sm:hidden"
            onClick={() => {
              this.updateOpenMobileNavMenu();
            }}
          >
            <iconify-icon
              width="32px"
              height="32px"
              icon={
                this.state.openMobileNavMenu
                  ? "line-md:menu-to-close-transition"
                  : "line-md:close-to-menu-transition"
              }
            />
          </button>
        </div>
        {/* Desktop Nav */}
        <DesktopNavMenu links={this.state.links} />
        {/* Mobile Nav */}
        <MobileNavMenu
          openMobileNavMenu={this.state.openMobileNavMenu}
          links={this.state.links}
          updateOpenMobileNavMenu={this.updateOpenMobileNavMenu}
        />
      </>
    );
  }
}

export default NavigationMenu;
