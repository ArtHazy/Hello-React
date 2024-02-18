import classNames from 'classnames';
import styles from './library-view.module.scss';
import footerStyles from '../footer/footer.module.scss';
import { Tile } from '../tile/tile';
import { alert_limit, limits, quiz_gl, store_user, user, views } from '../../components-main/app/App';
import { QuizEditView } from '../quiz-edit-view/quiz-edit-view';
import { useState, useLayoutEffect } from 'react';
import { Quiz } from '../../../classes.mjs';
import { AddIcon, Footer, HomeIcon } from '../footer/footer';
import React from 'react';

export interface LibraryViewProps {
    className?: string;
    set_view_name: React.Dispatch<React.SetStateAction<string>>;
    update_call: () => void;
}


export const LibraryView = ({ className, set_view_name }: LibraryViewProps) => {

    const [flag, set_flag] = useState(false)
    function update() {
        store_user(user)
        set_flag(!flag)
    }


    useLayoutEffect(() => {
        let scrollView = document.getElementById('view-container')
        console.log('scrll height ' + scrollView?.scrollHeight);
        scrollView ? scrollView.scrollTop = scrollView.scrollHeight : null
    }, [flag])


    return (
        <div style={{alignItems:'normal'}} className={classNames('view', styles.LibraryView, className)}>
            <div className={styles['grid-tile-container']}>
                {user.quizzes?.map((quiz, index) => {
                    return (
                        <Tile onClick={() => {
                            quiz_gl.quiz = quiz;
                            quiz_gl.index = index
                            set_view_name(views.quiz_edit.name)
                        }}>
                            <h3>{quiz.title}</h3>
                            questions: {quiz.questions.length}
                        </Tile>
                    )
                })}
                {/* <Tile onClick={()=>{
                    !user.quizzes? user.quizzes = [] : null
                    user.quizzes.length<limits.maxQuizes? user.quizzes.push(new Quiz('new',[])) : alert_limit()
                    update()
                }}> <h3>+</h3> </Tile> */}

            </div>
            <Footer bottom='2cm'>
                <div className={footerStyles['buttons-container']}>
                    <button style={{border: 0, padding: 0, margin: 0, height: 'fit-content', width: 'fit-content', boxSizing: 'border-box', background: 'transparent'  }} onClick={() => {
                        !user.quizzes ? user.quizzes = [] : null
                        user.quizzes.length < limits.maxQuizes ? user.quizzes.push(new Quiz('new', [])) : alert_limit()
                        update()
                    }}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                    </button>
                </div>
            </Footer>
        </div>
    );
};
