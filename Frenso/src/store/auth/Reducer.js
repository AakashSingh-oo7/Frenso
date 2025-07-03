const initialState = {
  user: null,
  error: null,
  loading: false,
  jwt:null,
};

export const authReducer=(state=initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER_REQUEST":
        case "REGISTER_USER_REQUEST":
        case "GET_USER_PROFILE_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "LOGIN_USER_SUCCESS":
        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                jwt: action.payload,
                loading: false,
                error: null,
            };

        case "GET_USER_PROFILE_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_USER_FAILURE":
        case "REGISTER_USER_FAILURE":
        case "GET_USER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
