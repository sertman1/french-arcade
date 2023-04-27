import React, { useState } from "react"
import ConjugationGameScreen from "./components/ConjugationGameScreen";
import VerlanGameScreen from "./components/verlanGameScreen";
import ArgotGameScreen from "./components/ArgotGameScreen";
import { Box, Button } from "@mui/material";

function App() {
  
  const [argotGameStarted, setArgotGameStarted] = useState(false)
  const [conjuGameStarted, setConjuGameStarted] = useState(false)
  const [verlanGameStarted, setVerlanGameStarted] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const [playGame, setPlayGame] = useState(false)

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

  const getVerlanDisplay = () => {
    if (!verlanGameStarted) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button variant="contained" onClick={() => setVerlanGameStarted(true)}>JOUER !</Button>
        </div>)
    } else {
      return (
        <Box sx={{ p: 2, border: 1, borderColor: 'primary.main', bgcolor: 'secondary.light' }}>
          <VerlanGameScreen setTotalScore={setTotalScore} totalScore={totalScore}></VerlanGameScreen>
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
              LE VERLAN (l'envers?)
            </h1>
            {getVerlanDisplay()}
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
    )
  }

  const welcomeMenu = () => {
    return (
      <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h1>BIENVENUE . . .</h1>
      </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p>Un jeu épique pour montrer vos compétences en français</p>
        </div>
      <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
        <Button variant="contained" onClick={() => setPlayGame(true)}>COMENCER</Button>
      </div>
    </div>
    )
  }

  const game = () => {
    if (playGame) {
      return startGame()
    } else {
      return welcomeMenu()
    }
  }

  return (
    <div>
      {game()}
    </div>
  );

}

export default App;
