import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faBehance,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ title, name, links, printMode, icons }) => {
  const socialMap = icons || {
    linkedIn: <FontAwesomeIcon icon={faLinkedin} />,
    github: <FontAwesomeIcon icon={faGithub} />,
    behance: <FontAwesomeIcon icon={faBehance} />,
    medium: <FontAwesomeIcon icon={faMedium} />,
    website: <FontAwesomeIcon icon={faLink} />,
    phone: <FontAwesomeIcon icon={faPhone} />,
    address: <FontAwesomeIcon icon={faInbox} />,
  };

  const svgToBase64Img = (component) => {
    return <img alt="icon" src={component} />;
  };

  return (
    <div className="cveator__header">
      <h1 className="cveator__header__title">{name}</h1>
      <p className="cveator__header__job">{title}</p>
      <div className="cveator__sepetator" />
      <div className="cveator__header-contact">
        {links.map((link) => {
          const urlParts = link ? link.url.split("/") : "";
          return (
            <a className="cveator__contact-item" href={link.url}>
              <i>
                {printMode
                  ? svgToBase64Img(socialMap[link.type])
                  : socialMap[link.type]}
              </i>
              <span>{urlParts[urlParts.length - 1]}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
