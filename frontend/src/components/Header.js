import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from "../images/logo.svg";

function Header({ headerText, headerLink, headerAction, userMail}) {
    
    return (
        <div>
                <header className="header">
                    <div className="header__container">
                    <img src={logoPath} alt="logo" className="logo" />
                        <div className="header__container-right">
                        <p className="header__email">{userMail}</p>
                        <Link to={headerLink} onClick={headerAction} className=" header__text">{headerText}</Link>
                        </div>
                    </div>
                </header>
        </div>
    );
}

export default Header;
