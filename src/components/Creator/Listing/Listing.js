/** @jsx jsx */

import {
  faPencilAlt,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx, Box, Button } from "theme-ui";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addExperience,
  removeExperience,
} from "../../../slices/workExperience";
import {
  addEducationEntry,
  removeEducationEntry,
} from "../../../slices/education";

const Listing = ({ items, title, type }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "left",
          mb: 4,
          color: "primary",
        }}
      >
        {title}
      </h3>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: 20,
        }}
      >
        {items.map((item) => {
          return (
            <Box
              sx={{
                boxShadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
                p: 3,
                position: "relative",
                borderRadius: 4,
                ":hover": {
                  ".actions": {
                    visibility: "visible",
                  },
                },
              }}
            >
              <h5>{item.title || item.degree || "Musician"}</h5>
              <h6>@ {item.employer || item.school || "Untitled"}</h6>
              <div className="actions" sx={{ visibility: "hidden" }}>
                <Link
                  to={`${type}/edit/${item.id}`}
                  sx={{
                    position: "absolute",
                    right: 20,
                    top: 20,
                    color: "primary",
                  }}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Link>
                <Link
                  variant="inverted"
                  sx={{
                    position: "absolute",
                    right: 60,
                    top: 20,
                    color: "primary",
                  }}
                  onClick={() => {
                    if (type === "work") {
                      dispatch(removeExperience({ id: item.id }));
                    }
                    if (type === "education") {
                      dispatch(removeEducationEntry({ id: item.id }));
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </div>
            </Box>
          );
        })}
        <Button
          variant="inverted"
          sx={{ border: "1px solid", borderColor: "primary", borderRadius: 4 }}
          onClick={() => {
            if (type === "work") {
              dispatch(addExperience());
            }
            if (type === "education") {
              dispatch(addEducationEntry());
            }
          }}
        >
          <FontAwesomeIcon size="2x" icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

export default Listing;
