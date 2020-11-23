/** @jsx jsx */

import { jsx } from "theme-ui";
import { updateExperience } from "../../../../slices/workExperience";
import CreatorSectionHeader from "../../CreatorSections/CreatorSectionHeader/CreatorSectionHeader";
import FormCreator from "../../FormCreator/FormCreator";

const WorkExperience = ({ entry }) => {
  const inputs = [
    {
      items: [
        {
          label: "Job Title",
          placeholder: "Job Title",
          key: "title",
          type: "text",
          styles: { flex: 1 / 2 },
        },
        {
          label: "Employer",
          placeholder: "Employer",
          key: "employer",
          type: "text",
          styles: { flex: 1 / 2 },
        },
      ],
    },
    {
      items: [
        {
          label: "Country",
          placeholder: "Country",
          key: "country",
          type: "text",
          styles: { flex: 1 / 2 },
        },
        {
          label: "State",
          placeholder: "State",
          key: "state",
          type: "text",
          styles: { flex: 1 / 2 },
        },
      ],
    },
    {
      items: [
        {
          label: "Start Date",
          placeholder: "",
          key: "start",
          type: "date",
          styles: { flex: 1 / 2 },
        },
        {
          label: "End Date",
          placeholder: "",
          key: "end",
          type: "date",
          styles: { flex: 1 / 2 },
        },
      ],
    },
    {
      items: [
        {
          label: "Achievments",
          placeholder: "Achievments",
          key: "description",
          type: "text-area",
          styles: { flex: 1 },
        },
      ],
    },
  ];

  return (
    <div sx={{ width: "100%", textAlign: "center" }}>
      <CreatorSectionHeader
        title="What is your latest / current job?"
        subTitle=" It has been proven that adding your experience in a reverse
        chronological order is the best way layout your resume."
      />
      <FormCreator
        storeKey={entry}
        inputs={inputs}
        updater={updateExperience}
      />
    </div>
  );
};

export default WorkExperience;
