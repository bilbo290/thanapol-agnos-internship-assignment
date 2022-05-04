import Picture from "./img/default-abs.png";
const styles = {
  absBackground: {
    backgroundImage: `url(${Picture})`,
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
