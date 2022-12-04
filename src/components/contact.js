import React from 'react';
import '../styles/contact.css';

function Contact() {
    return (
        <div className={'contact'}>

            <form class="form">
                <h2>CONTACT ME</h2>
                <p type="Name:"><input placeholder="Write your name here.."></input></p>
                <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
                <button>Send Message</button>
            </form>

        </div>
    )
}

export default Contact;