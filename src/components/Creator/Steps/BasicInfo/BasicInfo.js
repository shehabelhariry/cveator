/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import { updadteBasicInfo } from "../../../../slices/basicInfo";
import FormCreator from "../../FormCreator/FormCreator";
import CreatorSectionHeader from "../../CreatorSections/CreatorSectionHeader/CreatorSectionHeader";

const BasicInfo = ({ entry }) => {
  const inputs = [
    {
      items: [
        {
          label: "First Name",
          placeholder: "John",
          key: "firstName",
          type: "text",
          styles: { flex: 1 / 2 },
        },
        {
          label: "Last Name",
          placeholder: "Doe",
          key: "lastName",
          type: "text",
          styles: { flex: 1 / 2 },
        },
      ],
    },
    {
      items: [
        {
          label: "Title",
          placeholder: "Title",
          key: "title",
          type: "text",
          styles: { flex: 1 },
        },
      ],
    },
    {
      items: [
        {
          label: "Phone",
          placeholder: "000 000 000",
          key: "phone",
          type: "text",
          styles: { flex: 1 / 2 },
        },
        {
          label: "Email Address",
          placeholder: "john.doe@gmail.com",
          key: "email",
          type: "email",
          styles: { flex: 1 / 2 },
        },
      ],
    },
  ];

  return (
    <div sx={{ width: "100%" }}>
      <CreatorSectionHeader
        title="What’s the best way for employers to contact you?"
        subTitle="We suggest using an email and phone number"
      />
      <FormCreator
        storeKey={entry}
        minWidth="40vw"
        inputs={inputs}
        updater={updadteBasicInfo}
      />
    </div>
  );
};

export default BasicInfo;
