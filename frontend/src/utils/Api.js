class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = "https://www.api.tzpract.students.nomoreparties.site";
        this._headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }; 
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    getUserInfo() { 
        return fetch(this._baseUrl + '/users/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    addCard({ name, link}) {
        return fetch(this._baseUrl + '/cards', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: "POST",
            body: JSON.stringify({
                name,
                link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    removeCard(cardID) {
        return fetch(this._baseUrl + '/cards/' + cardID, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: "DELETE"
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))

    }

    changeLikeCardStatus (cardID, like) {
        if (like) {
            return fetch(this._baseUrl + '/cards/' + cardID + '/likes', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                },
                method: "DELETE"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        } else {
            return fetch(this._baseUrl + '/cards/' + cardID + '/likes', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                },
                method: "PUT"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        }
    }

    setUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: "PATCH",
            body: JSON.stringify({
                name: data.name,
                about: data.title
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    setUserAvatar(avatar) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: "PATCH",
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

}

const api = new Api({
    baseUrl: "http://localhost:3000",
});

export default api;