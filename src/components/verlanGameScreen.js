import React, { useEffect, useState } from "react"
import { TextField, Snackbar, Alert, Button } from "@mui/material"
const vocabulary = {
  "céfran": "français",
  "français": "céfran",
  "tromé": "métro",
  "métro": "tromé",
  "oit et oim": "toi et moi",
  "toi et moi": "oit et oim",
  "meuf": "femme",
  "femme": "meuf",
  "reuf": "frère",
  "reum": "mère",
  "vénère": "énervé",
  "teuf": "la fête",
  "chanmé": "méchant",
  "ouf": "fou",
  "fou": "ouf",
  "À donf": "à fond",
  "À oilpé": "à poil",
  "reuch": "cher",
  "cher": "reuch",
  "pécho": "choper",
  "tof": "photo",
  "photo": "tof",
  "cimer": "merci",
  "merci": "cimer",
  "kéblo": "bloqué",
  "teubé": "bête",
  "bête": "teubé"
}

// KEEP TRACK OF WHAT GOT WRONG AND PRINT



function standardize_word(word) {
  let standardized_word = ""
  if (word === undefined) {
    return
  }
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'é') {
      standardized_word += 'e'
    } else if (word[i] === 'è') {
      standardized_word += 'e'
    } else if (word[i] === 'ê') {
      standardized_word += 'e'
    } else if (word[i] === 'ô') {
      standardized_word += 'o'
    } else if (word[i] === 'î') {
      standardized_word += 'i'
    } else if (word[i] === "ç") {
      standardize_word += "c"
    }
    else {
      standardized_word += word[i]
    }
  }
  return standardized_word.toLowerCase().trim()
}

let i = 0
const argot = (Object.keys(vocabulary)).sort(() => Math.random() - 0.5)
function VerlanGameScreen(props) {
  const { setTotalScore, totalScore } = props
  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(60),
    [timeForQuestion, setTimeForQuestion] = useState(7),
    [answer, setAnswer] = useState(""),
    [open, setOpen] = useState(false),
    [severity, setSeverity] = useState("success"),
    [message, setMessage] = useState("correct"),
    [score, setScore] = useState(0),
    [showGameOver, setShowGameOver] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => ticking && setCount(count - 1), 1e3)
    if (count <= 0) {
      setShowGameOver(true)
    } else {
      setTimeForQuestion((t) => t - 1)
      if (timeForQuestion - 1 === 0) {
        checkAnswer()
        setTimeForQuestion((Math.floor(Math.random() * 7)) + 13)
        i += 1
      }
      if (count === 0) {
        setTicking(false)
        setTimeForQuestion(0)
      }
      return () => clearTimeout(timer)
    }
  }, [count])

  const checkAnswer = () => {
    if (i + 1 > argot.length) {
      i = 0
    }
    if (answer.toLowerCase().trim() === standardize_word(vocabulary[argot[i]])) {
      setSeverity("success")
      setMessage("correct")
      setScore(score + (1337 * timeForQuestion / timeForQuestion + 13))
      setTotalScore(totalScore + (1337 * timeForQuestion / timeForQuestion + 13))
    } else {
      setSeverity("error")
      setMessage("-999 (" + vocabulary[argot[i]].toLowerCase() + ")")
      setScore(score - 999)
      setTotalScore(totalScore - 999)
    }
    setOpen(true)
    if (i + 1 > argot.length) {
      i = 0
    } else {
      i += 1
    }
    setAnswer(" ")
  }

  const handleSkip = () => {
    setOpen(true)
    setScore(score - 333)
    setTotalScore(totalScore - 333)
    setSeverity("warning")
    setMessage("-333 (" + vocabulary[argot[i]].toLowerCase() + ")")
    if (i + 1 > argot.length) {
      i = 0
    } else {
      i += 1
    }
    setAnswer(" ")
  }

  const handleClose = () => {
    setOpen(false)
  }

  const showButtons = () => {
    if (count > 0) {
      return (
        <>
          <Button onClick={checkAnswer}>ENTRER</Button>
          <Button onClick={handleSkip}>SAUTER</Button>
        </>
      );
    }
  }

  const showGame = () => {
    return (
      <>
        <h2 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>SECONDES RESTANTES:  {count}</h2>
        <h1 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            {argot[i]} </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}><TextField id="filled-basic" label={"VOTRE RÉPONSE"} variant="filled"
          sx={{ input: { color: 'white' } }}
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              checkAnswer()
            }
          }} />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {showButtons()}
          <i>score: </i> <b> {score}</b>
        </div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <div> (pas sensible à la casse, et les accents ne sont pas nécessaries)</div>
      </>
    );
  }

  const showScreen = () => {
    if (showGameOver) {
      return (<div>{"Votre Score:  " + score}</div>)
    } else {
      return showGame()
    }
  }

  return (
    <div>
      {showScreen()}
    </div>
  )
}

export default VerlanGameScreen
