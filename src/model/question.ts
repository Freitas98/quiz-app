import { shuffle } from "../functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #succeed: boolean
    //#answered: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], succeed = false){
        this.#id = id;
        this.#statement = statement;
        this.#answers = answers;
        this.#succeed = succeed;
    }

    get id(){
        return this.#id
    }

    get statement(){
        return this.#statement
    }

    get answers(){
        return this.#answers
    }

    get succeed(){
        return this.#succeed
    }

    get answered(){
        for (let answer of this.#answers) {
            if(answer.revealed) return true;          
        }
        return false;
    }

    get notAnswered(){
        return !this.answered;
    }

    answerWith(index: number): QuestionModel {
        const succeed = this.#answers[index]?.right;
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const shouldReveal = selectedAnswer || answer.right;
            return shouldReveal ? answer.reveal() : answer;
        })
        return new QuestionModel(this.#id, this.#statement, answers, succeed)
    }

    shuffleAnswers() {
        let shuffledAnswers = shuffle(this.#answers);
        return new QuestionModel(this.#id, this.#statement, shuffledAnswers, this.#succeed);
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(resp => resp.toObject()),
            answered: this.answered,
            succeed: this.#succeed
        }
    }

    static fromObject(obj: QuestionModel) : QuestionModel {
        const answers = obj.answers.map(answer => AnswerModel.fromObject(answer));
        
        return new QuestionModel(obj.id, obj.statement, answers, obj.succeed)
    }
}