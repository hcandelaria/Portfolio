import React from 'react';
import IconLink from '../iconLink';

const FooterNav = () => {
  return (
    <>
      <li
        id='nav-footer'
        data-testid='nav-footer'
        className='text-center relative items-center space-x-6 sm:space-x-0'
      >
        <IconLink link='https://github.com/hcandelaria' icon='logo-github' />
        <IconLink link='https://twitter.com/gabriel66_7' icon='logo-twitter' />
        <IconLink
          link='https://www.linkedin.com/in/hector-candelaria-986347136/'
          icon='logo-linkedin'
        />
        <IconLink
          link='https://www.instagram.com/gabriel66_7/'
          icon='logo-instagram'
        />
      </li>
    </>
  );
};

export default FooterNav;
