import React,{useState,useEffect} from 'react'
import Layout from '../../component/layout/layout';
import Main from '../../component/main/main';
import Pub from '../../component/pub/pub';
import Promo from '../../component/promo/promo';
import Category from '../../component/products/products';
import Offer from '../../component/offer/offer';
import Fashmia from '../../component/fashmia/fashmia';


export default function Home() {
  
  
    return (
    <Layout>
	  <Main />
	  <Pub />
	  <Promo />
	  <Category cag={'Supermarket'}/>
	  <Category cag={'Fashion'}/>
	  <Offer />
	  <Fashmia />
	  <Category cag={'appliance'}/>
	  <Category cag={'Sports'}/>
	  <Category cag={'computing'}/>
	 </Layout>
    )
}