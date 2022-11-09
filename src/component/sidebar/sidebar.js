import React from 'react';
import {Side} from "./data";
import {Link} from 'react-router-dom';
import './sidebar.scss';



function Sidebar() {
    
    return(
      <div className="sidebar"> 
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