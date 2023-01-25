import React, {useContext, useEffect, useState} from 'react';
import {ChoicesContext} from '../../context/context';
import classes from './QuestionItem.module.css'

const QuestionItem = ({question, choices}) => {

    const {answers, setAnswers} = useContext(ChoicesContext);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleRadioChange = (e) => {
        let newAnswer = {[question.id]: e.target.value};
        setAnswers(prevAnswers => ({...prevAnswers, ...newAnswer}));
        setSelectedAnswer(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
        console.log(answers);
    }, [answers]);

    useEffect(() => {
        const answersFromStorage = localStorage.getItem('answers');
        if (answersFromStorage) {
            setAnswers(JSON.parse(answersFromStorage));
        }
    }, []);

    return (
        <div className={classes.questionItem}>
            <strong>{question.questionText}</strong>
            <div className={classes.choicesArea}>
                {choices.map((choice) => (
                    <div key={choice.id}>
                        <input type='radio'
                               id={choice.id}
                               value={choice.text}
                               onChange={handleRadioChange}
                               checked={choice.text === selectedAnswer}/>
                        <label
                            className={classes.itemLabel}
                            htmlFor={choice.id}>
                            {choice.text}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionItem;