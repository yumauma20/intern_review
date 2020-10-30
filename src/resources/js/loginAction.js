const LOGIN = "LOGIN";
//action Creator
export const loginAction = (LoggedIn = false) => {
    return {
        //action
        type: LOGIN,
        LoggedIn
    };
};
