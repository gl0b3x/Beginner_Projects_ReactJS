import questions from "../api";

export default function Result({correct, setStep, setCorrect}) {
    function reset() {
        setStep(0)
        setCorrect(0)
    }


    return (
        <div className="result">
            {correct > 2 ?
                <img src="https://img.icons8.com/dusk/64/thumb-up.png"/> :
                <img src="https://img.icons8.com/external-colours-bomsymbols-/91/external-bad-hand-conversation-colours-colours-bomsymbols-.png"/>}
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}

