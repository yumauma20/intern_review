const initialState = {
    LoggedIn: false,
    Token: ""
};

export default (state = initialState, action) => {
    console.log(action);
    // console.log(Token);
    switch (action.type) {
        case "LOGIN":
            return { LoggedIn: true, Token: action.Token };
        case "LOGOUT":
            return { LoggedIn: false };
        default:
            return state;
    }
};
