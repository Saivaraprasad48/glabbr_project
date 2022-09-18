import "./index.css"

const Pagination = (props) => {
    const { count, postPerPage } = props 
    let buttons = []
    for (let i = 0; i <= Math.ceil(count / postPerPage); i++){
        buttons.push(i)
    }
    return (
        <div>
            {buttons.map((e, index) => {
                return <button key={index} > { e } </button>
        } )}
        </div>
    )
}

export default Pagination