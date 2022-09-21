import { Component } from "react"
import "./index.css"
import data from "../Contacts/index.json"
import ContactItem from "../ContactItem/index"
import { BiSearchAlt2 } from "react-icons/bi"
import { IoFilterSharp } from "react-icons/io5"
import FavoriateItem from "../FavoriateItem/index"
import Pagination from "../Pagination"
import { v4 } from "uuid"



class Home extends Component {
    state = { contacts: data, errorMsg:false, searchValue: "", currentPage: 1, postsPerPage: 10, isFormOpen: false, name: "", status:"",location:"" }
    triggeredFav = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.map((each) => {
                if (id === each.id) {           
                    return { ...each, isFavoriate: !each.isFavoriate }
                }
                return each
            })
        }))
    }


    addContanct = () => {
        this.setState({isFormOpen:true})
    }

    formSubmitted = (event) => {
        event.preventDefault()
        const { name, action, location } = this.state 
        if (name !== "" && action !== "" && location !== "") {
            const newContact = {
                id: v4(),
                name: name,
                status: action,
                location: location,
                isFavoriate: false
            }
            this.setState(prevState => ({
                contacts: [...prevState.contacts, newContact]
            }))
            this.setState({ name: "", action: "", location: "",errorMsg: false })
            
        } else {
            this.setState({ errorMsg: true })
            
        }
    }
  

    getContact = event => {
        this.setState({searchValue:event.target.value})
    }

    triggerDel = id => {
        const {contacts} = this.state
        const filteredContacts = contacts.filter((e) => e.id !== id)
        this.setState({contacts:filteredContacts})
    }

    setGo = page => {
        this.setState({ currentPage: page })
    }

    getCancelForm = () => {
        this.setState({isFormOpen:false})
    }

    nameChange = (e) => {
        this.setState({name:e.target.value})
    }

    actionChange = (e) => {
        this.setState({action:e.target.value})
    }
    locationChange = (e) => {
        this.setState({location:e.target.value})
    }
    
    getForm = () => {
        const {errorMsg ,name, action, location} = this.state
        return (
            <form className="form" onSubmit={this.formSubmitted}>
                <div className="form-card">
                    <h1> Enter Details </h1>
                    <label htmlFor="name" className="label"> Name </label>
                    <input type="text" className="input" value={name} id="name" onChange={this.nameChange} placeholder="Enter your name" /><br/>
                    <label htmlFor="action" className="label"> Active or Inactive </label>
                    <input type="text" id="action" className="input" value={action} onChange={this.actionChange} placeholder="Active or Inactive" /><br/>
                    <label htmlFor="location" className="label"> Location </label>
                    <input type="text" className="input" placeholder="Location" value={location} onChange={this.locationChange} /><br/>
                    {errorMsg && <p className="error"> Please Enter Details </p> }
                    <button type="submit" className="submit-btn"> Submit </button>    
                
                    <button onClick={this.getCancelForm} className="cancel-btn"> Cancel </button>
                </div>
            </form>
        )
    }

    render() {
        const { contacts, searchValue, currentPage, postsPerPage,isFormOpen } = this.state
        const searchedContacts = contacts.filter((each) => each.name.toLowerCase().includes(searchValue.toLowerCase()))
        const FavData = contacts.filter(e => (e.isFavoriate === true))
        const FavLength = FavData.length
        const ContactLength = contacts.length
        const lastPostIndex = currentPage * postsPerPage
        const firstPostIndex = lastPostIndex - postsPerPage
        const currentPosts = searchedContacts.slice(firstPostIndex, lastPostIndex)
        return (
            <div className="bg-container">
                <header className="header">
                    <div className="header-info">
                       <h1 className="header-text"> DOZ Pharmacy - Contacts </h1>
                    </div>
                    <div className="header-actions">
                        <button className="btn-add" onClick={this.addContanct}> Add Contact </button>
                        <div className="filter-container">
                            <IoFilterSharp />
                        </div>
                        <div className="search-container">
                            <BiSearchAlt2 className="search-icon" />
                            <input className="search-input" value={searchValue} onChange={this.getContact} type="search" placeholder="Search"/>
                        </div>
                      
                    </div>
                </header>
                {isFormOpen && this.getForm()}
                <main className="content">
                    <div className="favoriates-container">
                        <h1 className="favoriate-text"> Favoriates - { FavLength }  </h1>
                        <ul className="favoriates-cards-container">
                            {FavData.map((e) =>  <FavoriateItem key={e.id} data={e} />)}
                        </ul>
                    </div>
                    <div className="contacts-container">
                        <h1 className="contacts-text"> Contacts Lists - { ContactLength } </h1>
                        <div className="contact-info-container">
                            <p className="contact-info-text"> Name </p>
                            <p className="contact-info-text"> Status </p>
                            <p className="contact-info-text"> Loaction </p>
                            <p className="contact-info-text"> Actions </p>
                            <p className="contact-info-text"> Favoriate </p>
                            <p className="contact-info-text"> Delete </p>
                        </div>
                            <ul className="contact-details">
                                {currentPosts.map((eachItem) => <ContactItem key={eachItem.id} data={eachItem} triggerFav={this.triggeredFav} triggerDel={this.triggerDel} />)}
                            </ul>    
                        <Pagination count={contacts.length} setGo={this.setGo} currentPage={currentPage} postPerPage={postsPerPage} />    
                    </div>
                    
                </main>
            </div>
        )
    }
}


  
  export default Home;