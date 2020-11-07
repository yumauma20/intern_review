const LOGIN = "LOGIN";
export const loginAction = (Token, LoggedIn = false) => {
    return {
        type: LOGIN,
        LoggedIn,
        Token
    };
};
