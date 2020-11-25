/** @jsx jsx */
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Input, jsx } from "theme-ui";
import { addSkill, removeSkill } from "../../../../slices/skills";

const Skills = () => {
  const skills = useSelector((state) => {
    return state.skills.items;
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
        What can you offer? / Tell us about your skills.
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "left",
          mb: 20,
        }}
      >
        Adding your skills will increase the chances of recruiters finding you.
      </p>
      <div>
        <Input
          placeholder="Write and press Enter ⏎ to add a skill"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              dispatch(addSkill({ label: e.target.value }));
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
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                sx={{
                  variant: "pill",
                  m: "4px",
                }}
              >
                <p sx={{ pr: "10px" }}>{skill.label}</p>
                <a
                  onClick={() => {
                    dispatch(removeSkill({ id: skill.id }));
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

export default Skills;
