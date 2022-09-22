const errorMsg = (state = false, action) => {
    switch (action.type) { 
        case "ERROR_TRIGGER":
            return state + action.payload
        default:
            return state 
    }

}

export default errorMsg