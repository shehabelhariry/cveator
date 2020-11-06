import { roboto } from "@theme-ui/presets";

export default {
  ...roboto,
  colors: {
    ...roboto.colors,
    text: "#000",
    background: "#fff",
    primary: "#82cbcd",
    background: "white",
    light: "#6c6c6c",
  },
  navigation: {
    background: "white",
    padding: 10,
    minHeight: 60,
    boxShadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    left: 0,
    zIndex: 2,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  box: {
    background: "white",
    padding: 10,
    borderRadius: 4,
    boxShadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
  },
  header: {
    thin: {
      fontWeight: 200,
      color: "light",
    },
  },
  formItem: {
    margin: 1,
  },
  formInlineGroup: {
    display: "flex",
    "*": {
      flexGow: 1,
    },
  },
};
