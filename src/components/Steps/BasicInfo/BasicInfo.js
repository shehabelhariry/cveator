/** @jsx jsx */
import { Input, jsx, Label } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import { updadteBasicInfo } from "../../../features/basicInfo/basicInfo";

import { useState } from "react";

const BasicInfo = () => {
  const basicInfo = useSelector((state) => {
    return state.basicInfo;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 2,
          color: "primary",
        }}
      >
        What’s the best way for employers to contact you?
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 20,
        }}
      >
        We suggest using an email and phone number
      </p>
      <div sx={{ minWidth: "40vw", padding: 10 }}>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>First Name</Label>
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
      </div>
    </div>
  );
};

export default BasicInfo;
