import Login from '../pages/Login';
import QuestionsPage from '../pages/QuestionsPage';
import Quiz from '../pages/Quiz';

export const authorizedRoutes = [
    {path: '/quiz', element: <Quiz/>, exact: true},
    {path: '/quiz/questions', element: <QuestionsPage/>, exact: true}
]
export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true}
]

