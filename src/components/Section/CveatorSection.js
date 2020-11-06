import React from "react";
import CveatorSectionEntry from "./Entry/CveatorSectionEntry";
import CveatorSectionMeasure from "./Measure/CveatorSectionMeasure";

const CveatorSection = ({ title, entries, measures }) => {
  return (
    <div className="cveator__section">
      <h2 className="cveator__section__title">
        <span>{title}</span>
      </h2>
      <div className="cveator__section-entries">
        {entries &&
          entries.map((entry) => {
            return <CveatorSectionEntry key={entry.subtitle} {...entry} />;
          })}
      </div>
      <div className="cveator__section-measures">
        {measures &&
          measures.map((measure) => {
            return <CveatorSectionMeasure key={measure.name} {...measure} />;
          })}
      </div>
    </div>
  );
};

export default CveatorSection;
