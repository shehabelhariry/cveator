/** @jsx jsx */

import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx, Box, Button } from "theme-ui";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExperience } from "../../../slices/workExperience";

const Listing = ({ items, title }) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
              }}
            >
              <h5>{item.title || "Musician"}</h5>
              <h6>@ {item.employer || item.school || "Untitled"}</h6>
              <Link
                to={`work/edit/${item.id}`}
                sx={{
                  position: "absolute",
                  right: 20,
                  top: 20,
                  color: "primary",
                }}
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
            </Box>
          );
        })}
        <Button
          variant="inverted"
          sx={{ border: "1px solid", borderColor: "primary", borderRadius: 4 }}
          onClick={() => {
            dispatch(addExperience());
          }}
        >
          <FontAwesomeIcon size="2x" icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

export default Listing;
