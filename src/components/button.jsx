import { FaAngleDown, FaAngleUp } from "react-icons/fa6"

function BasicButton({btnDetails, onClickFunction}) {
     
    const btnIcon = (btnDetails.iconType == 'down' ? <FaAngleDown/> : <FaAngleUp/> ) 

    return (
        <button className={btnDetails.classDesc}
            onClick={onClickFunction}
        >
            {btnDetails.btnDesc}
            {btnDetails.showIcon && btnIcon}
        </button>
    )
  }
  
  export default BasicButton