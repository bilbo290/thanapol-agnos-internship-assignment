import Box from "@mui/material/Box";
import styles from "./styles";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <Box style={styles.background}>
      <Button
        onClick={() => {
          navigate("/Abs");
        }}
        variant="contained"
        sx={{ paddingX: "2%", paddingY: "1%" }}
      >
        <Typography variant="h4">เริ่มตอบคำถาม</Typography>
      </Button>
    </Box>
  );
}

export default Home;
