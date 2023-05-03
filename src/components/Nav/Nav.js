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
            <a class="menu__item" href="/Music">
              Music
            </a>
          </li>
          <li>
            <a class="menu__item" href="/Contact">
              Contact
            </a>
          </li>
          <li>
            <div className="icons">
              <SocialIcon url="https://www.facebook.com/pinkrangermusic" />
              <SocialIcon url="https://instagram.com/pinkranger.x?igshid=MWI4MTIyMDE=" />
            </div>
          </li>
        </ul>


      </div>


  );
}
