import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLink from '../iconLink';
import Thumbnail from '../thumbnail';

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavMenu: false,
      location: window.location.pathname || '/',
      links: [
        { to: '/', name: 'Home', icon: 'home-outline' },
        { to: '/about', name: 'About', icon: 'book-outline' },
        { to: '/projects', name: 'Projects', icon: 'briefcase-outline' },
      ],
      variants: {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
      },
    };
    this.updateMobileNavMenu = this.updateMobileNavMenu.bind(this);
  }
  updateMobileNavMenu() {
    this.setState({ mobileNavMenu: !this.state.mobileNavMenu });
  }
  render() {
    return (
      <>
        {/* Desktop Nav */}
        <nav
          id='nav-container'
          data-testid='nav-container'
          className={
            'bg-black-russian-800 fixed top-0 h-screen hidden sm:z-10 sm:block w-40'
          }
        >
          <ul id='nav-menu' data-testid='nav-menu'>
            <li className='px-4'>
              <Thumbnail />
            </li>
            {this.state.links.map((link) => {
              return (
                <li
                  className='min-w-full menu-link hover:shadow-[inset_-2px_0_0_#0ca5e9] hover:bg-black-russian-700'
                  key={link.name}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-white relative w-100 items-center px-6 active'
                        : 'text-white relative w-100 items-center px-6'
                    }
                  >
                    <span className='text-2xl pr-3'>{link.name}</span>
                    <ion-icon name={link.icon} />
                  </NavLink>
                </li>
              );
            })}
            {/* Nav Footer */}
            <li id='nav-footer' data-testid='nav-footer' className='d-grid'>
              <div className='relative items-center'>
                <IconLink
                  link='https://github.com/hcandelaria'
                  icon='logo-github'
                />
                <IconLink
                  link='https://twitter.com/gabriel66_7'
                  icon='logo-twitter'
                />
                <IconLink
                  link='https://www.linkedin.com/in/hector-candelaria-986347136/'
                  icon='logo-linkedin'
                />
                <IconLink
                  link='https://www.instagram.com/gabriel66_7/'
                  icon='logo-instagram'
                />
              </div>
            </li>
          </ul>
        </nav>
        {/* Menu button */}
        <div className='bg-black-russian-900 relative'>
          <button
            className='z-50 block absolute sm:hidden'
            onClick={() => {
              this.updateMobileNavMenu();
            }}
          >
            <ion-icon
              size='large'
              name={this.state.mobileNavMenu ? 'close' : 'menu'}
            />
          </button>
        </div>
        {/* Mobile Nav */}
        <nav
          className={`bg-black-russian-900 inset-x-0 pt-10  sm:hidden ${
            this.state.mobileNavMenu ? 'fixed z-20' : 'hidden'
          }`}
        >
          <motion.div
            className='bg-black-russian-900 h-screen'
            initial={this.state.variants.closed}
            animate={this.state.mobileNavMenu ? 'open' : 'closed'}
            variants={this.state.variants}
            transition={{ duration: 0.3 }}
          >
            <ul id='mobile-nav-menu' data-testid='mobile-nav-menu'>
              <li className='px-40'>
                <Thumbnail />
              </li>
              {this.state.links.map((link) => {
                return (
                  <div
                    key={link.name}
                    className='mobile-link row-span-full text-white text-center hover:bg-black-russian-500 hover:shadow-[inset_-2px_0_0_#0ca5e9]'
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => (isActive ? 'active ' : '')}
                      onClick={() => {
                        this.updateMobileNavMenu();
                      }}
                    >
                      <span className='text-3xl pr-3'>{link.name}</span>
                      <ion-icon name={link.icon} />
                    </NavLink>
                  </div>
                );
              })}
              {/* Mobile Nav Footer */}
              <li
                id='mobile-nav-footer'
                data-testid='mobile-nav-footer'
                className='d-grid text-center'
              >
                <div className='relative items-center space-x-6'>
                  <IconLink
                    link='https://github.com/hcandelaria'
                    icon='logo-github'
                  />
                  <IconLink
                    link='https://twitter.com/gabriel66_7'
                    icon='logo-twitter'
                  />
                  <IconLink
                    link='https://www.linkedin.com/in/hector-candelaria-986347136/'
                    icon='logo-linkedin'
                  />
                  <IconLink
                    link='https://www.instagram.com/gabriel66_7/'
                    icon='logo-instagram'
                  />
                </div>
              </li>
            </ul>
          </motion.div>
        </nav>
      </>
    );
  }
}

export default NavigationMenu;
