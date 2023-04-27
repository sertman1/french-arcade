import GameScreen from "./components/GameScreen";
import { Box } from "@mui/material";

function App() {
  
  return (
    <div>
      <h1>LE FRANCAIS</h1>
      <Box sx={{p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'secondary.light'}}>
        <GameScreen>
        </GameScreen>
      </Box> 
    </div>
  );

}

export default App;
