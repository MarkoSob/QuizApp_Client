import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';
import QuizService from '../API/QuizService';
import QuestionItem from '../components/question_item/QuestionItem';
import ConfirmButton from '../components/UI/buttons/ConfirmButton';
import MyModal from '../components/UI/mymodal/MyModal';
import {ChoicesContext, QuestionsContext, QuizContext} from '../context/context';

const QuestionsPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {questions, setQuestions} = useContext(QuestionsContext);
    const [choices, setChoices] = useState([]);
    const {answers, setAnswers} = useContext(ChoicesContext);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [scoreModal, setScoreModal] = useState(0);

    const getChoices = async () => {
        const question = questions[currentQuestion];
        const response = await QuizService.getQuestionAnswers(question.id);
        setChoices([...response.data]);
    }

    const getScore = async () => {
        const score = await QuizService.getQuizScore(answers);
        setScore(score.data)
        setScoreModal(true);
        setAnswers({});
    }

    useEffect(() => {
        setTotalQuestions(questions.length);
    }, [questions]);

    useEffect(() => {
        getChoices();
    }, [currentQuestion]);

    const endQuiz = () => {
        localStorage.removeItem('answers');
        setScoreModal(false);
    }

    return (
        <div className='questionPage'>
            <div className='questionArea'>
                <QuestionItem question={questions[currentQuestion]} choices={choices}/>

                {currentQuestion === totalQuestions - 1 ?
                    <ConfirmButton onClick={() => getScore()}> Finish </ConfirmButton>
                    :
                    <ConfirmButton onClick={() => setCurrentQuestion(currentQuestion + 1)}> Next </ConfirmButton>}
            </div>
            <div>
                <MyModal visible={scoreModal} setVisible={setScoreModal}>
                    <div className='score'>
                        <div>
                            Your score is {score} / {questions.length}
                        </div>
                        <div>
                            <Link to='/quiz'>
                                <ConfirmButton style={{marginTop: 7}} onClick={() => endQuiz()}>Back</ConfirmButton>
                            </Link>
                        </div>
                    </div>
                </MyModal>
            </div>
        </div>
    );
}

export default QuestionsPage;