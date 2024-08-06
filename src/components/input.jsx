function InputForm({formrState, inp}) {
    return (
        <div className="inpBox">
            <label className="inpUnderlined" htmlFor={inp.inpName}>
                <input value={formrState.fieldName} onChange={formrState.changeFunc} required type={inp.inpType} id={inp.inpId} name={inp.inpName}></input>
                <span className="inpLabel">{inp.inpLabel}</span>
                <span className="spanHelper">{formrState.msgField}</span>
            </label>
        </div>
    )
}

export default InputForm