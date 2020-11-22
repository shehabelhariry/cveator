import React from "react";
import { useSelector } from "react-redux";
import { sections } from "../../../sections";
import Header from "../../Header/Header";
import CveatorSection from "../../Section/CveatorSection";

function formatDate(start, end) {
  const fd = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return `${fd(start)} - ${end !== "present" ? fd(end) : "present"}`;
}

const Classic = () => {
  const { headerInfo, storeSection } = useSelector((state) => {
    console.log(state);
    return {
      headerInfo: {
        name: `${state.basicInfo.firstName} ${state.basicInfo.lastName}`,
        title: state.basicInfo.title,
        links: [
          state.basicInfo.phone
            ? { id: "-1", type: "phone", url: state.basicInfo.phone }
            : null,
          state.basicInfo.email
            ? { id: "-2", type: "address", url: state.basicInfo.email }
            : null,
          ...state.socialLinks.links,
        ].filter((i) => i),
      },
      storeSection: [
        {
          title: "Work Experience",
          areaKey: "work_experience",
          entries: state.experiences.entries.map((experience) => {
            return {
              title: experience.title,
              date: formatDate(experience.start, experience.end),
              subtitle: experience.employer,
              description:
                experience.description !== ""
                  ? experience.description.split(/\n/).map((i) => `${i}`)
                  : null,
            };
          }),
        },
        {
          title: "Education",
          areaKey: "education",
          entries: state.education.entries.map((educationItem) => {
            return {
              title: educationItem.title,
              date: formatDate(educationItem.start, educationItem.end),
              subtitle: educationItem.school,
              description:
                educationItem.description !== ""
                  ? educationItem.description.split(/\n/).map((i) => `${i}`)
                  : null,
            };
          }),
        },
        {
          title: "Skills",
          areaKey: "skills",
          measures: state.skills.items.map((item) => {
            return {
              name: item.label,
            };
          }),
        },
        {
          title: "Languages",
          areaKey: "languages",
          measures: state.languages.items.map((item) => {
            return {
              name: item.label,
            };
          }),
        },
      ],
    };
  });

  console.log(sections);

  return (
    <div className="cveator App">
      <div className="cveator-container">
        <Header {...headerInfo} />
        <div className="cveator__section-layout">
          {storeSection.map((section) => {
            return <CveatorSection {...section} key={section.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Classic;
