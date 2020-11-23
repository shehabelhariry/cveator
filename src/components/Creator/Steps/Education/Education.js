/** @jsx jsx */

import { jsx } from "theme-ui";
import { updateEducationEntry } from "../../../../slices/education";
import CreatorSectionHeader from "../../CreatorSections/CreatorSectionHeader/CreatorSectionHeader";
import FormCreator from "../../FormCreator/FormCreator";

const Education = ({ entry }) => {
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
    <div sx={{ width: "100%", textAlign: "center" }}>
      <CreatorSectionHeader
        title="Where did you go to school? / Tell us where you learn in all"
        subTitle="Employers are always intrested in where you graducated from."
      />
      <FormCreator
        storeKey={entry}
        minWidth="40vw"
        inputs={inputs}
        updater={updateEducationEntry}
      />
    </div>
  );
};

export default Education;
