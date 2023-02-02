import React from 'react';
import {Side} from "./data";
import {Link} from 'react-router-dom';
import './sidebar.scss';
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import {useTranslation} from 'react-i18next'

function Sidebar() {
    const { dispatch } = useContext(MenuContext);
	const {t} = useTranslation();
	
    return(
      <div className="sidebar" onMouseLeave={() => dispatch({ type: "open" })} > 
          {Side.map((item)=>{
              const {id,name,icon,path}= item;
              return(   
                <Link to={path} key={id} onClick={() => dispatch({ type: "open" })}>           
                   <div key={id} className="itemBar">
                     {icon}
                     <h6>{t(name)}</h6>
                   </div>
                 </Link>    
              )
          })}
      </div>
    )
}
export default Sidebar;