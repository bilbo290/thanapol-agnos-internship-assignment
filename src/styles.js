import absPicture from "./img/default-abs.png";
import fingerPicture from "./img/default-finger.png";
const styles = {
  background: {
    backgroundColor: "#007ff696",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    color: "#fff",
    userSelect: "none",
  },
  absBackground: {
    backgroundImage: `url(${absPicture})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "30rem",
    height: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fingerBackground: {
    backgroundImage: `url(${fingerPicture})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "30rem",
    height: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  luqActive: {
    position: "absolute",
    left: "-40%",
    top: "-111%",
    zIndex: 0,
  },
  luqHighlight: {
    position: "absolute",
    left: "10.1%",
    top: "-27.8%",
    zIndex: 2,
  },
};

export default styles;
