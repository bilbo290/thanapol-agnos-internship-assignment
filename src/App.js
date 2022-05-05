import Box from "@mui/material/Box";
import Home from "./Home";
import AbsDiagram from "./Abs";
import FingerDiagram from "./Finger";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Abs" element={<AbsDiagram />} />
        <Route path="Finger" element={<FingerDiagram />} />
      </Routes>
    </Box>
  );
}

export default App;
