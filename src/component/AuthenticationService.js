class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user=sessionStorage.getItem('authenticatedUser');
        if(user===null) return false;
        return true;
    }

    getUsername() {
        return sessionStorage.getItem('authenticatedUser');
    }
}

export default new AuthenticationService();