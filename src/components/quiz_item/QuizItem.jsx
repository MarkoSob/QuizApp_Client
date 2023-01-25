import React, {useContext, useState} from 'react';
import MyButton from '../UI/buttons/MyButton';
import classes from './QuizItem.module.css'
import QuizDescriptionForm from "../quiz_description_form/QuizDescriptionForm";
import MyModal from '../UI/mymodal/MyModal';
import QuizService from "../../API/QuizService";
import {QuestionsContext, QuizContext} from '../../context/context';

const QuizItem = (props) => {
    const [descriptionModal, setDescriptionModal] = useState(false);
    const {questions, setQuestions} = useContext(QuestionsContext);

    const getQuestions = async () => {
        const response = await QuizService.getQuizQuestions(props.quiz.id);
        setQuestions([...response.data]);
    }
    
    const startQuiz = () => {
        getQuestions();
        setDescriptionModal(true)
    }

    return (
        <div>
            <div className={classes.quiz}>
                <div>
                    <strong>{props.quiz.title}</strong>
                </div>
                <div className={classes.quiz_btns}>
                    <div>
                        <MyButton onClick={() => startQuiz()}>Start</MyButton>
                    </div>
                </div>
            </div>
            <MyModal visible={descriptionModal} setVisible={setDescriptionModal}>
                <QuizDescriptionForm description={props.quiz.description}/>
            </MyModal>

        </div>
    );
}

export default QuizItem;