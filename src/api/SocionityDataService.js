import axios from 'axios';

class SocionityDataService {

    getUsernames() {
        return axios.get(`http://localhost:8060/socionity/users`);
    }

    signup(user) {
        return axios.post(`http://localhost:8060/socionity/user`, user);
    }

    login(username, password) {
        return axios.get(`http://localhost:8060/socionity/user/${username}/${password}`);
    }

    getUser(username) {
        return axios.get(`http://localhost:8060/socionity/user/${username}`);
    }

    updateProfile(username, user) {
        return axios.put(`http://localhost:8060/socionity/user/profile/${username}`, user);
    }

    updatePassword(username, user) {
        return axios.put(`http://localhost:8060/socionity/user/password/${username}`, user);
    }
    
    deleteUser(username) {
        return axios.delete(`http://localhost:8060/socionity/user/${username}`);
    }

}

export default new SocionityDataService();
