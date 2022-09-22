const currentPage = (state = 1, action) => {
    switch (action.type) { 
        case "FORM_TRIGGER":
            return state + action.payload
        default:
            return state 
    }

}

export default currentPage