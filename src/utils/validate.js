export const checkValiddata = (email, password) => {
    const errors = {};
    const checkValidEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value)
    const checkValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.current.value)

    if (!checkValidEmail) {
        errors.email = 'Email address is not valid';
    }

    if (!checkValidPassword) {
        errors.password = 'Password not valid';
    }

    return errors;
}