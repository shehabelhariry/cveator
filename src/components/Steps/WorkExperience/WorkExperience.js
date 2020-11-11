/** @jsx jsx */

import { useSelector } from "react-redux";
import { jsx } from "theme-ui";
import { updateExperience } from "../../../features/workExperience/workExperience";
import FormCreator from "../../FormCreator/FormCreator";

const WorkExperience = () => {
  const experiences = useSelector((state) => {
    return state.experiences.entries;
  });

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
  ];

  const latestExperience = experiences[0];

  return (
    <div sx={{ maxWidth: "60vw", textAlign: "center" }}>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 2,
          color: "primary",
        }}
      >
        What is your latest / current job?
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 20,
        }}
      >
        It has been proven that adding your experience in a reverse
        chronological order is the best way to sort your experience.
      </p>
      <FormCreator
        storeKey={latestExperience}
        minWidth="40vw"
        styles={{ padding: 10 }}
        inputs={inputs}
        updater={updateExperience}
      />
    </div>
  );
};

export default WorkExperience;
