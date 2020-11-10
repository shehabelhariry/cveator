import React from "react";
import { useSelector } from "react-redux";
import { sections } from "../../../sections";
import Header from "../../Header/Header";
import CveatorSection from "../../Section/CveatorSection";

const Classic = () => {
  const headerInfo = useSelector((state) => {
    return {
      name: `${state.basicInfo.firstName} ${state.basicInfo.lastName}`,
      title: state.basicInfo.title,
      links: state.socialLinks.links,
    };
  });
  return (
    <div className="cveator App">
      <div className="cveator-container">
        <Header {...headerInfo} />
        <div className="cveator__section-layout">
          {sections.map((section) => {
            return <CveatorSection {...section} key={section.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Classic;
