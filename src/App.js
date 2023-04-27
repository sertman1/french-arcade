import React, { useState } from "react"
import GameScreen from "./components/GameScreen";
import { Box, Button } from "@mui/material";

function App() {
  
  const [gameStarted, setGameStarted] = useState(false)

  const getDisplay = () => {
    if (!gameStarted) {
      return (<Button variant="contained" onClick={() => setGameStarted(true)}>JOUER !</Button>)
    } else {
      return (
        <Box sx={{ p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'secondary.light' }}>
          <GameScreen></GameScreen>
        </Box> 
      )
    }
  }

  const showShit = () => {
    return <p>Hello</p>
  }

  return (
    <div>
      <h1>LE FRANCAIS</h1>
      {getDisplay()}
    </div>
  );

}

export default App;
