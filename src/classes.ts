export class User {
    name: string;
    profile_picture: JSX.Element;
    quizzes: Quiz[];
    constructor(name: string, profile_picture: JSX.Element, quizzes:Quiz[]) {
        this.name = name;
        this.profile_picture = profile_picture;
        this.quizzes = quizzes;
    };
}
export class Choice {
    text: string;
    isCorrect: boolean;
    constructor(
        text: string,
        isCorrect: boolean
    ) {
        this.text = text;
        this.isCorrect = isCorrect;
    }
}
export class Question {
    text: string;
    choices: Choice[];
    constructor(
        text: string,
        choices: Choice[],
    ) {
        this.choices = choices;
        this.text = text;
    }
}
export class Quiz {
    title: string;
    questions: Question[];
    constructor(
        title: string,
        questions: Question[],
    ) {
        this.questions = questions;
        this.title = title
    }
}
