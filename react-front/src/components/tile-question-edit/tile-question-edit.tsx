import classNames from 'classnames';
import styles from './tile-question-edit.module.scss';
import tile_styles from '../tile/tile.module.scss';
import { Choice, Question, Quiz } from '../../../classes.mjs';
import { useState } from 'react';
import footerStyles from '../footer/footer.module.scss';
import React from 'react';
import { alert_limit, limits, store_user, user } from '../../components-main/app/App';
import { Footer } from '../footer/footer';

export interface Tile_QuestionEditProps {
    className?: string;
    children?: any
    quiz: Quiz
    question: Question
    questionInd: number
    updateQuizEditView: any

}



export const Tile_QuestionEdit = ({ className, children, quiz, question, questionInd, updateQuizEditView }: Tile_QuestionEditProps) => {
    const [flag, set_flag] = useState(false)
    function update() {
        store_user(user)
        set_flag(!flag)
    }
    return (
        <div className={classNames(tile_styles['Tile'], tile_styles['tile-form'], className)}>
            <div>Name</div>
            
            <div className='spacer-default'></div>
            
            <input value={question?.text} maxLength={limits.maxTextLength} onChange={(e) => {
                question.text = e.target.value
                update()
            }} />

            <div className='spacer-default'></div>

            {question.choices.map((choice, index) => {
                return (
                    <div className='hstack'>
                        <input type="checkbox" name={questionInd + '-correct-selection'} className={styles.radio} checked={choice.isCorrect} onClick={() => {
                            choice.isCorrect = !choice.isCorrect;
                            update()
                            console.log(question.choices);
                        }} />
                        <input value={choice.text} maxLength={limits.maxTextLength} onChange={(e) => {
                            choice.text = e.target.value
                            update()
                            console.log(choice.text);
                            console.log(choice);

                        }} />
                        <button style={{ border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent' }} onClick={() => {
                            question.choices.splice(index, 1)
                            update()
                        }}>
                            <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                        </button>
                    </div>
                )
            })}

            <div className={footerStyles['buttons-container']} style={{background: 'transparent'}}>

                <div></div>
                <button style={{ border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent' }} onClick={() => {
                    console.log(questionInd);
                    console.log(quiz.questions);

                    quiz.questions.splice(questionInd, 1)
                    console.log(quiz.questions);
                    updateQuizEditView()
                    console.log(quiz.questions.length);

                }}>
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                </button>
                <button style={{ border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent' }} onClick={() => {
                    question.choices.length < limits.maxChoices ? question.choices.push(new Choice('new', false)) : alert_limit()
                    update()
                }}>
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                </button>
                

                <div></div>

            </div>

        </div>
    );
};
