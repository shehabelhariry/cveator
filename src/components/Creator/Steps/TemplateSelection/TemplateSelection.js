/** @jsx jsx */
import { useDispatch, useSelector } from "react-redux";
import { jsx, Radio, Label } from "theme-ui";
import Template1 from "../../../../assets/images/template-1.png";
import { changeTemplate } from "../../../../slices/templateSelection";
import CreatorSectionHeader from "../../CreatorSections/CreatorSectionHeader/CreatorSectionHeader";

const availableThemes = [
  { id: "classic", label: "Classic" },
  { id: "modern", label: "Modern" },
  { id: "creative", label: "Creative" },
];

const TemplateSelection = () => {
  const theme = useSelector((state) => state.template.type);
  const dispatch = useDispatch();

  return (
    <div>
      <CreatorSectionHeader
        title="How would you like you CV to look like?"
        subTitle="Select one of the available template. You can always change it later."
      />
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: 20,
          minWidth: "50vw",
          minHeight: 400,
        }}
      >
        {availableThemes.map((th) => {
          return (
            <div key={th.id} sx={{ variant: "box", width: "100%" }}>
              <Label sx={{ paddingLeft: 10 }}>
                <Radio
                  value={th.id}
                  name="theme"
                  defaultChecked={th.id === theme}
                  onChange={() => {
                    dispatch(changeTemplate(th.id));
                  }}
                />
                {th.label}
              </Label>
              <img src={Template1} sx={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateSelection;
