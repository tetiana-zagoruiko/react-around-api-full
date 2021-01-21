import React from 'react';
import Card from './Card.js';
import Header from './Header.js';
import Footer from './Footer.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete, onSignOut}) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div>
            <Header
                headerText={"Sign out"}
                headerLink={"/signin"}
                headerAction={onSignOut}
                userMail={currentUser.email}
            />
                <main className="main">
                    <section className="profile">
                        <div className="profile__container">
                        <img src={currentUser.avatar} alt="avatar" className="profile__avatar" onClick={onEditAvatar}/>
                            <div className="profile__card">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit" onClick={onEditProfile}></button>
                            <p className="profile__title">{currentUser.about}</p>
                            </div>
                        <button className="profile__add" onClick={onAddPlace}></button>
                        </div>
                    </section>
                    <section className="photo">
                        <ul className="photo__container">
                        {
                            cards.map((card, id) =>
                                <Card
                                    key={id}
                                    onCardClick={onCardClick}
                                    card={card}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                    userId={currentUser._id}
                                />)
                        }
                        </ul>
                    </section>
                </main>
            <Footer />
        </div>
    );
}

export default Main;
