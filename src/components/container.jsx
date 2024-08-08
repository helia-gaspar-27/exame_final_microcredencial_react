import ListItems from "./listOfItems"
import BasicButton from "./button"
import GroupForm from "./groupForm"
import Database from "../database/Database"
import { useState } from "react"


function ContainerBody() {
    const db = new Database()
    const dPep = db.data
    const [dbTemp, updateDB] = useState([...dPep])

    let [arrow, changeArrowDirection] = useState('down')
    let [msg, changeBtnMsg] = useState('ADICONAR NOVA PESSOA')
    let btnClasses = (arrow == 'down' ? 'groupForm ' : 'groupForm aniFormDown')

    const contBody = document.getElementById('bodyContainer')
    const funcDoPai = (statusCase) => {
        if (!editForm) {
            updateDB(
                [...dbTemp, {
                    id: `${new Date().getTime()}`,
                    nome: statusCase.fnome,
                    username: statusCase.username,
                    gn: ((statusCase.genero).toUpperCase() == 'F' ? 'F' : 'M'),
                    tlf: '351' + statusCase.numTel
                }]
            )
            changeArrowDirection('down')
            setForm({
                fnome: '',
                fnomeMessage: '',
                username: '',
                usernameMessage: '',
                numTel: '',
                numTelMessage: '',
                genero: 'F',
                generoMessage: '',
                inpId: '',
            })
        }

    }

    const updateState = (userToUpdate) => {
        const newSate = dbTemp.map(obj => {
            if (obj.id == userToUpdate.inpId) {
                return {
                    ...obj,
                    id: userToUpdate.inpId,
                    nome: userToUpdate.fnome,
                    username: userToUpdate.username,
                    gn: userToUpdate.genero,
                    tlf: '351' + userToUpdate.numTel
                }
            }
            return obj
        })
        const editMode = () => {
            updateDB(newSate)
            return false
        }
        checkIfEdit(editMode)
        changeBtnMsg('ADICONAR NOVA PESSOA')
        changeArrowDirection('down')
        setForm({
            fnome: '',
            fnomeMessage: '',
            username: '',
            usernameMessage: '',
            numTel: '',
            numTelMessage: '',
            genero: 'F',
            generoMessage: '',
            inpId: '',
        })

    }

    const [editForm, checkIfEdit] = useState(false)
    const [formInp, setForm] = useState({
        fnome: '',
        fnomeMessage: '',
        username: '',
        usernameMessage: '',
        numTel: '',
        numTelMessage: '',
        genero: 'F',
        generoMessage: '',
        inpId: '',
    })

    const updateUserDetails = (userDetails) => {
        const cenas = () => dbTemp.map(x => {
            if (x.id == userDetails) {
                setForm({
                    ...formInp,
                    fnome: x.nome,
                    username: x.username,
                    inpId: x.id,
                    numTel: (x.tlf).substring(3),
                    genero: (x.gn).toUpperCase(),
                })
                changeBtnMsg('EDITAR PESSOA')
                changeArrowDirection('up')
                return true
            }
        })
        checkIfEdit(cenas)
    }

    const removeUser = (e) => {
        const idUser = e.target.getAttribute('iduser')
        updateDB(current =>
            current.filter(user => {
                return user.id != idUser
            })
        )

    }

    if (arrow == 'down') {
        contBody.style.minHeight = '100%';
    } else {
        contBody.style.height = '50em';
    }



    return (
        <div>
            <div className="btnDiv">
                <BasicButton btnDetails={
                    {
                        btnDesc: msg,
                        classDesc: 'addPeopleBtn',
                        iconType: arrow,
                        showIcon: true
                    }
                }
                    onClickFunction={() => changeArrowDirection((arrow) => arrow === 'down' ? arrow = 'up' : arrow = 'down')}
                />
            </div>
            <div className={btnClasses}>
                <GroupForm funcDoPai={funcDoPai} updateUser={updateState} setForm={setForm} formInp={formInp} editForm={editForm} />
            </div>
            <div className="">
                <ListItems newPep={dbTemp} updateUserDetails={updateUserDetails} removeUserFromList={removeUser} />
            </div>
        </div>

    )
}
export default ContainerBody