const isFormOpen = (state = false, action) => {
    switch (action.type) { 
        case "FORM_TRIGGER":
            return state + action.payload
        default:
            return state 
    }

}

export default isFormOpen