import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faDownload} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";

function Button2({ name,icon }) {
    
    const [icono, setIcono] = useState({})
    function iconDraw (icon) {
        switch (icon) {
            case "faChevronRight" :
                setIcono(faChevronRight)
                break
            case "faDownload" :
                setIcono(faDownload)
                break
            default:
                break
        }
           
    }
    useEffect(() => {
        iconDraw(icon)
    }, [])
    
    iconDraw()
  return (
    <div className="mt-6">
      <a href="" className="bg-indigo-600 p-3 font-Poppins rounded-md text-white hover:bg-indigo-700">
        {name}
        <FontAwesomeIcon icon={icono} className="text-xs ml-2"/>
    </a>
    </div>
  );
}

export default Button2;
