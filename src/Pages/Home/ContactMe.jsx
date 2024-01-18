import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();

  useEffect(() => {
    // Check local storage for saved user information and form data
    const savedUserData = JSON.parse(localStorage.getItem('contactUserData')) || {};
    const savedFormData = JSON.parse(localStorage.getItem('contactFormData')) || {};

    // If there is saved user information, populate the user-related form fields
    Object.keys(savedUserData).forEach((key) => {
      const element = form.current.elements[key];
      if (element) {
        element.value = savedUserData[key];
      }
    });

    // If there is saved form data, populate the form fields
    Object.keys(savedFormData).forEach((key) => {
      const element = form.current.elements[key];
      if (element) {
        element.value = savedFormData[key];
      }
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yt68s8x', 'template_3z6auc3', form.current, 'DoCe6RO9nRWJ3klHz')
      .then((result) => {
        console.log(result.text);
        window.alert('Frank has received your message');

        // Clear form and local storage
        form.current.reset();
        localStorage.removeItem('contactUserData');
        localStorage.removeItem('contactFormData');
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleInputChange = (e) => {
    // Save user information and form data to local storage on input change
    const userData = JSON.parse(localStorage.getItem('contactUserData')) || {};
    const formData = JSON.parse(localStorage.getItem('contactFormData')) || {};

    if (e.target.name === 'user_name' || e.target.name === 'last_name' || e.target.name === 'email' || e.target.name === 'phone_number') {
      userData[e.target.name] = e.target.value;
    } else {
      formData[e.target.name] = e.target.value;
    }

    localStorage.setItem('contactUserData', JSON.stringify(userData));
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  };
  return (
    <section id='ContactMe' className='contact--section'>
        <div>
            <p className='sub--title'>Get in Touch</p>
            <h2 className="">Contact Me</h2>
            <p className="text-lg">For swift and convenient communication, <br/>
            we encourage you to get in touch with us using our Contact Me form. <br/>
            Simply fill out the required details, <br/> and we'll promptly respond to 
            your inquiry. <br/> Additionally, you can click on  <br/>the WhatsApp icon to 
            initiate a direct  <br/>chat with us on WhatsApp.  <br/>We look forward 
            to assisting  <br/>you and ensuring a seamless and <br/> efficient
             communication experience.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} onChange={handleInputChange} className='contact--form--container'>
            <div className="container">
                <label htmlFor="first-name" className='contact--label'>
                    <span className='text-md'>First Name</span>
                    <input type="text"className='contact--input text-md' name='user_name' 
                     id='first-name' required placeholder='Enter your name' />
                </label>
                <label htmlFor="last-name" className='contact--label'>
                    <span className='text-md'>Last Name</span>
                    <input type="text"className='contact--input text-md' name='user_name' 
                    id='last-name' required placeholder='Enter Your Surname' />
                </label>
                <label htmlFor="email" className='contact--label'>
                    <span className='text-md'>Email</span>
                    <input type="email"className='contact--input text-md' name='user_email' 
                    id='email' required placeholder='Enter Your Email' />
                </label>
                <label htmlFor="phone-number" className='contact--label'>
                    <span className='text-md'>Phone Number</span>
                    <input type="number"className='contact--input text-md' name='subject' 
                    id='phone-number' required placeholder='Enter Your Phone Number' />
                </label>
            </div>
            <label htmlFor="choose-topic" className='contact--label'>
                    <span className='text-md'>Choose a topic</span>
                    <select  id="choose-topic" className='contact--input text-md'>
                        <option>Choose a topic</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        <option>Item 4</option>
                        <option>Item 5</option>
                    </select>
                </label>
                <label htmlFor="message" className='contact--label'>
                    <span className='text-md'>Message</span> 
                    <textarea name='message'
                     className='contact--input text-md' 
                    id='message' required 
                    placeholder='Type Your Message...'
                    rows="8"
                    />
                </label>
                <label htmlFor="checkbox" className='chechbox--label'>
                    <input type="checkbox" required name='checkbox' id='checkbox' />
                    <span className="text-sm">I aaccept the terms</span>
                </label>
                <div><button type='submit' className="btn btn--primary contact-form--btn">Submit</button></div>
           
        </form>
    </section>
  )
}

