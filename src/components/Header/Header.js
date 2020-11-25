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
    linkedIn: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    github: <FontAwesomeIcon icon={faGithub} size="2x" />,
    behance: <FontAwesomeIcon icon={faBehance} size="2x" />,
    medium: <FontAwesomeIcon icon={faMedium} size="2x" />,
    website: <FontAwesomeIcon icon={faLink} size="2x" />,
    phone: <FontAwesomeIcon icon={faPhone} size="2x" />,
    address: <FontAwesomeIcon icon={faInbox} size="2x" />,
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
