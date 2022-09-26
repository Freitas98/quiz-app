import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual o melhor amigo do Homem?', [
        AnswerModel.wrong('Rato'),
        AnswerModel.wrong('Papagaio'),
        AnswerModel.wrong('Gato'),
        AnswerModel.right('Cão'),
    ]),
    new QuestionModel(202, 'Qual o clube de Futebol cujo o emblema possui um dragão?', [
        AnswerModel.wrong('Sporting'),
        AnswerModel.wrong('Benfica'),
        AnswerModel.wrong('Nacional'),
        AnswerModel.right('Porto'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AnswerModel.wrong('Manada'),
        AnswerModel.wrong('Alcateia'),
        AnswerModel.wrong('Rebanho'),
        AnswerModel.right('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswerModel.wrong('Equilátero'),
        AnswerModel.wrong('Isóceles'),
        AnswerModel.wrong('Trapézio'),
        AnswerModel.right('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem descobriu o Brasil?', [
        AnswerModel.wrong('Castro Pereira'),
        AnswerModel.wrong('Manuel Bandeira'),
        AnswerModel.wrong('José Fonte'),
        AnswerModel.right('Pedro Álvares Cabral'),
    ]),
    new QuestionModel(206, 'Qual é o antónimo de "malograr"?', [
        AnswerModel.wrong('Perder'),
        AnswerModel.wrong('Fracassar'),
        AnswerModel.wrong('Desprezar'),
        AnswerModel.right('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        AnswerModel.wrong('Argentina'),
        AnswerModel.wrong('Espanha'),
        AnswerModel.wrong('Brasil'),
        AnswerModel.right('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o primeiro rei de Portugal?', [
        AnswerModel.wrong('D. João I'),
        AnswerModel.wrong('D. Dinis'),
        AnswerModel.wrong('D. Pedro'),
        AnswerModel.right('D. Afonso Henriques'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AnswerModel.wrong('Ás'),
        AnswerModel.wrong('Nove'),
        AnswerModel.wrong('Rei'),
        AnswerModel.right('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        AnswerModel.wrong('Vela'),
        AnswerModel.wrong('Vento'),
        AnswerModel.wrong('Vênia'),
        AnswerModel.right('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        AnswerModel.wrong('Abrupção'),
        AnswerModel.wrong('Abolição'),
        AnswerModel.wrong('Abnegação'),
        AnswerModel.right('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AnswerModel.wrong('Monte Branco'),
        AnswerModel.wrong('Monte Fuji'),
        AnswerModel.wrong('Monte Carlo'),
        AnswerModel.right('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        AnswerModel.wrong('Estômago'),
        AnswerModel.wrong('Pâncreas'),
        AnswerModel.wrong('Rim'),
        AnswerModel.right('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        AnswerModel.wrong('Déficit'),
        AnswerModel.wrong('Indexação'),
        AnswerModel.wrong('Indébito'),
        AnswerModel.right('Indenização'),
    ]),
    new QuestionModel(215, 'De onde é o famoso futebolista Cristiano Ronaldo?', [
        AnswerModel.wrong('Lisboa'),
        AnswerModel.wrong('Açores'),
        AnswerModel.wrong('Ilhas Canárias'),
        AnswerModel.right('Ilha da Madeira'),
    ]),
    new QuestionModel(216, 'Qual o nome mais comum do mundo?', [
        AnswerModel.wrong('João'),
        AnswerModel.wrong('Pedro'),
        AnswerModel.wrong('José'),
        AnswerModel.right('Mohammed'),
    ]),
]

export default questions;