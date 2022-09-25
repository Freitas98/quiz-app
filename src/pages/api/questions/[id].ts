import questions from "../questionsRepository"

export default function handler(req, res) {
  const idSelected = +req.query.id;

  const questionOrNothing = questions.filter(question => question.id === idSelected)

  if(questionOrNothing.length === 1){
    const selectedQuestion = questionOrNothing[0].shuffleAnswers();

    res.status(200).json(selectedQuestion.toObject())
  }else{
    res.status(204).send()
  }
}
  