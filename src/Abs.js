import Diagram from "./Voronoi";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./styles.js";
import { useNavigate } from "react-router-dom";
const AbsDiagram = () => {
  const navigate = useNavigate();
  const name = "abs";
  return (
    <Box style={styles.background}>
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
            <Typography variant="h4">จุดไหนที่คุณปวดท้องที่สุด?</Typography>
          </Box>
          <Box style={styles.absBackground}>
            <Box sx={{ maxWidth: "90em", maxHeight: "80em", position: "relative" }}>
              <Box>
                <Diagram sourceName={name} />
              </Box>
            </Box>
          </Box>
        </Paper>
        <Button
          onClick={() => {
            navigate("/Finger");
          }}
          variant="contained"
          disableElevation
          fullWidth={true}
          sx={{}}
        >
          <Typography>ต่อไป</Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default AbsDiagram;
