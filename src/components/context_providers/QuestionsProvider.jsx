import {useState} from 'react';
import {QuestionsContext} from '../../context/context';

const QuestionsProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);

    return (
        <QuestionsContext.Provider value={{questions, setQuestions}}>
            {children}
        </QuestionsContext.Provider>
    );
};
export default QuestionsProvider;