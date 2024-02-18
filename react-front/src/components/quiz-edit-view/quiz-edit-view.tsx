
import classNames from 'classnames';
import '../../index.css';
import { Tile_QuestionEdit } from '../tile-question-edit/tile-question-edit';
import { Tile, TileForm } from '../tile/tile';
import styles from './quiz-edit-view.module.scss';
import footerStyles from '../footer/footer.module.scss';
import { Question, Quiz } from '../../../classes.mjs';
import { useState } from 'react';
import { alert_limit, limits, quiz_gl, store_user, user, views } from '../../components-main/app/App';
import React from 'react';
import { AddIcon, Footer } from '../footer/footer';


export interface QuizEditViewProps {
    className?: string;
    quiz: Quiz
    set_view_name: React.Dispatch<React.SetStateAction<string>>
}


export const QuizEditView = ({ className, quiz, set_view_name }: QuizEditViewProps) => {
    const [flag, update_flag] = useState(false)
    function update() {
        store_user(user)
        update_flag(!flag)
    }

    return (
        <div className={classNames(styles.QuizEditView, className, 'view')}>
            <div className="vstack tile-container ">

                <TileForm>
                    <div>Quiz title</div>
                    <div className='spacer-default'></div>
                    <input value={quiz.title} maxLength={limits.maxTextLength} onClick={(e) => {
                    }} onChange={(e) => {
                        quiz.title = e.target.value
                        update()
                    }} />
                </TileForm>

                <h3>Questions</h3>

                {quiz?.questions.map((question, index) => {
                    console.log(question);
                    return (
                        <div>
                            {/* <Tile><h3>{question.text}</h3></Tile> */}
                            <Tile_QuestionEdit question={question} quiz={quiz} questionInd={index} updateQuizEditView={update} />
                            <div className='spacer-default'></div>
                        </div>
                    )
                })}

            </div>
            <Footer bottom='2cm'>
                <div className={footerStyles['buttons-container']}>
                    <button style={{ border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent' }} onClick={() => {
                        quiz_gl.index != null ? user.quizzes?.splice(quiz_gl.index, 1) : null
                        update()
                        set_view_name(views.library.name)
                    }}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                    </button>
                    <button style={{ border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent' }} onClick={() => {
                        let questions = quiz_gl.quiz.questions
                        !questions ? questions = [] : null
                        questions.length < limits.maxQuestions ? questions.push(new Question('new', [])) : alert_limit()
                        update()
                    }}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                    </button>
                    <button style={{ border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent' }} onClick={() => {
                        alert('start')
                    }}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
                    </button>

                </div>
            </Footer>
        </div>
    );
};

