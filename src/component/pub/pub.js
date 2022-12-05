import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import {useTranslation} from 'react-i18next'




function Pub(){
    const { t, i18n } = useTranslation();
    return(
	<div className='pub'>
	    
            <div className="ListPub">
             {pub.map((item)=>{
               const {id,img}=item;
               return(
                   
                       <img src={img} alt={id} className='listImg' />

                   
               )
           })}
           </div>   
        		   
	 </div>
    )
}
export default Pub;







