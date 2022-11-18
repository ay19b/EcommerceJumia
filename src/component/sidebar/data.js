import React from 'react';
import {HiOutlineOfficeBuilding,HiOutlineDotsCircleHorizontal} from "react-icons/hi";
import {BsPhone} from "react-icons/bs";
import {GiHealthPotion} from "react-icons/gi";
import {GiMuscleUp} from "react-icons/gi";
import {FaBaby} from "react-icons/fa";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {GrGamepad} from "react-icons/gr";
import {CiApple} from "react-icons/ci";
import {TbMotorbike} from "react-icons/tb";


export const Side= [
    {
        id:1,
        name:"Supermarché",
        icon:<CiApple />,
        path:'/Supermarket',
    },
    {
        id:2,
        name:"Mode",
        icon:<GiHealthPotion />,
        path:'/Fashion',
    },
    {
        id:3,
        name:"Électroménager, TV & Audio",
        icon:<FaBaby />,
        path:'/appliance',
    },
    {
        id:4,
        name:"Informatique",
        icon:<HiOutlineDesktopComputer />,
        path:'/computing',
    },
    {
        id:5,
        name:"Articles de sport",
        icon:<GiMuscleUp />,
        path:'/Sports',
    },
    {
        id:6,
        name:"Téléphonie & Accessoires",
        icon:<BsPhone />,
    },
    
    {
        id:7,
        name:"Maison & bureau",
        icon:<HiOutlineOfficeBuilding />,
        
    },
    {
        id:8,
        name:"Santé & Beauté",
        icon:<GiHealthPotion />,
        
    },
    {
        id:9,
        name:"Bébé & Puériculture",
        icon:<FaBaby />,
    },
    
    {
        id:10,
        name:"Auto & Moto",
        icon:<TbMotorbike/>
    },
    {
        id:11,
        name:"Jouets et jeux vidéos",
        icon:<GrGamepad />
    },
    
    {
        id:12,
        name:"Autres catégories",
        icon:<HiOutlineDotsCircleHorizontal />
    },
];








