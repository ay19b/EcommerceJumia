import React from 'react'
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

export default function Home() {
    const {t} = useTranslation();
  
    return (
	<div className="home">
	 <Helmet>
        <title>{t('Jumia')}</title>
		<link rel="icon" href={mark} />
     </Helmet>
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