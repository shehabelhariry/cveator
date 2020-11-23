/** @jsx jsx */
import { jsx } from "theme-ui";

const Navigation = (props) => {
  const { position } = props;
  return (
    <nav
      sx={{
        variant: "navigation",
        position: "fixed",
        bottom: position === "bottom" ? 0 : "unset",
        top: position === "top" ? 0 : "unset",
      }}
    >
      {props.children}
    </nav>
  );
};

export default Navigation;
