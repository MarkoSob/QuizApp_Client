import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from '../UI/navbar/Navbar';
import Notiflix from 'notiflix';
import AuthProvider from '../context_providers/AuthProvider';
import QuizProvider from '../context_providers/QuizProvider';
import QuestionsProvider from '../context_providers/QuestionsProvider';
import AppRouter from '../AppRouter';
import ChoicesProvider from '../context_providers/ChoicesProvider';

function MainWindow() {

    useEffect(() => {
        Notiflix.Notify.init({width: '480px', position: 'center-top'});
    }, [])

    return (
        <AuthProvider>
            <QuizProvider>
                <QuestionsProvider>
                    <ChoicesProvider>
                        <BrowserRouter>
                            <Navbar/>
                            <AppRouter/>
                        </BrowserRouter>
                    </ChoicesProvider>
                </QuestionsProvider>
            </QuizProvider>
        </AuthProvider>
    );
}

export default MainWindow;
