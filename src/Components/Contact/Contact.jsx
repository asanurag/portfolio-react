// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import github_icon from '../../assets/icons-github.svg';
import linkedin_icon from '../../assets/icons-linkedin.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bea42f5f-16ed-4278-9760-39956b27f31f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="contact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>I&apos;m currently available to take on new Projects or Job, so feel free to reach me through E-mail or Mobile No.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='' /> <p>asanu5991@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' /> <p>+919125712970</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' /> <p>Varanasi, U.P., India</p>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt='GitHub' />
              <a href="https://github.com/asanurag" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt='LinkedIn' />
              <a href="https://www.linkedin.com/in/anurag-srivastava-687567208/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=''>Your Name :</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor=''>Your Email :</label>
          <input type="email" placeholder='Enter Your Email' name='email' />
          <label htmlFor=''>Write Your Message Here :</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
