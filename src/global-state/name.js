const name = (state = "", action) => {
    switch (action.type) { 
        case "NAME_CHANGE":
            return state + action.payload
        default:
            return state 
    }

}

export default name