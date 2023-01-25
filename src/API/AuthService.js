import axios from 'axios';

const API_URL = 'https://localhost:5001/auth/';

class AuthService {
    async login(username, password) {
        return await axios.post(API_URL + 'login', {
            Login: username,
            Password: password
        })
            .then(response => {
                console.log(response.data);
                if (response.data) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    localStorage.setItem('email', username)
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('email');
        localStorage.removeItem('quizzes');
        localStorage.removeItem('answers');
    }

    async register(firstname, lastname, email, password) {
        return await axios.post(API_URL + 'register', {
            Firstname: firstname,
            Lastname: lastname,
            Email: email,
            Password: password
        })
            .then(response => {
                return response.data;
            });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
        ;
    }
}

export default new AuthService();