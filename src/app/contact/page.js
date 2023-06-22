import React from 'react';
import Contactcard from '../components/Contactcard';
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
        <div className={styles.container}>
            <h1>Contact page</h1>
            <Contactcard/>

            <section className={styles.contact_section}>
                <h2>We'd love to hear <span> From You</span></h2>
                <ContactForm/> 
            </section>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15119.37613007608!2d74.1332010956278!3d18.670993619228593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2d9bf16b03307%3A0xbae595c11b418b79!2sTalegaon%20Dhamdhere%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687345978619!5m2!1sen!2sin" className={styles.mapping} style={{border:0}} allowfullscreen="" loading="lazy" width={100} height={450} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;