import classNames from 'classnames';
import { useState } from 'react';
import styles from './App.module.scss';
import { Choice, Question, Quiz, User } from './classes';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import Header_module from './components/header/header.module.scss';
import { JoinView } from './components/join-view/join-view';
import { LibraryView } from './components/library-view/library-view';
import { ProfileView } from './components/profile-view/profile-view';
import { QuizEditView } from './components/quiz-edit-view/quiz-edit-view';


export const user: User = new User(
    'My Name',
    (
        <img
            className="picture"
            src="https://i.pinimg.com/564x/2d/fd/16/2dfd168f0d2d01a92215c6331c5ba826.jpg"
        ></img>
    ),
    [
        new Quiz('quiz1', [new Question('question1', [new Choice('choice-A', false), new Choice('choice-B', true)]), new Question('question2', [new Choice('choice-A', true), new Choice('choice-B', false)])]),
        {title:'quiz3', questions:[{text:'question3', choices:[{text: 'choice-A', isCorrect: false}, {text: 'choice-B', isCorrect: true}]}]}
    ]
);

export const views = {
    library: {name: 'library', content: null },
    join: {name: 'join', content: null },
    profile: {name: 'profile', content: null  },
    quiz_edit: {name:'quiz_edit', content: null  },
};

export let quiz_gl = {quiz: new Quiz('',[]), index: null};


export default function App() {
    const [view_name, set_view_name] = useState(views.join.name);

    console.log(view_name);
    console.log(user);
    
    views.library.content = LibraryView({set_view_name})
    views.quiz_edit.content = QuizEditView({quiz: quiz_gl.quiz, set_view_name: set_view_name})
    views.profile.content = ProfileView({})
    views.join.content = JoinView({})


    return (
        <div className={classNames(styles.App, styles['padding-default'])}>
            <Header>
                {view_name == views.profile.name ? (
                    <div className={'hstack '+Header_module['user-main-info-container']} style={{justifyContent: 'space-evenly', alignItems:'center'}}>
                        <div>{user.name}</div>
                        {user.profile_picture}
                    </div>
                ) : (
                    <div>{view_name}</div>
                )}
            </Header>

            {views[view_name].content}

            <Footer view_name={view_name} set_view_name={set_view_name} />
        </div>
    );
}
