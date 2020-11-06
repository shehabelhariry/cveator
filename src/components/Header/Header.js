import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolid from "@fortawesome/free-solid-svg-icons";
import * as FaBrands from "@fortawesome/free-brands-svg-icons";

const Header = ({ title, name, links }) => {
  console.log(FaBrands, links);
  return (
    <div className="cveator__header">
      <h1 className="cveator__header__title">{name}</h1>
      <p className="">{title}</p>
      <div className="cveator__sepetator" />
      <div className="cveator__header-contact">
        {links.map((link) => {
          return (
            <a className="cveator__contact-item" href={link.url}>
              <i>
                <FontAwesomeIcon
                  icon={
                    FaBrands[link.image] ||
                    FaSolid[link.image] ||
                    FaBrands.faAccusoft
                  }
                />
              </i>
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
