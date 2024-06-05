import { useEffect, useState } from "react";

const Toast = ({children}) => {
    const [close,setClose]=useState(false)
    if(close){
        return
    }
    return (
        <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <span>{children}</span>
                <span onClick={()=>setClose(true)} className="btn btn-xs">close</span>
            </div>
        </div>
    )
}
export default Toast;