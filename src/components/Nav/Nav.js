import React from "react";
import "./nav.css";
import { SocialIcon } from "react-social-icons";


export default function Nav() {
  return (
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <a class="menu__item" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="/About">
              About
            </a>
          </li>
          <li>
            <a class="menu__item" href="/Art">
              Art
            </a>
          </li>
          <li>
            <a class="menu__item" href="/Contact">
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
