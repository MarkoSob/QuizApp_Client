import React from 'react';
import QuizItem from '../quiz_item/QuizItem';
import classes from './QuizList.module.css'

const QuizList = ({quizzes}) => {

    return (
        <div className={classes.quizList}>
            {quizzes.map((quiz) =>
                <QuizItem key={quiz.id} quiz={quiz}/>
            )}
        </div>
    );
}
export default QuizList;