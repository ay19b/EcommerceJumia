import React, { useState, useEffect } from "react";
import {MdOutlineKeyboardArrowUp} from "react-icons/md";
import "./scroll.scss";
import {useTranslation} from 'react-i18next'


const ScrollToTop = () => {
	const {i18n } = useTranslation();
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


    // scroll to top 
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <MdOutlineKeyboardArrowUp
					className={i18n.language === 'ar'?"left iconScroll":"right iconScroll"}
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;