import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contacts}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactsForm}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <a className={style.urlContacts} href="#">Отправить</a>
            </div>
        </div>
    );
};

export default Contacts;