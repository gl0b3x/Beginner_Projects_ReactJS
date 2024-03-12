import questions from "../api";

export default function Game({step,setStep, setCorrect}) {
    const percentage = Math.round((step/questions.length) * 100)
    const question = questions[step];

    function onClickVariant(index) {
        setStep((prev) => prev + 1)
        if (index === question.correct) {
            setCorrect((prev) => prev + 1)
        }
    }

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants
                        .map((text, index) =>
                        <li onClick={() => onClickVariant(index)} key={text}>{text}
                        </li> )
                }
            </ul>
        </>
    );
}
