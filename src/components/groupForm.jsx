import InputForm from "./input"
import SelectForm from "./select"
import BasicButton from "./button"
import { FaCircleExclamation } from "react-icons/fa6"
import { useState } from "react"
import { MdStart } from "react-icons/md"

function GroupForm(props) {
    const latinRegExp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    const numbRegExp = /^\d+$/

    /*const [formInp, setForm] = useState({
        fnome:'',
        fnomeMessage: '',
        username:'',
        usernameMessage:'',
        numTel:'',
        numTelMessage:'',
        genero:'fem',
        generoMessage:'',
        
    })*/
    /*
    pessoaId:'',
        pessoaIdMessage:''
    */
    let [addPep, verifyForm] = useState('')

    const verifyEmptyForm = (frm) => {
        console.log(Object.values(frm))
        const val = Object.values(frm)
        for (let i = 0; i < (val.length - 1); i++) {
            if( (i%2=== 0 && val[i].length === 0) ||
                (i%2!==0 && val[i].length > 0 )) {
                return verifyForm(addPep = false)
            }
                
        }
        
        return verifyForm(addPep = true)

    }

    console.log(props.formInp.genero)

    const alertMsg = <p><FaCircleExclamation/> Por favor preencha todos os campos do formulário correctamente.</p>

    return (
        <div className="inpBox">
            <InputForm
                formrState={{
                    changeFunc: e => {
                        let msg = ''
                        let txtInp = e.target.value
                        latinRegExp.test(txtInp) || txtInp.length == 0 ? msg = '' : msg = 'Insira um nome válido'
                        props.setForm({
                            ...props.formInp, 
                            fnome: txtInp,
                            fnomeMessage: msg})
                    },
                    fieldName: props.formInp.fnome,
                    msgField: props.formInp.fnomeMessage
                }}
                inp={{ inpType: 'text', inpId: 'nome', inpName: 'nome', inpLabel: 'Nome'}}
            />
            <InputForm
                formrState={{
                    changeFunc: e => {
                        let msg = ''
                        let txtInp = e.target.value
                        txtInp.length==0 || (latinRegExp.test(txtInp) && txtInp.length > 1) ? msg = '' : msg = 'Insira um username válido'
                        props.setForm({
                            ...props.formInp, 
                            username: e.target.value,
                            usernameMessage: msg})

                    },
                    fieldName: props.formInp.username,
                    msgField: props.formInp.usernameMessage
                }}
                inp={{ inpType: 'text', inpId: 'username', inpName: 'username', inpLabel: 'Username'}}
            />
            <InputForm
                formrState={{
                    changeFunc: e => {
                        let msg = ''
                        let txtInp = e.target.value
                        txtInp.length== 0 || ( 
                            numbRegExp.test(txtInp) && 
                            (txtInp.length <= 9 || txtInp.length == 0 )  && 
                            ( txtInp[0] == 2 || 
                            (txtInp[0]==9 && txtInp.length==1) || 
                                ( (txtInp[0] == 9 && txtInp[1] == 1) || 
                                  (txtInp[0] == 9 && txtInp[1] == 2) ||
                                  (txtInp[0] == 9 && txtInp[1] == 3) || 
                                  (txtInp[0] == 9 && txtInp[1] == 6) ) 
                            ) ) ? msg = '' : msg = 'Insira um contacto telefónico válido'
                            props.setForm({
                            ...props.formInp, 
                            numTel: e.target.value,
                            numTelMessage: msg})
                    },
                    fieldName: props.formInp.numTel,
                    msgField: props.formInp.numTelMessage
                }}
                inp={{ inpType: 'text', inpId: 'numTel', inpName: 'numTel', inpLabel: 'Telefone'}}
                
            />
           <SelectForm 
                formrState={{
                    changeFunc: e => {
                        let msg = ''
                        props.setForm({
                            ...props.formInp, 
                            genero: e.target.value,
                            generoMessage: msg})
                    },
                    fieldName: props.formInp.genero,
                    msgField: props.formInp.generoMessage
                }}
                inp={{ inpId: 'genero', inpName: 'genero', inpLabel: 'Género'}}
                selectedOption={{ sele: props.formInp.genero}}
           />
            
            <BasicButton btnDetails={{btnDesc: 'ADICIONAR', classDesc:'addPeopleBtn'}}
                onClickFunction={() => {verifyEmptyForm(props.formInp); props.funcDoPai(props.formInp); if(props.editForm){props.updateUser(props.formInp)} }}
            />
            {addPep === false ? alertMsg : null}
        </div>
    )
}

export default GroupForm


