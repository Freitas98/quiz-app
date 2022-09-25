export default class AnswerModel {
    #value: string
    #right: boolean
    #revealed: boolean

    constructor(value: string, right: boolean, revealed = false){
        this.#value = value;
        this.#right = right;
        this.#revealed = revealed;
    }

    static right(value: string) {
        return new AnswerModel(value, true);
    }

    static wrong(value: string) {
        return new AnswerModel(value, false);
    }

    get revealed(){
        return this.#revealed;
    }

    get right(){
        return this.#right;
    }

    get value(){
        return this.#value;
    }

    reveal() {
        return new AnswerModel(this.#value, this.#right, true);
    }

    toObject() {
        return {
            value: this.#value,
            right: this.#right,
            revealed: this.#revealed,
        }
    }

    static fromObject(obj: AnswerModel) : AnswerModel {
        return new AnswerModel(obj.value, obj.right, obj.revealed)
    }
}