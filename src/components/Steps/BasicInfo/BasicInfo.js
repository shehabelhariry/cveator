/** @jsx jsx */
import { Input, jsx, Label } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const BasicInfo = () => {
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
            <Input variant="primary" type="text" placeholder="John Doe" />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Last Name</Label>
            <Input variant="primary" type="text" placeholder="John Doe" />
          </div>
        </div>
        <div sx={{ variant: "formItem", mb: 10 }}>
          <Label sx={{ mb: 10 }}>Title</Label>
          <Input
            variant="primary"
            type="text"
            placeholder="Frontend Developer"
          />
        </div>
        <div sx={{ variant: "formInlineGroup" }}>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Phone</Label>
            <Input variant="primary" type="text" placeholder="000 0000 000" />
          </div>
          <div sx={{ variant: "formItem", mb: 10, flex: 1 / 2 }}>
            <Label sx={{ mb: 10 }}>Email Address</Label>
            <Input
              variant="primary"
              type="text"
              placeholder="john.doe@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
