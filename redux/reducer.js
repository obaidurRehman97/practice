export const rootReducer = (state = {
        loginStatus:false,
        email:"test@tester.com",
        password:"12345"
    },action) =>{
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                loginStatus:true
            }
        case "LOGOUT":
            return {
                ...state,
                loginStatus:false
            }
            
        default:
            return state;
    }
}