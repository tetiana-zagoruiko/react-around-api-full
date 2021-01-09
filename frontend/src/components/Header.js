import React from 'react';
import logoPath from "../images/logo.svg";

function Header({userMail, headerText, headerLink, headerAction}) {
    
    return (
        <div>
                <header className="header">
                    <div className="header__container">
                    <img src={logoPath} alt="logo" className="logo" />
                        <div className="header__container-right">
                            <p className="header__email">{userMail}</p>
                            <a href={headerLink} onClick={headerAction} className="header__text">{headerText}</a>
                        </div>
                    </div>
                </header>
        </div>
    );
}

export default Header;
