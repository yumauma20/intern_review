const LOGIN = "LOGIN";
//action Creator
export const loginAction = (Token, LoggedIn) => {
    console.log(Token);
    return {
        //action
        type: LOGIN,
        LoggedIn: LoggedIn,
        Token: Token
    };
};
