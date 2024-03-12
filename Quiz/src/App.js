import './index.scss';
import Game from "./Components/Game"
import questions from "./api";
import Result from "./Components/Result";
import {useState} from "react";

function App() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

  return (
    <div className="App">
        {
            step !== questions.length ? <Game step={step} setStep = {setStep} setCorrect={setCorrect}/> : <Result correct={correct} setCorrect={setCorrect} setStep={setStep}/>
        }
    </div>
  );
}

export default App;
