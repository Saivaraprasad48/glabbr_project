import { combineReducers } from "redux"
import ContactReducer from "./ContactReducer"
import SearchInput from "./SearchInput";
import isFormOpen from "./IsFormOpen";
import name from "./name";
import location from "./location";
import status from "./status";
import errorMsg from "./ErrorMsg";
import currentPage from "./currentPage";
import PagesPerPage from "./PagesPerPage";


const reducers = combineReducers({
    contactsData: ContactReducer,
    SearchInput: SearchInput,
    isFormOpen: isFormOpen,
    name: name,
    location: location,
    status: status,
    currentPage: currentPage,
    PagesPerPage: PagesPerPage,
    errorMsg:errorMsg
})

export default reducers;
