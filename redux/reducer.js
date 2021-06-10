export const rootReducer = (state,action) =>{
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