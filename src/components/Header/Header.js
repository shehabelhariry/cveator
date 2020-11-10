import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faBehance,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ title, name, links }) => {
  const socialMap = {
    linkedIn: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    github: <FontAwesomeIcon icon={faGithub} size="2x" />,
    behance: <FontAwesomeIcon icon={faBehance} size="2x" />,
    medium: <FontAwesomeIcon icon={faMedium} size="2x" />,
    website: <FontAwesomeIcon icon={faLink} size="2x" />,
  };

  return (
    <div className="cveator__header">
      <h1 className="cveator__header__title">{name}</h1>
      <p className="">{title}</p>
      <div className="cveator__sepetator" />
      <div className="cveator__header-contact">
        {links.map((link) => {
          const urlParts = link.url.split("/");
          return (
            <a className="cveator__contact-item" href={link.url}>
              <i>{socialMap[link.type]}</i>
              <span>{urlParts[urlParts.length - 1]}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
