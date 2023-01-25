import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import QuizService from "../API/QuizService";
import QuizList from "../components/quiz_list/QuizList";
import Notiflix from 'notiflix';

const Quiz = () => {
    const cachedData = localStorage.getItem('quizzes');
    const [quizzes, setQuizzes] = useState(cachedData ? JSON.parse(cachedData) : []);

    useEffect(() => {
        const getQuiz = async () => {
            try {
                const response = await QuizService.getRandomNumberOfQuizzes(2);

                if (localStorage.hasOwnProperty('quizzes')) {
                    setQuizzes(JSON.parse(localStorage.getItem('quizzes')));
                    return;
                } else {
                    setQuizzes(response.data);
                    localStorage.setItem('quizzes', JSON.stringify(response.data));
                }
            } catch (err) {
                Notiflix.Notify.failure('Error occured');
            }
        };

        getQuiz();

    }, []);

    return (
        <div className='mainArea'>
            <main className='quizzesArea'>
                <div>
                    <QuizList quizzes={quizzes}/>
                </div>
            </main>
        </div>
    );
};
export default Quiz;