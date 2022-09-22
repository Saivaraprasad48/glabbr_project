const PagesPerPage = (state = "", action) => {
    switch (action.type) { 
        case "PAGES_CHANGE":
            return state + action.payload
        default:
            return state 
    }

}

export default PagesPerPage