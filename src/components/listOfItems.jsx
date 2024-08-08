import PersonItem from "./personLi"
import Database from "../database/Database"
import { useState } from "react"

function ListItems(props) {
    let [dataFromChild, setDataFromChild] = useState('')
    const handleDataFromChild = (data) => {
        setDataFromChild(data)
        props.updateUserDetails(data)
    }
    let count = 0

    const listOfPersonItem = (props.newPep).map((pdata) => {
        count++
        return <PersonItem
            pepDetails={{
                pid: pdata.id,
                pnome: pdata.nome,
                pusername: pdata.username,
                pgn: pdata.gn,
                ptlf: pdata.tlf,
                handleDataFromChild: handleDataFromChild,
                removeUserFromList: props.removeUserFromList
            }}
            key={count}

        />
    })

    return (
        <ul className="list">
            {listOfPersonItem}
        </ul>
    )
}

export default ListItems