import React, { useState } from "react"
import GameScreen from "./components/GameScreen";
import { Box, Button } from "@mui/material";

function App() {
  
  const [gameStarted, setGameStarted] = useState(false)

  const getDisplay = () => {
    if (!gameStarted) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button variant="contained" onClick={() => setGameStarted(true)}>JOUER !</Button>
      </div>)
    } else {
      return (
          <Box sx={{ p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'secondary.light' }}>
            <GameScreen></GameScreen>
          </Box> 
      )
    }
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box sx={{ p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'grey' }}>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              L'ARGOT FRANÇAIS
          </h1>
          {getDisplay()}
        </Box> 
      </div>
    </div>
  );

}

export default App;
