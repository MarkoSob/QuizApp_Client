import {useState} from 'react';
import {QuizContext} from '../../context/context';

const QuizProvider = ({children}) => {
    const [quizId, setQuizId] = useState('');

    return (
        <QuizContext.Provider value={{quizId, setQuizId}}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider