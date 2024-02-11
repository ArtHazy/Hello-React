
import classNames from 'classnames';
import '../../index.css';
import { Tile_QuestionEdit } from '../tile-question-edit/tile-question-edit';
import { Tile, TileForm } from '../tile/tile';
import styles from './quiz-edit-view.module.scss';
import { Question, Quiz } from '../../classes';
import { useState } from 'react';
import { quiz_gl, user, views } from '../../App';


export interface QuizEditViewProps {
    className?: string;
    quiz: Quiz
    set_view_name: React.Dispatch<React.SetStateAction<string>>
}


export const QuizEditView = ({ className, quiz, set_view_name }: QuizEditViewProps) => {
    const [flag, update_flag] = useState(false)
    function update(){
        update_flag(!flag)
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className="vstack tile-container ">

                <TileForm>
                    <div>Quiz title</div>
                    <input value={quiz.title} onClick={(e)=>{
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
                    quiz.questions.push(new Question('new',[]))
                    update_flag(!flag)
                }}>+</button>
                <button onClick={()=>{
                    alert('start')
                }}>start</button>
                <button onClick={()=>{
                    quiz_gl.index? user.quizzes.splice(quiz_gl.index, 1) : null
                    set_view_name(views.library.name)
                }}>delete</button>
            </div>

        </div>
    );
};

