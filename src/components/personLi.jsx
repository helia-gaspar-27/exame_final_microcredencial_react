import { FaCircleUser, FaPhone, FaRegTrashCan, FaPencil } from "react-icons/fa6"
import { IconContext } from "react-icons"
import { useState } from "react"

function PersonItem({ pepDetails }) {

    return (
        <li className="personInfo">
            <span className="disFlex">
                <span className="aliUserIcon">
                    <IconContext.Provider value={{ size: "2.4em", className: "svgIcon" }}><FaCircleUser /></IconContext.Provider>
                    <span className="w100Mar">
                        <span id="personDetails" className="dFlex spBetween alItems">
                            <span className="dFlex fDir">
                                <span className="namePerson">{pepDetails.pnome}</span>
                                <span>{pepDetails.pusername} (id: {pepDetails.pid})</span>
                            </span>
                            <span className="dFlex fDir">
                                <span className="contactInfo">
                                    <IconContext.Provider value={{ size: "0.7em" }}><FaPhone /></IconContext.Provider>
                                    {pepDetails.ptlf}
                                </span>
                                <span>{(pepDetails.pgn).toUpperCase() == 'F' ? 'Feminino' : 'Masculino'}</span>
                            </span>
                            <span className="pRight">
                                <span className="arIcons">
                                    <span className="resetSpan" onClick={() => pepDetails.handleDataFromChild(pepDetails.pid)}><FaPencil /></span>
                                    <span className="resetSpan deleteuser" iduser={pepDetails.pid} onClick={pepDetails.removeUserFromList}></span>
                                </span>
                            </span>
                        </span>
                        <hr className="lineStyle" />
                    </span>
                </span>
            </span>
        </li>
    )
}

export default PersonItem