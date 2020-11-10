/** @jsx jsx */

import { useDispatch, useSelector } from "react-redux";
import { Input, jsx, Select, Label } from "theme-ui";
import { updateEducationEntry } from "../../../features/education/education";

const Education = () => {
  const educationEntries = useSelector((state) => {
    return state.education.entries;
  });

  const dispatch = useDispatch();

  const latestEducationEntry = educationEntries[0];

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
      <div sx={{ minWidth: "40vw", padding: 10 }}>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Job Title</Label>
            <Input
              placeholder="Frontend Developer"
              defaultValue={latestEducationEntry.school}
              onChange={(e) => {
                dispatch(
                  updateEducationEntry({
                    id: latestEducationEntry.id,
                    key: "school",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Degree</Label>
            <Select
              defaultValue={latestEducationEntry.degree}
              onChange={(e) => {
                dispatch(
                  updateEducationEntry({
                    id: latestEducationEntry.id,
                    key: "degree",
                    value: e.target.value,
                  })
                );
              }}
            >
              <option value="post">Post Graduate</option>
              <option value="bachelor">Bacherlor's Degree</option>
              <option value="diploma">Diploma</option>
              <option value="online">Online</option>
            </Select>
          </div>
        </div>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Country</Label>
            <Input
              placeholder="Egypt"
              defaultValue={latestEducationEntry.country}
              onChange={(e) => {
                dispatch(
                  updateEducationEntry({
                    id: latestEducationEntry.id,
                    key: "country",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>State</Label>
            <Input
              placeholder="Incorta"
              defaultValue={latestEducationEntry.state}
              onChange={(e) => {
                dispatch(
                  updateEducationEntry({
                    id: latestEducationEntry.id,
                    key: "state",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
        </div>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Start Date</Label>
            <Input
              type="date"
              defaultValue={latestEducationEntry.start}
              onChange={(e) => {
                dispatch(
                  updateEducationEntry({
                    id: latestEducationEntry.id,
                    key: "start",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>End Date</Label>
            <Input
              type="date"
              defaultValue={latestEducationEntry.end}
              onChange={(e) => {
                dispatch(
                  updateEducationEntry({
                    id: latestEducationEntry.id,
                    key: "end",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
