/** @jsx jsx */

import { useDispatch, useSelector } from "react-redux";
import { Button, Input, jsx, Link, Select, Label } from "theme-ui";
import { updateExperience } from "../../../features/workExperience/workExperience";

const WorkExperience = () => {
  const experiences = useSelector((state) => {
    return state.experiences.entries;
  });

  const dispatch = useDispatch();

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
      <div sx={{ minWidth: "40vw", padding: 10 }}>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Job Title</Label>
            <Input
              placeholder="Frontend Developer"
              defaultValue={latestExperience.title}
              onChange={(e) => {
                dispatch(
                  updateExperience({
                    id: latestExperience.id,
                    key: "title",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Employer</Label>
            <Input
              placeholder="Incorta"
              defaultValue={latestExperience.employer}
              onChange={(e) => {
                dispatch(
                  updateExperience({
                    id: latestExperience.id,
                    key: "employer",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
        </div>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Country</Label>
            <Input
              placeholder="Egypt"
              defaultValue={latestExperience.country}
              onChange={(e) => {
                dispatch(
                  updateExperience({
                    id: latestExperience.id,
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
              defaultValue={latestExperience.state}
              onChange={(e) => {
                dispatch(
                  updateExperience({
                    id: latestExperience.id,
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
              defaultValue={latestExperience.start}
              onChange={(e) => {
                dispatch(
                  updateExperience({
                    id: latestExperience.id,
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
              defaultValue={latestExperience.end}
              onChange={(e) => {
                dispatch(
                  updateExperience({
                    id: latestExperience.id,
                    key: "end",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
        </div>
      </div>
      {/* <div sx={{ minWidth: "40vw", padding: 10 }}>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Job Title</Label>
            <Input
              placeholder="John"
              defaultValue={basicInfo.firstName}
              onChange={(e) => {
                dispatch(
                  updadteBasicInfo({ key: "firstName", value: e.target.value })
                );
              }}
            />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Last Name</Label>
            <Input
              placeholder="Doe"
              defaultValue={basicInfo.lastName}
              onChange={(e) => {
                dispatch(
                  updadteBasicInfo({ key: "lastName", value: e.target.value })
                );
              }}
            />
          </div>
        </div>
        <div sx={{ variant: "formItem", mb: 10 }}>
          <Label sx={{ mb: 10 }}>Title</Label>
          <Input
            placeholder="Frontend Developer"
            defaultValue={basicInfo.title}
            onChange={(e) => {
              dispatch(
                updadteBasicInfo({ key: "title", value: e.target.value })
              );
            }}
          />
        </div>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Phone</Label>
            <Input
              type="text"
              placeholder="000 0000 000"
              defaultValue={basicInfo.phone}
              onChange={(e) => {
                dispatch(
                  updadteBasicInfo({ key: "phone", value: e.target.value })
                );
              }}
            />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Email Address</Label>
            <Input
              placeholder="john.doe@gmail.com"
              defaultValue={basicInfo.email}
              onChange={(e) => {
                dispatch(
                  updadteBasicInfo({ key: "email", value: e.target.value })
                );
              }}
            />
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default WorkExperience;
