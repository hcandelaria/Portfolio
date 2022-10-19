import React from 'react';
import DesktopNavMenu from '../../Components/desktopNavMenu';
import MobileNavMenu from '../../Components/mobileNav';

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMobileNavMenu: true,
      location: window.location.pathname || '/',
      links: [
        { to: '/', name: 'Home', icon: 'home-outline' },
        { to: '/about', name: 'About', icon: 'book-outline' },
        { to: '/projects', name: 'Projects', icon: 'briefcase-outline' },
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
            className='z-50 block absolute sm:hidden'
            onClick={() => {
              this.updateOpenMobileNavMenu();
            }}
          >
            <ion-icon
              size='large'
              name={this.state.openMobileNavMenu ? 'close' : 'menu'}
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
