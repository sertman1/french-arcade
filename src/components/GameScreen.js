import React from "react"
import { TextField } from "@mui/material"
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

let i = 0
const argot = (Object.keys(vocabulary)).sort(() => Math.random() - 0.5)
function GameScreen(props) {
  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(90),
    [answer, setAnswer] = useState("VOTRE RÉPONSE")

  useEffect(() => {
    const timer = setTimeout(() => ticking && setCount(count - 1), 1e3)
    if (count % 7 === 0) {
      if (count  < 85) {
        i += 1
      } 
    }
    return () => clearTimeout(timer)
  }, [count, ticking])

  return (
    <div>
      <div>{count}</div>
      <div>{argot[i]}</div>
      <div><TextField id="filled-basic" label={answer} variant="filled"/></div>
      <button onClick={() => setTicking(false)}>pause</button>
      <button onClick={() => setTicking(true)}>resume</button>
    </div>
  )
}

export default GameScreen