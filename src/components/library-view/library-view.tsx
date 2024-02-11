import classNames from 'classnames';
import styles from './library-view.module.scss';
import { Tile } from '../tile/tile';
import { quiz_gl, user, views } from '../../App';
import { QuizEditView } from '../quiz-edit-view/quiz-edit-view';
import { useState } from 'react';
import { Quiz } from '../../classes';
import { HomeIcon } from '../footer/footer';

export interface LibraryViewProps {
    className?: string;
    set_view_name: React.Dispatch<React.SetStateAction<string>>;
}


export const LibraryView = ({ className, set_view_name }: LibraryViewProps) => {

    const [flag, set_flag] = useState(false)
    function update(){set_flag(!flag);}

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['grid-tile-container']}>
                {user.quizzes?.map((quiz,index)=>{
                    return(
                        <Tile onClick={()=>{
                            quiz_gl.quiz = quiz;
                            quiz_gl.index = index
                            set_view_name(views.quiz_edit.name)
                        }}>
                            <h3>{quiz.title}</h3>
                        </Tile>
                    )
                })}
                <Tile onClick={()=>{
                    user.quizzes.push(new Quiz('new',[]))
                    update()
                }}> <h3>+</h3> </Tile>

            </div>
        </div>
    );
};
