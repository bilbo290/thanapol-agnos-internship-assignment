import "./App.css";
import Diagram from "./Voronoi";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Voronoi } from "react-vis";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import banner from "./img/luq-active.png";
import highlight from "./img/luq-highlight.png";
import styles from "./styles.js";

const AbsDiagram = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  // const showText = () => {
  //   setOpen(!open);
  // };
  // const showHover = () => {
  //   setHover(!hover);
  // };
  return (
    <Box className="Background">
      <Stack
        direction="column"
        spacing={2}
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "fixed",
          outline: "none",
        }}
      >
        <Paper elevation={5} sx={{ borderRadius: 5 }}>
          <Box sx={{ marginTop: "2rem" }}>
            <Typography variant="h4">จุดไหนที่คุณปวดท้องที่สุด ?</Typography>
          </Box>
          <Box style={styles.absBackground}>
            <Box sx={{ maxWidth: "90em", maxHeight: "80em", position: "relative" }}>
              <Box sx={{}}>
                {open && (
                  <Box style={styles.luqActive}>
                    <img src={banner} alt="banner" />
                  </Box>
                )}
                {hover && (
                  <Box style={styles.luqHighlight}>
                    <img src={highlight} alt="highlight" width={400} />
                  </Box>
                )}
              </Box>
              <Box sx={{}}>
                <Diagram />
              </Box>
            </Box>
          </Box>
          {/* <Box sx={{ paddingBottom: "1rem" }}>
            <Button
              variant="outlined"
              disableElevation
              sx={{
                borderRadius: 5,
                height: "3rem",
                fontSize: "1rem",
              }}
            >
              <Typography>บริเวณอื่นๆ หรือไม่ได้ปวดบริเวณท้อง</Typography>
            </Button>
          </Box> */}
        </Paper>
        <Button variant="contained" disableElevation fullWidth={true} sx={{}}>
          <Typography>ต่อไป</Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default AbsDiagram;
