/** @jsx jsx */
import {
  faBehance,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, jsx, Link, Select } from "theme-ui";
import {
  addLink,
  removeLink,
  updateLink,
} from "../../../features/socialLinks/socialLinks";

const SocialLinks = () => {
  const links = useSelector((state) => {
    return state.socialLinks.links;
  });

  const dispatch = useDispatch();

  const socialMap = {
    linkedIn: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    github: <FontAwesomeIcon icon={faGithub} size="2x" />,
    behance: <FontAwesomeIcon icon={faBehance} size="2x" />,
    medium: <FontAwesomeIcon icon={faMedium} size="2x" />,
    website: <FontAwesomeIcon icon={faLink} size="2x" />,
  };
  return (
    <div sx={{ maxWidth: "40vw", textAlign: "center" }}>
      <h3
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 2,
          color: "primary",
        }}
      >
        Where can you be found online?
      </h3>
      <p
        sx={{
          variant: "header.thin",
          textAlign: "center",
          mb: 20,
        }}
      >
        Adding your social links will increase the chances of recruiters finding
        you.
      </p>
      <div>
        {links.map((link) => {
          return (
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 6fr 0.5fr",
                gridGap: 10,
                mb: 20,
              }}
              key={link.id}
            >
              <div
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 10fr",
                  gridGap: 10,
                  alignItems: "center",
                }}
              >
                {socialMap[link.type]}
                <Select
                  onChange={(e) => {
                    dispatch(
                      updateLink({
                        id: link.id,
                        newLink: { ...link, type: e.target.value },
                      })
                    );
                  }}
                >
                  <option value="linkedIn">Linkedin</option>
                  <option value="medium">Medium</option>
                  <option value="github">Github</option>
                  <option value="website">Website</option>
                  <option value="behance">Behance</option>
                </Select>
              </div>
              <Input
                defaultValue={link.url}
                onChange={(e) => {
                  dispatch(
                    updateLink({
                      id: link.id,
                      newLink: { ...link, url: e.target.value },
                    })
                  );
                }}
                sx={{ flex: 1 }}
              />
              <Button
                variant="inverted"
                onClick={() => {
                  dispatch(removeLink({ id: link.id }));
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          );
        })}
      </div>
      <Link
        variant="inverted"
        sx={{
          textAlign: "center",
          margin: "20px auto",
          color: "primary",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(addLink());
        }}
      >
        <FontAwesomeIcon icon={faPlus} /> Add another link
      </Link>
    </div>
  );
};

export default SocialLinks;
