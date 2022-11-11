import React,{useState,useEffect} from 'react'
import Layout from '../../component/layout/layout';
import Main from '../../component/main/main';
import Pub from '../../component/pub/pub';
import Promo from '../../component/promo/promo';
import Category from '../../component/products/products';
import Offer from '../../component/offer/offer';
import Fashmia from '../../component/fashmia/fashmia';
import {Container} from '@mui/material'
import './home.scss'


export default function Home() {
  
  
    return (
	<div className="home">
    <Layout>
        <Main />
	    <Pub />
	    <Promo />
	    <Category cag={'Supermarket'} title={'Supermarket'}/>
	    <Category cag={'Fashion'} title={'Fashion'}/>
	    <Offer />
	    <Fashmia />
	    <Category cag={'appliance'}title={'appliance'} />
	    <Category cag={'Sports'} title={'Sports'}/>
	    <Category cag={'computing'} title={'computing'}/>
    </Layout>
	</div>
    )
}