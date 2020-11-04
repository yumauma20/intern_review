const initialState = {
    LoggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { LoggedIn: true };
        case "LOGOUT":
            return { LoggedIn: false };
        default:
            return state;
    }
};
