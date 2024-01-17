import React from 'react'

export default function ContactMe() {
  return (
    <section id='ContactMe' className='contact--section'>
        <div>
            <p className='sub--title'>Get in Touch</p>
            <h2 className="">Contact Me</h2>
            <p className="text-lg">Lorem, ipsum dolor sit
             amet consectetur adipisicing elit. Vol</p>
        </div>
        <form className='contact--form--container'>
            <div className="container">
                <label htmlFor="first-name" className='contact--label'>
                    <span className='text-md'>First Name</span>
                    <input type="text"className='contact--input text-md' name='first-name' 
                     id='first-name' required placeholder='Enter your name' />
                </label>
                <label htmlFor="last-name" className='contact--label'>
                    <span className='text-md'>Last Name</span>
                    <input type="text"className='contact--input text-md' name='lastt-name' 
                    id='last-name' required placeholder='Enter Your Surname' />
                </label>
                <label htmlFor="email" className='contact--label'>
                    <span className='text-md'>Email</span>
                    <input type="email"className='contact--input text-md' name='email' 
                    id='email' required placeholder='Enter Your Email' />
                </label>
                <label htmlFor="phone-number" className='contact--label'>
                    <span className='text-md'>Phone Number</span>
                    <input type="number"className='contact--input text-md' name='phone-number' 
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
                    <textarea 
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
                <div><button className="btn btn--primary contact-form--btn">Submit</button></div>

        </form>

    </section>
  )
}

