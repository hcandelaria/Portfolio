import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterNav from '../footerNav';
import Thumbnail from '../thumbnail';
const DesktopNav = (props) => {
  return (
    <>
      <nav
        id='desktop-nav-container'
        data-testid='desktop-nav-container'
        className={
          'bg-black-russian-800 fixed top-0 h-screen hidden sm:z-10 sm:block w-40'
        }
      >
        <ul id='nav-menu' data-testid='nav-menu'>
          <li className='px-4'>
            <Thumbnail />
          </li>
          {props.links.map((link) => {
            return (
              <NavLink
                to={link.to}
                key={link.name}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <li className='text-white relative w-100 items-center px-6 min-w-full menu-link hover:shadow-[inset_-2px_0_0_#0ca5e9] hover:bg-black-russian-700'>
                  <span className='text-2xl pr-3'>{link.name}</span>
                  <ion-icon name={link.icon} />
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
