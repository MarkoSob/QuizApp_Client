import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:5001/quiz/';

class QuizService {
    async getAllQuizzes() {
        let result = await axios.get(API_URL, {headers: authHeader()});
        return result;
    }

    async getRandomNumberOfQuizzes(numberOfQuizzes) {
        let result = await axios.get(API_URL + 'quizzes?numberOfQuizzes=' + numberOfQuizzes, {headers: authHeader()});
        return result;
    }

    async getQuizQuestions(quizId) {
        let result = await axios.get(API_URL + quizId, {headers: authHeader()});
        return result;
    }

    async getQuestionAnswers(questionId) {
        let result = await axios.get(API_URL + 'question/' + questionId, {headers: authHeader()});
        return result;
    }

    async getQuizScore(answers) {
        let result = await axios.post(API_URL, answers, {headers: authHeader()});
        return result;
    }

}

export default new QuizService();