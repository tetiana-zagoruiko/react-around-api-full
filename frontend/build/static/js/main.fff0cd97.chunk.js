(this["webpackJsonpsprint-14"]=this["webpackJsonpsprint-14"]||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),s=n(16),c=n.n(s),i=n(8),l=(n(27),n(2)),u=n(3);var d=function(e){var t=e.card,n=e.onCardClick,r=e.onCardLike,s=e.onCardDelete,c=e.userId,i=t.owner===c,l="".concat(i?"photo__remove":"photo__remove_hide "),u=t.likes.some((function(e){return e===c})),d="".concat(u?"photo__like_active":"photo__like-button ");return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsxs)("li",{className:"photo__item",children:[Object(a.jsx)("div",{className:"photo__image",onClick:function(){n({card:t})},style:{backgroundImage:"url(".concat(t.link,")")}}),Object(a.jsx)("button",{type:"button",onClick:function(){s(t._id)},className:l}),Object(a.jsxs)("div",{className:"photo__name",children:[Object(a.jsx)("h2",{className:"photo__text",children:t.name}),Object(a.jsxs)("div",{className:"photo__like",children:[Object(a.jsx)("button",{type:"button",onClick:function(){r({card:t})},className:d}),Object(a.jsx)("h3",{className:"photo__like-count",children:t.likes.length})]})]})]})})},p=n.p+"static/media/logo.4e8e0a1d.svg";var h=function(e){var t=e.headerText,n=e.headerLink,r=e.headerAction,o=e.userMail;return Object(a.jsx)("div",{children:Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header__container",children:[Object(a.jsx)("img",{src:p,alt:"logo",className:"logo"}),Object(a.jsxs)("div",{className:"header__container-right",children:[Object(a.jsx)("p",{className:"header__email",children:o}),Object(a.jsx)(i.b,{to:n,onClick:r,className:" header__text",children:t})]})]})})})};var j=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"footer__container",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Around The U.S."})})})})};var m=function(e){var t=e.onEditProfile,n=e.onAddPlace,r=e.onEditAvatar,o=e.onCardClick,s=e.cards,c=e.onCardLike,i=e.onCardDelete,l=e.onSignOut,u=e.userMail,p=e.userName,m=e.userAbout,b=e.userAvatar,f=e.userId;return console.log(s),Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{headerText:"Sign out",headerLink:"/signin",headerAction:l,userMail:u}),Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)("section",{className:"profile",children:Object(a.jsxs)("div",{className:"profile__container",children:[Object(a.jsx)("img",{src:b,alt:"avatar",className:"profile__avatar",onClick:r}),Object(a.jsxs)("div",{className:"profile__card",children:[Object(a.jsx)("h1",{className:"profile__name",children:p}),Object(a.jsx)("button",{className:"profile__edit",onClick:t}),Object(a.jsx)("p",{className:"profile__title",children:m})]}),Object(a.jsx)("button",{className:"profile__add",onClick:n})]})}),Object(a.jsx)("section",{className:"photo",children:Object(a.jsx)("ul",{className:"photo__container",children:s.map((function(e,t){return Object(a.jsx)(d,{onCardClick:o,card:e,onCardLike:c,onCardDelete:i,userId:f},t)}))})})]}),Object(a.jsx)(j,{})]})};var b=function(e){e.openingInfoTooltip;var t=e.handleRegister,n=o.a.useState(""),r=Object(l.a)(n,2),s=r[0],c=r[1],u=o.a.useState(""),d=Object(l.a)(u,2),p=d[0],h=d[1];return Object(a.jsx)("div",{className:"auth",children:Object(a.jsxs)("div",{className:"auth__container",children:[Object(a.jsx)("p",{className:"auth__welcome",children:"Sign up"}),Object(a.jsxs)("form",{action:"#",className:"form_auth",onSubmit:function(e){e.preventDefault(),p&&s&&(t(s,p),h(""),c(""))},children:[Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Email",required:!0,id:"email",name:"email",type:"email",value:p,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Password",required:!0,id:"password",name:"password",type:"password",value:s,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"form__save form__save_auth",children:"Sign up"})]}),Object(a.jsx)("p",{className:"auth__paragraph",children:Object(a.jsx)(i.b,{to:"/signin",className:"auth__link",children:"Already a member? Log in here!"})})]})})};var f=Object(u.h)((function(e){var t=e.handleLogin,n=(e.openingInfoTooltip,o.a.useState("")),r=Object(l.a)(n,2),s=r[0],c=r[1],u=o.a.useState(""),d=Object(l.a)(u,2),p=d[0],h=d[1];return Object(a.jsx)("div",{className:"auth",children:Object(a.jsxs)("div",{className:"auth__container",children:[Object(a.jsx)("p",{className:"auth__welcome",children:"Log in"}),Object(a.jsxs)("form",{action:"#",className:"form_auth",onSubmit:function(e){e.preventDefault(),s&&p&&(t(p,s),c(""),h(""))},children:[Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Email",required:!0,id:"email",name:"email",type:"email",value:s,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("input",{className:"form__input form__input_auth",placeholder:"Password",required:!0,id:"password",name:"password",type:"password",value:p,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"form__save form__save_auth",children:"Log in"})]}),Object(a.jsx)("p",{className:"auth__paragraph",children:Object(a.jsx)(i.b,{to:"/signup",className:"auth__link",children:"Not a member yet? Sign up here!"})})]})})})),O=n(20),x=n(21),g=function(e){var t=e.component,n=Object(x.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(O.a)({},n)):Object(a.jsx)(u.a,{to:"/signin"})}})};var v=function(e){var t=e.name,n=e.buttonText,r=e.title,o=e.children,s=e.isOpen,c=e.onClose,i=e.onSubmit;return Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{className:"popup popup_opened popup_type_".concat(t),children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsxs)("form",{action:"#",className:"form",name:t,onSubmit:i,children:[Object(a.jsx)("p",{className:"form__text",children:r}),o,Object(a.jsx)("button",{type:"submit",className:"form__save",children:n})]}),Object(a.jsx)("button",{className:"popup__close",onClick:c})]})}):Object(a.jsx)("div",{})})},N=o.a.createContext();var _=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,s=o.a.useContext(N),c=o.a.useState(""),i=Object(l.a)(c,2),u=i[0],d=i[1],p=o.a.useState(""),h=Object(l.a)(p,2),j=h[0],m=h[1];return o.a.useEffect((function(){d(s.name),m(s.about)}),[s]),Object(a.jsx)("div",{children:Object(a.jsx)(v,{onSubmit:function(e){e.preventDefault(),r({name:u,title:j})},isOpen:t,onClose:n,name:"edit-profile",buttonText:"Save",title:"Edit profile",children:Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){d(e.target.value)},id:"profile-name",value:u,name:"name",type:"text",className:"form__input form__input_type_name",required:!0,maxLength:"40",minLength:"2"}),Object(a.jsx)("span",{id:"profile-name-error",className:"form__error"}),Object(a.jsx)("input",{onChange:function(e){m(e.target.value)},id:"profile-text",value:j,name:"title",type:"text",className:"form__input form__input_type_title",required:!0,maxLength:"200",minLength:"2"}),Object(a.jsx)("span",{id:"profile-text-error",className:"form__error"})]})})})};var A=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateAvatar,s=o.a.createRef();return Object(a.jsx)("div",{children:Object(a.jsx)(v,{onSubmit:function(e){e.preventDefault(),r(s.current.value)},isOpen:t,onClose:n,name:"edit-avatar",buttonText:"Save",title:"Change profile picture",children:Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)("input",{ref:s,id:"avatar-url",name:"link",type:"url",className:"form__input form__input_type_photo-url",required:!0})})})})};var C=function(e){var t=e.isOpen,n=e.onClose,r=e.onAddPlace,s=o.a.useState(""),c=Object(l.a)(s,2),i=c[0],u=c[1],d=o.a.useState(""),p=Object(l.a)(d,2),h=p[0],j=p[1];return Object(a.jsx)("div",{children:Object(a.jsx)(v,{onSubmit:function(e){e.preventDefault(),r({name:i,link:h})},isOpen:t,onClose:n,name:"add-photo",buttonText:"Create",title:"New place",children:Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){u(e.target.value)},id:"photo-title",name:"name",type:"text",className:"form__input form__input_type_photo-title",placeholder:"Title",required:!0,maxLength:"30",minLength:"1"}),Object(a.jsx)("span",{id:"photo-title-error",className:"form__error"}),Object(a.jsx)("input",{onChange:function(e){j(e.target.value)},id:"photo-url",name:"link",type:"url",className:"form__input form__input_type_photo-url",placeholder:"Image link",required:!0}),Object(a.jsx)("span",{id:"photo-url-error",className:"form__error"})]})})})};var S=function(e){var t=e.isOpen,n=e.onClose,r=e.infoTooltipText,o=e.infoTooltipImage;return Object(a.jsx)("div",{children:t?Object(a.jsx)("div",{className:"popup popup_opened",children:Object(a.jsx)("div",{className:"popup__content",children:Object(a.jsxs)("div",{className:"popup_type-infotooltip",children:[Object(a.jsx)("img",{src:o,alt:"symbol",className:"popup__content-image"}),Object(a.jsx)("p",{className:"popup__content-text",children:r}),Object(a.jsx)("button",{className:"popup__close",onClick:n})]})})}):Object(a.jsx)("div",{})})};var k=function(e){var t=e.cardLink,n=e.cardName,r=e.imagePopupIsOpened,o=e.onClose;return Object(a.jsx)("div",{children:r?Object(a.jsx)("div",{className:"popup popup_opened popup_type_image",children:Object(a.jsxs)("div",{className:"popup__content popup__content_theme_transparent",children:[Object(a.jsxs)("figure",{className:"figure",children:[Object(a.jsx)("img",{src:t,alt:"",className:"figure__image"}),Object(a.jsx)("figcaption",{className:"figure__caption",children:n})]}),Object(a.jsx)("button",{type:"button",className:"popup__close",onClick:o})]})}):Object(a.jsx)("div",{})})},y="http://api.tzpract.students.nomoreparties.site",E=n(18),I=n(19),w=localStorage.getItem("jwt"),L=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(E.a)(this,e),this._baseUrl=n,this._headers=a}return Object(I.a)(e,[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}},{key:"changeLikeCardStatus",value:function(e,t){return(t?fetch(this._baseUrl+"/cards/"+e+"/likes",{headers:this._headers,method:"PUT"}):fetch(this._baseUrl+"/cards/"+e+"/likes",{headers:this._headers,method:"DELETE"})).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.title})}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}))}}]),e}())({baseUrl:"http://api.tzpract.students.nomoreparties.site",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(w)}});var T=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=o.a.useState(!1),c=Object(l.a)(s,2),i=c[0],d=c[1],p=o.a.useState(!1),j=Object(l.a)(p,2),O=j[0],x=j[1],E=o.a.useState(!1),I=Object(l.a)(E,2),w=I[0],T=I[1],P=o.a.useState(!1),R=Object(l.a)(P,2),U=R[0],q=R[1],X=o.a.useState(""),J=Object(l.a)(X,2),Z=J[0],K=J[1],M=o.a.useState("#"),Y=Object(l.a)(M,2),H=Y[0],B=Y[1],V=o.a.useState([]),D=Object(l.a)(V,2),G=D[0],Q=D[1],z=o.a.useState(""),F=Object(l.a)(z,2),W=F[0],$=F[1],ee=o.a.useState(""),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],re=o.a.useState({}),oe=Object(l.a)(re,2),se=oe[0],ce=oe[1],ie=o.a.useState(""),le=Object(l.a)(ie,2),ue=le[0],de=le[1],pe=o.a.useState(""),he=Object(l.a)(pe,2),je=he[0],me=he[1],be=o.a.useState(""),fe=Object(l.a)(be,2),Oe=fe[0],xe=fe[1],ge=o.a.useState(""),ve=Object(l.a)(ge,2),Ne=ve[0],_e=ve[1],Ae=o.a.useState(""),Ce=Object(l.a)(Ae,2),Se=Ce[0],ke=Ce[1],ye=o.a.useState(!1),Ee=Object(l.a)(ye,2),Ie=Ee[0],we=Ee[1],Le=Object(u.g)();function Te(){r(!1),d(!1),x(!1),x(!1),T(!1),q(!1)}function Pe(e){!1===e?(K("Oops, something went wrong! Please try again."),B("data:image/png;base64,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"),q(!0)):(K("Success! You have now been registered."),B("data:image/png;base64,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"),q(!0))}return o.a.useEffect((function(){L.getUserInfo().then((function(e){ce(e),de(e.data.email),_e(e.data.avatar),me(e.data.name),xe(e.data.about),ke(e.data._id)})).catch((function(e){return console.log(e)})),L.getCardList().then((function(e){Q(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(y,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(e).then((function(e){we(!0),Le.push("/")})).catch((function(e){return console.log(e)}))}),[Ie,Le]),Object(a.jsx)(N.Provider,{value:se,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)("main",{children:Object(a.jsxs)(u.d,{children:[Object(a.jsxs)(u.b,{path:"/signin",children:[Object(a.jsx)(h,{headerText:"Sign up",headerLink:"/signup",userMail:ue}),Object(a.jsx)(f,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(y,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){if(e)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){e.token?(we(!0),Le.push("/")):Pe(!1)})).catch((function(e){return Pe(!1)}))},openingInfoTooltip:Pe,infoTooltipIsOpen:U,onClose:Te,infoTooltipText:Z,infoTooltipImage:H})]}),Object(a.jsxs)(u.b,{path:"/signup",children:[Object(a.jsx)(h,{headerText:"Log in",headerLink:"/signin"}),Object(a.jsx)(b,{openingInfoTooltip:Pe,infoTooltipIsOpen:U,onClose:Te,infoTooltipText:Z,infoTooltipImage:H,handleRegister:function(e,t){(function(e,t){return fetch("".concat(y,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){if(console.log("here",e),e&&400!==e.statusCode&&500!==e.statusCode)return Pe(!0),Le.push("/login"),e;Pe(!1)})).catch((function(e){return Pe(!1)}))}})]}),Object(a.jsx)(g,{path:"/",loggedIn:Ie,onEditProfile:function(){r(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){T(!0),$(e.card.link),ae(e.card.name)},editProfileIsOpen:n,editAvatarIsOpen:O,addPlaceIsOpen:i,imagePopupIsOpen:w,imageLink:W,imageName:ne,onClose:Te,onCardLike:function(e){var t=e.card.likes.some((function(e){return e===Se}));L.changeLikeCardStatus(e.card._id,!t).then((function(e){var t=G.map((function(t){return t._id===e._id?e:t}));Q(t)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){L.removeCard(e).then((function(t){var n=G.filter((function(t){return t._id!==e}));Q(n)})).catch((function(e){return console.log(e)}))},cards:G,onSignOut:function(){localStorage.removeItem("jwt"),ce({}),we(!1),de("")},userMail:ue,userName:je,userAbout:Oe,userAvatar:Ne,userId:Se,component:m})]})}),Object(a.jsx)(_,{isOpen:n,onClose:Te,onUpdateUser:function(e){var t=e.name,n=e.title;L.setUserInfo({name:t,title:n}).then((function(e){Te(),ce(e)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(A,{isOpen:O,onClose:Te,onUpdateAvatar:function(e){L.setUserAvatar(e).then((function(e){Te(),_e(e.data.avatar)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(C,{isOpen:i,onClose:Te,onAddPlace:function(e){var t=e.name,n=e.link;L.addCard({name:t,link:n}).then((function(e){console.log(e);var t=G.push(e);Q(t),Te()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(S,{isOpen:U,onClose:Te}),Object(a.jsx)(S,{onClose:Te,isOpen:U,infoTooltipText:Z,infoTooltipImage:H}),Object(a.jsx)(k,{onClose:Te,imagePopupIsOpened:w,cardName:ne,cardLink:W}),Object(a.jsx)(v,{name:"delete-card",buttonText:"Yes",title:"Are you sure?",children:Object(a.jsx)(o.a.Fragment,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(T,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.fff0cd97.chunk.js.map