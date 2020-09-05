import React from "react";
import Logo from '../Images/logo.svg';

export default function LandingPage() {
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__title-WWC">Women Who Code Boulder / Denver</div>

        <div className="header__title-small">
          <img src={Logo} alt="Career Returnship Logo" /> Career Returnship
        </div>

        <div className="header__title-large">
          Career Returnship
        </div>
      </div>

      <div className="header__nav-small-spacer"></div>
      <div className="header__nav-small">NAV</div>
    </div>
  );
}
