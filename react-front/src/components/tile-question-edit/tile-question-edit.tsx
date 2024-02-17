import classNames from 'classnames';
import styles from './tile-question-edit.module.scss';
import tile_styles from '../tile/tile.module.scss';
import { Choice, Question, Quiz } from '../../../classes.mjs';
import { useState } from 'react';
import React from 'react';
import { alert_limit, limits, store_user, user } from '../../components-main/app/App';

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
    function update(){
        store_user(user)
        set_flag(!flag)
    }
    return (
        <div className={classNames(tile_styles['Tile'], tile_styles['tile-form'], className)}>
            <div>Name</div>
            <input value={question?.text} maxLength={limits.maxTextLength} onChange={(e)=>{
                question.text = e.target.value
                update()
            }} />
            <div className='spacer-default'></div>

            {question.choices.map((choice, index) => {
                return (
                    <div className='hstack'>
                        <input type="checkbox" name={questionInd + '-correct-selection'} className={styles.radio} checked={choice.isCorrect} onClick={()=>{
                            choice.isCorrect = !choice.isCorrect;
                            update()
                            console.log(question.choices);
                        }}/>
                        <input value={choice.text} maxLength={limits.maxTextLength} onChange={(e)=>{
                            choice.text = e.target.value
                            update()
                            console.log(choice.text);
                            console.log(choice);
                            
                        }}/>
                        <button onClick={()=>{
                            question.choices.splice(index, 1)
                            update()
                        }}>delete</button>
                    </div>
                )
            })}

            <div className='hstack' style={{ justifyContent: 'space-around' }}>

                <div></div>
                <div><button onClick={()=>{
                    question.choices.length<limits.maxChoices? question.choices.push(new Choice('new', false)) : alert_limit()
                    update()
                }}>+</button></div>
                <div></div>

            </div>
            <button onClick={()=>{
                console.log(questionInd);
                console.log(quiz.questions);
                
                quiz.questions.splice(questionInd, 1)
                console.log(quiz.questions);
                updateQuizEditView()
                console.log(quiz.questions.length);
                
            }}>delete</button>
        </div>
    );
};