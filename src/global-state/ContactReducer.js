import data from "../components/Contacts"

const ContactReducer = (state = data, action) => {
    switch (action.type) { 
        case "UPDATE":
            return state + action.payload
        default:
            return state 
    }

}

export default ContactReducer