import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Main from './Main.js';
import Header from './Header.js';
import Register from './Register.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import PopupWithForm from './PopupWithForm.js';
import InfoTooltip from './InfoTooltip.js';
import imageSuccessPath from "../images/success.png";
import imageOopsPath from '../images/oops.png';
import ImagePopup from './ImagePopup.js';

import * as auth from '../auth.js';
import api from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [infoTooltipText, setInfoTooltipText] = React.useState("");
  const [infoTooltipImage, setInfoTooltipImage] = React.useState("#");

  const [cards, setCards] = React.useState([]);
  const [selectedCardLink, setSelectedCardLink] = React.useState("");
  const [selectedCardName, setSelectedCardName] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch(err => console.log(err));
    api.getCardList()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
      .then((res) => {
        setLoggedIn(true);
        history.push("/");
      })
      .catch(err => console.log(err));
    }
  }, [loggedIn, history]);

  const onSignOut = () => {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setLoggedIn(false);
  }

  function handleCardLike(card) {
    const isLiked = card.card.likes.some(i => i === currentUser._id);
    api.changeLikeCardStatus(card.card._id, !isLiked)
      .then((newCard) => {
      const newCards = cards.map((c) => c._id === newCard._id ? newCard : c);
      setCards(newCards);
    })
      .catch(err => console.log(err));
  }

  function handleCardDelete(cardID) {
    api.removeCard(cardID)
    .then(res => {
      const newCards = cards.filter(card => card._id !== cardID);
      setCards(newCards);
    })
    .catch(err => console.log(err));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setInfoTooltipOpen(false);
  }

  function handleUpdateUser({name, title}) {
    api.setUserInfo({ name, title})
      .then(res => {
        closeAllPopups();
        setCurrentUser(res.data);
      })
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
      .then(res => {
        console.log("here");
        console.log(res.data);
        closeAllPopups();
        setCurrentUser(res.data);
      })
      .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit({ name, link }) {
    api.addCard({ name, link })
      .then(res => {
        const addedCardList = cards.concat(res)
        setCards(addedCardList);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  function openingInfoTooltip(kind) {
    if (kind === false) {
      setInfoTooltipText("Oops, something went wrong! Please try again.");
      setInfoTooltipImage(imageOopsPath);
      setInfoTooltipOpen(true);
    } else {
      setInfoTooltipText("Success! You have now been registered.");
      setInfoTooltipImage(imageSuccessPath);
      setInfoTooltipOpen(true);
    }
  }

  function handleRegister(password, email) {
    auth.register(password, email)
      .then((res) => {
        if (!res || res.statusCode === 400 || res.statusCode === 500) {
          openingInfoTooltip(false);
        } else {
          openingInfoTooltip(true);
          history.push("/login");
          return res;
        }
      })
      .catch(err => openingInfoTooltip(false))
  }

  function handleLogin(password, email) {
    auth.authorize(password, email)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push("/")
        } else {
          openingInfoTooltip(false);
        }
      })
      .catch(err => openingInfoTooltip(false));

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        <main>
          <Switch>
            <Route path="/signin">
              <Header 
                headerText={"Sign up"}
                headerLink={"/signup"}
              />
              <Login 
                handleLogin={handleLogin}
                openingInfoTooltip={openingInfoTooltip}
                infoTooltipIsOpen={isInfoTooltipOpen}
                onClose={closeAllPopups}
                infoTooltipText={infoTooltipText}
                infoTooltipImage={infoTooltipImage}
              />
            </Route>
            <Route path="/signup">
              <Header
                headerText={"Log in"}
                headerLink={"/signin"}
              />
              <Register 
                openingInfoTooltip={openingInfoTooltip}
                infoTooltipIsOpen={isInfoTooltipOpen}
                onClose={closeAllPopups}
                infoTooltipText={infoTooltipText}
                infoTooltipImage={infoTooltipImage}
                handleRegister={handleRegister}
              />
            </Route>
            <ProtectedRoute path="/"
              loggedIn={loggedIn}
              onEditProfile={() => {
                setIsEditProfilePopupOpen(true);
              }}
              onAddPlace={() => {
                setIsAddPlacePopupOpen(true);
              }}
              onEditAvatar={() => {
                setIsEditAvatarPopupOpen(true);
              }}
              onCardClick={(card) => {
                setIsImagePopupOpen(true);
                setSelectedCardLink(card.card.link);
                setSelectedCardName(card.card.name);
              }}
              editProfileIsOpen={isEditProfilePopupOpen}
              editAvatarIsOpen={isEditAvatarPopupOpen}
              addPlaceIsOpen={isAddPlacePopupOpen}
              imagePopupIsOpen={isImagePopupOpen}
              imageLink={selectedCardLink}
              imageName={selectedCardName}
              onClose={closeAllPopups}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
              onSignOut={onSignOut}
              component={Main}
              />
          </Switch>
        </main>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} />
        <InfoTooltip onClose={closeAllPopups} isOpen={isInfoTooltipOpen} infoTooltipText={infoTooltipText} infoTooltipImage={infoTooltipImage} />
        <ImagePopup onClose={closeAllPopups} imagePopupIsOpened={isImagePopupOpen} cardName={selectedCardName} cardLink={selectedCardLink} />
        <PopupWithForm name="delete-card" buttonText="Yes" title="Are you sure?" 
          children={
              <React.Fragment>
              </React.Fragment>}
          />
    </div>
    </CurrentUserContext.Provider>
);
}

export default App;
