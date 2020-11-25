/** @jsx jsx */
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Input, jsx } from "theme-ui";
import { addLanguage, removeLanguage } from "../../../../slices/languages";

const Languages = () => {
  const languages = useSelector((state) => {
    return state.languages.items;
  });
  const dispatch = useDispatch();
  return (
    <div sx={{ width: "100%", textAlign: "center", maxWidth: 800 }}>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "left",
          mb: 2,
          color: "primary",
        }}
      >
        How can you express yourself? / How many lanugages do you know?
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "left",
          mb: 20,
        }}
      >
        Speaking more than one language is a huge plus.
      </p>
      <div>
        <Input
          placeholder="Write and press Enter ⏎ to add a language"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              dispatch(addLanguage({ label: e.target.value }));
              e.target.value = "";
            }
          }}
        />
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          {languages.map((language) => {
            return (
              <div
                key={language.id}
                sx={{
                  variant: "pill",
                  m: "4px",
                }}
              >
                <p sx={{ pr: "10px" }}>{language.label}</p>
                <a
                  onClick={() => {
                    dispatch(removeLanguage({ id: language.id }));
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Languages;
