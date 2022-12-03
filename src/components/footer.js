import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <div className={'footer'}>
            <div className={'footpart name'}>Jordan Johnson</div>
            <div className={'footpart socials'}>

                <div className={'title'}>Socials:</div>
                <div className={'else'}><a className={'else'} href={'https://www.linkedin.com/in/jordan-johnson-2503b5168'}>LinkedIn</a></div>
                <div className={'else'}><a className={'else'} href={'https://www.github.com/jordan-koichiro-johnson'}>Github</a></div>

            </div>

            <div className={'footpart else'}>mrJordanJohnson@hotmail.com</div>



        </div>
    )
}

export default Footer;