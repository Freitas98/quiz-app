import AnswerModel from "../model/answer"
import styles from "../styles/Answer.module.css"

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    letterBackgroundColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value;
    const answerRevealed = answer.revealed ? styles.answerRevealed : "";
    
    return (
        <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
            <div className={`${answerRevealed} ${styles.answerContent}`}>
                <div className={styles.front}>
                    <div className={styles.letter} style={{backgroundColor: props.letterBackgroundColor}}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>
                    {answer.right ? (
                    <div className={styles.rightAnswer}>
                        <div>
                            A resposta certa é...
                        </div>
                        <div className={styles.value}>{answer.value}</div>
                    </div>
                    ) : (
                    <div className={styles.wrongAnswer}>
                        <div>
                            A resposta informada está errada...
                        </div>
                        <div className={styles.value}>{answer.value}</div>
                    </div>
                    )}
                </div> 
            </div>
        </div>
    )
}