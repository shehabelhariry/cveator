/** @jsx jsx */

import { useSelector } from "react-redux";
import { jsx } from "theme-ui";
import { updateEducationEntry } from "../../../features/education/education";
import FormCreator from "../../FormCreator/FormCreator";

const Education = () => {
  const educationEntries = useSelector((state) => {
    return state.education.entries;
  });

  const latestEducationEntry = educationEntries[0];

  const inputs = [
    {
      items: [
        {
          label: "School",
          placeholder: "School",
          key: "school",
          type: "text",
          styles: { flex: 1 / 2 },
        },
        {
          label: "Degree",
          placeholder: "Degree",
          key: "degree",
          type: "select",
          options: [
            { label: "Post Graduate", value: "Post Graduate" },
            { label: "Bacherlor's Degree", value: "Bacherlor's Degree" },
            { label: "Diploma", value: "Diploma" },
            { label: "Online", value: "Online" },
          ],
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
    <div sx={{ maxWidth: "60vw", textAlign: "center" }}>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 2,
          color: "primary",
        }}
      >
        Where did you went to school? / Tell us where you learn in all
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 20,
        }}
      >
        Employers are always intrested about where you graducated from.
      </p>
      <FormCreator
        storeKey={latestEducationEntry}
        minWidth="40vw"
        styles={{ padding: 10 }}
        inputs={inputs}
        updater={updateEducationEntry}
      />
    </div>
  );
};

export default Education;
