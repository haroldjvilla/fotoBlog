import React, { useContext } from "react";
// import cursor context
import { CursorContext } from "../context/CursorContext";
//import icons
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImYoutube,
  ImLinkedin,
} from "react-icons/im";

function Socials() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.instagram.com/harold.jvilla_/" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/harold.villa.16/" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Haroldvilla22M" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCwmbd5a2ggySPHRaZU5fLaw"
            target="_blank"
          >
            <ImYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/harold-jaramillo-villa-034868240/"
            target="_blank"
          >
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
