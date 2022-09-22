const status = (state = "", action) => {
    switch (action.type) { 
        case "STATUS_CHANGE":
            return state + action.payload
        default:
            return state 
    }

}

export default status