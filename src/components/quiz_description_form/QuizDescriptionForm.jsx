import React, {useContext, useEffect, useState} from 'react';
import ConfirmButton from "../UI/buttons/ConfirmButton";
import Notiflix from "notiflix";
import {Link} from "react-router-dom";
import classes from './QuizDescriptionForm.module.css'

const QuizDescriptionForm = ({description}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        if (!isChecked) {
            Notiflix.Notify.Warning('Please check the checkbox before submitting.');
        }
    }

    return (
        <form className={classes.newDescriptionForm}>
            <div>
                <strong>{description}</strong>
            </div>
            <div className={classes.checkBoxItem}>
                <input type='checkbox' id='myCheckbox' checked={isChecked}
                       onChange={e => setIsChecked(e.target.checked)}/>
                <label className={classes.itemLabel} htmlFor='myCheckbox'> I agree to start</label>
            </div>
            {isChecked ? (
                <Link to='/quiz/questions'>
                    <ConfirmButton onClick={handleClick}>
                        Proceed
                    </ConfirmButton>
                </Link>
            ) : null}
        </form>
    );
}

export default QuizDescriptionForm;