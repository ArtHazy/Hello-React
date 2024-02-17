
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
    function update(){
        store_user(user)
        update_flag(!flag)
    }

    return (
        <div className={classNames(styles.QuizEditView, className)}>
            <div className="vstack tile-container ">

                <TileForm>
                    <div>Quiz title</div>
                    <input value={quiz.title} maxLength={limits.maxTextLength} onClick={(e)=>{
                    }} onChange={(e)=>{
                        quiz.title = e.target.value
                        update()
                    }}/>
                </TileForm>

                <h3>Questions</h3>

                {quiz?.questions.map((question, index) =>{
                    console.log(question);
                    return(
                        <div>
                            {/* <Tile><h3>{question.text}</h3></Tile> */}
                            <Tile_QuestionEdit question={question} quiz={quiz} questionInd={index} updateQuizEditView={update}/>
                            <div className='spacer-default'></div>
                        </div>
                    )
                })}
                <button onClick={()=>{
                    quiz.questions.length<limits.maxQuestions? quiz.questions.push(new Question('new',[])) : alert_limit()
                    update()
                }}>+</button>
                <button onClick={()=>{
                    alert('start')
                }}>start</button>
                <button onClick={()=>{
                    quiz_gl.index != null ? user.quizzes?.splice(quiz_gl.index, 1) : null
                    update()
                    set_view_name(views.library.name)
                }}>delete</button>
            </div>
            <Footer bottom='2cm'>
                <div className={footerStyles['buttons-container']}>
                    <button style={{border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent'  }} onClick={() => {
                        !user.quizzes ? user.quizzes = [] : null
                        user.quizzes.length < limits.maxQuizes ? user.quizzes.push(new Quiz('new', [])) : alert_limit()
                        update()
                    }}>
                        <AddIcon />
                    </button>
                </div>
            </Footer>
        </div>
    );
};

