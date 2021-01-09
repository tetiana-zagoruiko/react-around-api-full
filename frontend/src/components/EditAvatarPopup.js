import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const newAvatar = React.createRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(newAvatar.current.value);
    }

    return (
        <div>
            <PopupWithForm
                onSubmit={handleSubmit}
                isOpen={isOpen}
                onClose={onClose}
                name="edit-avatar"
                buttonText="Save"
                title="Change profile picture"
                children={
                    <React.Fragment>
                        <input ref={newAvatar} id="avatar-url" name="link" type="url" className="form__input form__input_type_photo-url"
                         required />
                    </React.Fragment>}
            />
        </div>
    );
}

export default EditAvatarPopup;