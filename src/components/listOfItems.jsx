import PersonItem from "./personLi"
import Database from "../database/Database"
import { useState } from "react"

function ListItems(props) {
    const db = new Database()
    const dPep = db.data
    const [dbTemp, updateDB] = useState([...dPep])
    let [dataFromChild, setDataFromChild] = useState('')
    const handleDataFromChild = (data) => {
        setDataFromChild(data)
        console.log(data)
        props.updateUserDetails(data)
    }

    const listOfPersonItem = (props.newPep).map((pdata) => <PersonItem 
        pepDetails = {{pid : pdata.id,
            pnome : pdata.nome,
            pusername : pdata.username,
            pgn : pdata.gn,
            ptlf : pdata.tlf,
            handleDataFromChild: handleDataFromChild}}
        key = {pdata.id}
        
    /> )

    return (
            <ul className="list">
                {listOfPersonItem}
            </ul>
    )
  }
  
  export default ListItems