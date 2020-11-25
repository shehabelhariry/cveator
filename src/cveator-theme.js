import { roboto } from "@theme-ui/presets";

export default {
  ...roboto,
  colors: {
    ...roboto.colors,
    text: "#000",
    background: "#fff",
    primary: "#82cbcd",
    bglight: "rgba(130,203,205, 0.28)",
    light: "#6c6c6c",
  },
  buttons: {
    ...roboto.buttons,
    inverted: {
      color: "primary",
      bg: "transparent",
      border: 0,
    },
    fab: {
      position: "fixed",
      right: 100,
      top: 150,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
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
    margin: 2,
    ":last-child": {
      marginRight: 0,
    },
    ":first-child": {
      marginLeft: 0,
    },
  },
  formInlineGroup: {
    display: "flex",
    "*": {
      flexGow: 1,
    },
  },
  stepCompleted: {
    width: 30,
    height: 5,
    m: "10px 5px ",
    bg: "primary",
    borderRadius: 4,
  },
  stepPending: {
    width: 30,
    height: 5,
    m: "10px 5px ",
    bg: "bglight",
    borderRadius: 4,
  },
  pill: {
    bg: "primary",
    color: "white",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    "*": {
      m: 0,
    },
    margin: "4 0",
    mr: 2,
    ml: 0,
  },
  previewCV: {
    position: "fixed",
    right: 100,
    top: 250,
    border: "1px solid",
    borderColor: "primary",
    ":hover": {
      "::before": {
        content: '"Preview"',
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        bg: "rgba(0,0,0,0.3)",
        cursor: "pointer",
        color: "white",
      },
    },
  },
  sideMenu: {
    boxShadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
    width: 250,
    height: "100vh",
    position: "fixed",
    bg: "white",
  },
};
