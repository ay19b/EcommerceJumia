import React,{useState,useEffect} from 'react';
import Layout from '../../component/layout/layout';
import Main from '../../component/main/main';
import Pub from '../../component/pub/pub';
import Promo from '../../component/promo/promo';
import Category from '../../component/products/products';
import Offer from '../../component/offer/offer';
import Fashmia from '../../component/fashmia/fashmia';
import './home.scss'
import {Helmet} from "react-helmet";
import {useTranslation} from 'react-i18next'
import mark from '../../images/mark.png'
import titleLogo from '../../images/titleLogo.png'


export default function Home() {
    const {t} = useTranslation();


     
    return (
	<div className="home">
	 <Helmet>
        <title>{t('Jumia Algérie | Téléphones, TV, supermarché, santé et hygiène, etc.')}</title>
		<link rel="icon" href={titleLogo} />
     </Helmet>
	 <div className="content">
     <Layout>
        <Main />
	    <Pub />
	    <Promo />
	    <Category cag={'Supermarché'} title={'Supermarché'}/>
	    <Category cag={'Mode'} title={'Mode'}/>
	    <Offer />
	    <Fashmia />
	    <Category cag={'Électroménager, TV & Audio'}title={'Électroménager, TV & Audio'} />
	    <Category cag={'Articles de sport'} title={'Articles de sport'}/>
	    <Category cag={'Informatique'} title={'Informatique'}/>
     </Layout>
	</div>
	</div>
    )
}