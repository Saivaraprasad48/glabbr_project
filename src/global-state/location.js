const location = (state = "", action) => {
    switch (action.type) { 
        case "LOCATION_CHANGE":
            return state + action.payload
        default:
            return state 
    }

}

export default location