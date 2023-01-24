import './Contact.css';

import React from 'react';

const Contact = () => {
    return (
        <>
        <section id="contact"></section>
        <section className='contact'>
            <h5 >Get In Touch</h5>
            <h1 >Contact Me</h1>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <h4>Email</h4>
                        <h5>edsel@gmail.com</h5>
                        <a href='mailto:edsel.nombrado@gmail.com'> Send a message </a>
                    </article>
                    <article className='contact__option'>
                        <h4>Whatsapp</h4>
                        <h5>+9978291835</h5>
                        <a href='https://api.whatsapp.com/send?phone=+9978291835'> Send a message </a>
                    </article>
                    <article className='contact__option'>
                        <h4>Instagram</h4>
                        <h5>edslnmbrdo</h5>
                        <a href='mailto:edsel.nombrado@gmail.com'> Send a message </a>
                    </article>
                </div>
                
                <form action=''>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required  > </textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>

                    {/* I'll Integrate EmailJS later, which is a direct email service */}

                </form>
            </div>
        </section>
        </>
    );
};

export default Contact;