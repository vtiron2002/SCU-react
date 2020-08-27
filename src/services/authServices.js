import config from '../config';

const authServices = {
	saveAuthToken(token) {
		window.localStorage.setItem(config.TOKEN_KEY, token);
	},
	saveUserInfo(userInfo) {
		window.localStorage.setItem(config.USER_INFO, JSON.stringify(userInfo));
	},

	getUser() {
		return window.localStorage.getItem(config.USER_INFO);
	},
	getAuthToken() {
		return window.localStorage.getItem(config.TOKEN_KEY);
	},
	clearAuthToken() {
		window.localStorage.removeItem(config.TOKEN_KEY);
		window.localStorage.removeItem(config.USER_INFO);
	},
	hasAuthToken() {
		return !!authServices.getAuthToken();
	}
};

export default authServices;
