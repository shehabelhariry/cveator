import React from "react";

const CveatorSectionEntry = ({ title, subtitle, date, description }) => {
  return (
    <div className="cveator__section-entry">
      <h3 className="cveator__section-entry__title">{title}</h3>
      <h3 className="cveator__section-entry__subtitle">{subtitle}</h3>
      <p className="cveator__section-entry__date">{date}</p>
      {description && (
        <div className="cveator__section-entry__description">
          <ul>
            {description.map((descItem) => {
              return <li key={descItem}>{descItem}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CveatorSectionEntry;
