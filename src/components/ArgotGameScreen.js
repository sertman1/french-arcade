import React, { useEffect, useState } from "react"
import { TextField, Snackbar, Alert, Button } from "@mui/material"
const vocabulary = {
  "Une bagnole" :  "l'Automobile",
  "Une caisse" : "l'Automobile",
  "Le bahut": "le lycée",
  "une baraque": "une maison",
  "une boîte": "une entreprise",
  "la bouffe": "les aliments",
  "un boulot": ("un emploi", "un travail"),
  "le canard": "le journal",
  "les chiottes": "les toilettes",
  "un(e) clope": "une cigarette",
  "La douloureuse": ("l’addition", "la facture"),
  "De la flotte": "de l'eau",
  "Un flic": "un policier",
  "un foutoir": "un chaos",
  "un bordel": "un chaos",
  "un frangin": "un frère",
  "Des fringues": "des vêtements",
  "Du fric": "de l'argent",
  "de la thune": "de l'argent",
  "du blé": "de l'argent",
  "Du frometon": "du fromage",
  "Un gosse": "un enfant",
  "un môme": "un enfant",
  "un gamin": "un enfant",
  "un bambin": "un enfant",
  "La gratte": "la guitare",
  "L’hosto": "l’hôpital",
  "Un machin": ("une chose", "un objet"),
}

function standardize_word(word) {
  let standardized_word = ""
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
    } else {
      standardized_word += word[i]
    }
  }
  return standardized_word.toLowerCase().trim()
}

let i = 0
const argot = (Object.keys(vocabulary)).sort(() => Math.random() - 0.5)
function ArgotGameScreen(props) {
  const { setTotalScore, totalScore } = props
  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(90),
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
      setTimeForQuestion( (t) => t - 1)
      if (timeForQuestion - 1 === 0) {
        checkAnswer()
        setTimeForQuestion(( Math.floor(Math.random() * 7)) + 13 )
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
      setMessage("-9 (" + vocabulary[argot[i]].toLowerCase() + ")")
      setScore(score - 9)
      setTotalScore(totalScore - 9)
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
    setScore(score - 3)
    setTotalScore(totalScore - 3)
    setSeverity("warning")
    setMessage("-3 (" + vocabulary[argot[i]].toLowerCase() + ")")
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
      }}>{argot[i].toLowerCase()} </h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}><TextField id="filled-basic" label={"VOTRE RÉPONSE"} variant="filled" 
        sx ={{ input: {color: 'white'}}}
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

export default ArgotGameScreen