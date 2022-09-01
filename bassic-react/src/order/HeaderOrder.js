import { FaClipboardList } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";
import { MdOutlineCancel ,MdSearch} from "react-icons/md";
import { useState } from "react";
const HeaderOrder=()=>{
    const [togglState,setToggleState] = useState(1)
    const toogleTab =(index)=>{
        setToggleState(index)
    }
    return(
        <div className="container-header-order">
            <p className={togglState ===1? "tabs active":"tab"} onClick={()=>toogleTab(1)}><FaClipboardList /><span>ລໍຖ້າກຳເນີນການ</span></p>
            <p className={togglState ===2? "tabs active":"tab"} onClick={()=>toogleTab(2)}><BsArrowRepeat /><span>ກຳລັງດຳເນີນການ</span></p>
            <p className={togglState ===3? "tabs active":"tab"} onClick={()=>toogleTab(3)}><TbChecklist /><span>ດຳເນີນການສຳເລັດ</span></p>
            <p className={togglState ===4? "tabs active":"tab"} onClick={()=>toogleTab(4)}><MdOutlineCancel /><span>ຍົກເລີກແລ້ວ</span></p>
            <div className="searchfilter">
                <div className="search">
                    <div className="icon-search">
                        <MdSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="ພິມຊື່ຜູ້ໃຫ້ບໍລິການ, ຊື່ບໍລິການ..."
                    />
                </div>
                <button>ຄົ້ນຫາ</button>
            </div>
        </div>
    );
}
export default HeaderOrder