import React, { useState } from "react"
import GameScreen from "./components/ArgotGameScreen";
import ConjugationGameScreen from "./components/ConjugationGameScreen";
import ArgotGameScreen from "./components/ArgotGameScreen";
import { Box, Button } from "@mui/material";

function App() {
  
  const [argotGameStarted, setArgotGameStarted] = useState(false)
  const [conjuGameStarted, setConjuGameStarted] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

  const getArgotDisplay = () => {
    if (!argotGameStarted) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button variant="contained" onClick={() => setArgotGameStarted(true)}>JOUER !</Button>
      </div>)
    } else {
      return (
          <Box sx={{ p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'secondary.light' }}>
            <ArgotGameScreen setTotalScore={setTotalScore} totalScore={totalScore}></ArgotGameScreen>
          </Box> 
      )
    }
  }

  const getConjugationDisplay = () => {
    if (!conjuGameStarted) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button variant="contained" onClick={() => setConjuGameStarted(true)}>JOUER !</Button>
        </div>)
    } else {
      return (
        <Box sx={{ p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'secondary.light' }}>
          <ConjugationGameScreen setTotalScore={setTotalScore} totalScore={totalScore}></ConjugationGameScreen>
        </Box>
      )
    }
  }

  const startGame = () => {

  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h1><b>Score Total: {totalScore}</b></h1>
        </div>
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
          {getArgotDisplay()}
        </Box> 
      </div>
      <p></p>
      
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
          LES CONJUGAISONS
        </h1>
        {getConjugationDisplay()}
      </Box>
      </div>
    </div>
  );

}

export default App;
