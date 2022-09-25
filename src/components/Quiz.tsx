import QuestionModel from "../model/question"
import styles from "../styles/Quiz.module.css"
import Button from "./Button"
import Question from "./Question"

interface QuizProps {
    question: QuestionModel
    lastQuestion: boolean
    answeredQuestion: (question: QuestionModel) => void
    goNextPhase: () => void
}

export default function Quiz(props: QuizProps) {
    
    function onResponse(index: number) {
        if(props.question.notAnswered) {
            props.answeredQuestion(props.question.answerWith(index))
        }
    }

    return (
        <div className={styles.quiz}>
            {props.question ? <Question
                value={props.question}
                timeToAnswer={6}
                onResponse={onResponse}
                timeIsGone={props.goNextPhase}
            /> : false 
            }
            <Button onClick={props.goNextPhase} text={props.lastQuestion ? "Finalizar" : "Próxima"}/>
        </div>
    )
}