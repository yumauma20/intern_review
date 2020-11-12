const initialState = {
    LoggedIn: false,
    Token: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { LoggedIn: true, Token: action.Token };
        case "LOGOUT":
            return { LoggedIn: false, Token: "" };
        default:
            return state;
    }
};
