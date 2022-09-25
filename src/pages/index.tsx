
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/question'
import { useRouter } from 'next/router'

const BASE_URL = "https://quiz-app-baptista.vercel.app/api/"

export default function Home() {
  const router = useRouter();

  const [questionIDs, setQuestionIDs] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  async function loadQuestionIDs() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionIDs = await resp.json();
    setQuestionIDs(questionIDs)
  }

  async function loadQuestion(questionID: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionID}`)
    const json = await resp.json();
    const newQuestion = QuestionModel.fromObject(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadQuestionIDs();
  }, [])

  useEffect(() => {
    questionIDs.length > 0 && loadQuestion(questionIDs[0])
  }, [questionIDs])
  
  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion)
    const succeed = answeredQuestion.succeed;
    setCorrectAnswers(correctAnswers + (succeed ? 1 : 0))
  }

  function nextQuestionID() {
    const nextIndex = questionIDs.indexOf(question.id) + 1;
    return questionIDs[nextIndex]
  }

  function goNextPhase() {
    const nextID = nextQuestionID();
    nextID ? goNextQuestion(nextID) : endGame();
  }

  function goNextQuestion(nextID: number) {
    loadQuestion(nextID)
  }

  function endGame() {
    router.push({
      pathname: "/result",
      query: {
        total: questionIDs.length,
        correctAnswers
      }
    })
  }

  return (
    question ? 
      <Quiz
        question={question}
        lastQuestion={nextQuestionID() === undefined}
        answeredQuestion={answeredQuestion}
        goNextPhase={goNextPhase}
      />
      : false
  )
}
