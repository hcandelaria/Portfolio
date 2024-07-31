import React from "react";
import IconLink from "../iconLink";

const FooterNav = () => {
  return (
    <>
      <li
        id="nav-footer"
        data-testid="nav-footer"
        className="relative items-center space-x-6 text-center sm:space-x-0"
      >
        <IconLink link="https://github.com/hcandelaria" icon="line-md:github" />
        <IconLink
          link="https://twitter.com/gabriel66_7"
          icon="line-md:twitter-x"
        />
        <IconLink
          link="https://www.linkedin.com/in/hector-candelaria-986347136/"
          icon="line-md:linkedin"
        />
        <IconLink
          link="https://www.instagram.com/gabriel66_7/"
          icon="line-md:instagram"
        />
      </li>
    </>
  );
};

export default FooterNav;
