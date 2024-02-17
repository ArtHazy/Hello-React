import classNames from 'classnames';
import { useState } from 'react';
import styles from './App.module.scss';
import { Choice, Question, Quiz, User } from '../../../classes.mjs';
import { Footer, ViewNavigation } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import Header_module from '../../components/header/header.module.scss';
import { JoinView } from '../../components/join-view/join-view';
import { LibraryView } from '../../components/library-view/library-view';
import { ProfileView } from '../../components/profile-view/profile-view';
import { QuizEditView } from '../../components/quiz-edit-view/quiz-edit-view';
import React from 'react';


export const user: User = JSON.parse(localStorage.getItem('self-user') || '{}');

export const views = {
    library: { name: 'library', content: null },
    join: { name: 'join', content: null },
    profile: { name: 'profile', content: null },
    quiz_edit: { name: 'quiz_edit', content: null },
};

export function store_user(user: User){
    localStorage.setItem('self-user', JSON.stringify(user))
}

export const limits = {
    maxNameLength: 24,
    maxEmailLength: 64,
    maxPasswordLength: 64,
    maxTextLength: 64,
    maxQuizes: 20,
    maxQuestions: 20,
    maxChoices: 4,
}
export function alert_limit(){
    alert('Limit exceeded')
}

export let quiz_gl = { quiz: new Quiz('', []), index: null };


export default function App() {
    if (localStorage.getItem('self-user')){
        const [view_name, set_view_name] = useState(views.join.name);

        console.log('app render');
        

        console.log(user);

        views.library.content = LibraryView({ set_view_name })
        views.quiz_edit.content = QuizEditView({ quiz: quiz_gl.quiz, set_view_name: set_view_name })
        views.profile.content = ProfileView({})
        views.join.content = JoinView({})


        return (
            <div className={classNames(styles.App, styles['padding-default'])}>
                <Header>
                    {view_name == views.profile.name ? (
                        <div className={'hstack ' + Header_module['user-main-info-container']} style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <div>{user.name}</div>
                            {user.profile_picture}
                        </div>
                    ) : (
                        <div>{view_name}</div>
                    )}
                    {view_name == views.library.name ? <div>{user.quizzes?.length || 0} / {limits.maxQuizes}</div> : null}
                    {view_name == views.quiz_edit.name ? <div>{quiz_gl.quiz.questions.length || 0} / {limits.maxQuestions}</div>: null}
                </Header>
                <div id='view-container' className={styles['view-container']}>
                    {views[view_name].content}
                </div>

                <Footer>
                    <ViewNavigation view_name={view_name} set_view_name={set_view_name}></ViewNavigation>
                </Footer>
                {/* {view_name == views.quiz_edit.name ? <Footer></Footer> : null} */}
            </div>
        );
    }
}
