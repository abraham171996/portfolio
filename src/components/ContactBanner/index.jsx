import React from 'react';
import styles from './contactBanner.module.scss';
import contact from '../../assets/image/contact.jpg';
import { Link } from 'react-router-dom';

const ContactBanner = () => {
  return (
    <div className={styles.ContactBanner}>
      <div className={styles.ContactBanner__content}>
        <h2>Ibrahim Mammadov</h2>
        <div className={styles.ContactBanner__content__btns}>
          <button>
            <Link to="mailto:ibrahimmemmed313@gmail.com">My Email</Link>
          </button>
          <button>
            <Link to="tel:+994514844500">My Phone</Link>
          </button>
        </div>
        <p>
        Got a project in mind?
        </p>
      </div>
      <figure>
        <img src={contact} alt="" />
      </figure>
    </div>
  );
};

export default ContactBanner;
