/** @jsx jsx */
import { useDispatch, useSelector } from "react-redux";
import { jsx, Radio, Label } from "theme-ui";
import Template1 from "../../../assets/images/template-1.png";
import { changeTemplate } from "../../../features/templateSelection/TemplateSelection";

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
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 2,
          color: "primary",
        }}
      >
        How would you like you CV to look like?
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 20,
        }}
      >
        Select one of the available template. You can always change it later.
      </p>
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
            <div key={th.id} sx={{ variant: "box", width: 300 }}>
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
