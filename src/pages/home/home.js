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
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import Sidebar from '../../component/sidebar/sidebar'


export default function Home() {
    const { menu } = useContext(MenuContext);
  
    return (
	<div className="home">
    <Layout>
        <Main />
	    <Pub />
	    <Promo />
	    <Category cag={'Supermarket'} title={'Supermarché'}/>
	    <Category cag={'Fashion'} title={'Mode'}/>
	    <Offer />
	    <Fashmia />
	    <Category cag={'appliance'}title={'Électroménager, TV & Audio'} />
	    <Category cag={'Sports'} title={'Articles de sport'}/>
	    <Category cag={'computing'} title={'Informatique'}/>
    </Layout>
	</div>
    )
}