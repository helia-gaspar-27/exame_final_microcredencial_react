import { FaCircleUser , FaPhone , FaRegTrashCan, FaPencil } from "react-icons/fa6"
import { IconContext } from "react-icons"

function PersonItem() {

    return (
            <li className="personInfo">
                <span className="disFlex">
                    <span className="aliUserIcon">
                        <IconContext.Provider value={{size: "2.4em", className:"svgIcon"}}><FaCircleUser /></IconContext.Provider>
                        <span className="w100Mar">
                            <span id="personDetails" className="dFlex spBetween alItems">
                                <span className="dFlex fDir">
                                    <span className="namePerson">Pessoa 1</span>
                                    <span>24 anos</span>
                                </span>
                                <span className="dFlex fDir">
                                    <span className="contactInfo">
                                        <IconContext.Provider value={{size: "0.7em"}}><FaPhone/></IconContext.Provider>
                                        911 222 333
                                    </span>
                                    <span>Feminino</span>
                                </span>
                                <span className="pRight">
                                    <span className="arIcons">
                                        <span className="resetSpan"><FaPencil/></span>
                                        <span className="resetSpan"><FaRegTrashCan/></span>
                                    </span>
                                </span>
                            </span>
                            <hr className="lineStyle"/>
                        </span>
                    </span>
                </span>
            </li>
    )
  }
  
  export default PersonItem