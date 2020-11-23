/** @jsx jsx */

import { jsx } from "theme-ui";

const CreatorSectionHeader = ({ title, subTitle }) => {
  return (
    <div>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "left",
          mb: 2,
          color: "primary",
        }}
      >
        {title}
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "left",
          mb: 20,
        }}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default CreatorSectionHeader;
