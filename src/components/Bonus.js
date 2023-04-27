import { TextField } from "@mui/material"
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
  "le 2 février est le jour de quel animal ?" : "la marmotte"
}

let i = 0
const question = ((Object.keys(questionList)).sort(() => Math.random() - 0.5))[0]
function Bonus(props) {
  const [answer, setAnswer] = useState("")
  const {totalScore, setTotalScore} = props
  const [answered, setAnswered] = useState(false)

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === standardize_word(questionList[question])) {
      setTotalScore(totalScore + 999)

    } else {
      setTotalScore(totalScore - 9999)
    }
    setAnswer(" ")
  }

  const showQuestion = () => {
    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p> (Pour +999 ou -9999) </p>
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
      </div>
    );
  }

  const showOptions = () => {
    if (!answered) {
      return showQuestion()
    } else {
      return (
        <>
        </>
      )
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
      
    </div>
  )
}

export default Bonus