import { TextField, Button } from "@mui/material"
import { useState } from "react"

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

const questionList = {
  "Le 2 février est le jour de quel animal ?" : "la marmotte",
  "Quelle est la grande fête célébrée en France avant Pâques ?": "Mardi Gras",
  "Comment dit-on 'I should' en français?": "Je devrais",
  "Comment dit-on 'I could' en français?": "Je pourrais",
}

const question = ((Object.keys(questionList)).sort(() => Math.random() - 0.5))[0]
function Bonus(props) {
  const [answer, setAnswer] = useState("")
  const {totalScore, setTotalScore} = props
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === standardize_word(questionList[question])) {
      setTotalScore(totalScore + 9999)
      setCorrect(true)
    } else {
      setTotalScore(totalScore - 9999)
      setCorrect(false)
    }
    setAnswer(" ")
    setAnswered(true)
  }

  const showQuestion = () => {
    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p> (Pour +9999 ou -9999) </p>
        </div>

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
          <Button onClick={checkAnswer}>ENTRER</Button>
        </div>
      </div>
    );
  }

  const showOptions = () => {
    if (!answered) {
      return showQuestion()
    } else {
      if (correct){
        return(
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <h2>{"La Bonne Réponse: " + questionList[question]}</h2>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <h3> Vous avez raison !  + 9999
              </h3>
            </div>
          </div>
        )
      } else {
        return (
          <div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h2>{"La Bonne Réponse: " + questionList[question]}</h2>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <h3> Incorrect !  - 9999</h3>
            </div>
            </div>
        )
      } 
    }
  }

  return (
    <div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p>{question}</p>
      </div>
        {showOptions()}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      </div>
    </div>
  )
}

export default Bonus