import React from "react";
import "./nav.css";
import { SocialIcon } from "react-social-icons";


export default function Nav() {
  return (
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="menu__item" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="menu__item" href="/art">
              Art
            </a>
          </li>
          <li>
            <a className="menu__item" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <div className="icons">
              <SocialIcon url="https://instagram.com/animahoitt.art?igshid=YmMyMTA2M2Y=" />
            </div>
          </li>
        </ul>


      </div>


  );
}
