export default {
	userNameValidator: (userName) => {
		if (!userName) {
			return {
				errorMessage: 'Please Insert User Name',
				status: true
			};
		}
		if (userName.length > 256) {
			return {
				errorMessage: 'Exceed Limit',
				status: true
			};
		}

		return {
			errorMessage: '',
			status: false
		};
	},
	passwordValidator: (passWord) => {
		if (!passWord) {
			return {
				errorMessage: 'Please Insert password',
				status: true
			};
		}

		return {
			errorMessage: '',
			status: false
		};
	}
};
