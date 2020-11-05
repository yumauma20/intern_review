const LOGOUT = "LOGOUT";
//action Creator
export const logoutAction = LoggedIn => {
    return {
        //action
        type: LOGOUT,
        LoggedIn
    };
};
