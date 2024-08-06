function SelectForm({formrState, inp, selectedOption}) {

    return (
        <div className="inpBox">
            <label className="inpUnderlined" htmlFor="genero">
                <select name={inp.inpName}
                    value={selectedOption.sele}
                    id={inp.inpId} 
                    className="deco" 
                    onChange={formrState.changeFunc}>
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                </select>
                <span className="inpLabel">Genero</span>
            </label>
        </div>
    )
}

export default SelectForm