import React from 'react';
import {Side} from "./data";
import {Link} from 'react-router-dom';
import './sidebar.scss';
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";


function Sidebar() {
    const { dispatch } = useContext(MenuContext);
    const { menu } = useContext(MenuContext);
	
    return(
      <div className="sidebar" onMouseLeave={() => dispatch({ type: "open" })} > 
          {Side.map((item)=>{
              const {id,name,icon,path}= item;
              return(   
                <>          
                   <div key={id} className="itemBar">
                     {icon}
                     <h6>{name}</h6>
                   </div>
                </>   
              )
          })}
      </div>
    )
}
export default Sidebar;