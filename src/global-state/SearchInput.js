
const SearchInput = (state = "SAI", action) => {
    switch (action.type) { 
        case "DATA_CHANGE":
            return state + action.payload
        default:
            return state 
    }

}

export default SearchInput