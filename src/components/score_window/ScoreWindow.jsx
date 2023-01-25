import React from 'react';
import classes from './ScoreWindow.module.css'
import ConfirmButton from "../components/UI/button/ConfirmButton";

const ScoreWindow = ({score}) => {
    return (
        <div className={classes.scoreForm}>
            <div className={classes.scoreCard}>
                <div>
                    <div><b>your score is: {score}</b></div>
                </div>
                <div>
                    <ConfirmButton style={{width: 100}} onClick={() => setUpdateModal(true)}>Edit</ConfirmButton>
                </div>
            </div>
        </div>
    );
}

export default ScoreWindow;