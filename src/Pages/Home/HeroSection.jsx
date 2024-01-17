import React from 'react';
import Typical from 'react-typical';
const HeroSection=()=> {
  return (
    <div className='profile-container ' id='HeroSection'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://linkedin.com/in/anuom-chika-frank-364127183/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://wa.me/message/WJKDKX65EAI3L1'>
                        <i class="fa fa-whatsapp"></i>
                    </a>
                    <a href='https://github.com/FrankAnuom'>
                        <i class="fa fa-github"></i>
                    </a>
                    <a href='https://twitter.com/home?lang=en'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, It's <span className='highlighted-text'>Frank</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Think of website 🌐? ",
                                1000,
                                 "Consider Frank",
                                1000,
                                 "Front-End Developer 👩🏻‍💻",
                                1000,
                                 "& Web designer 🎨",
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Developing Your desired taste!
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    {/*Remember to cahnge the link on hire me button*/}
                    <a href='https://folll.io/Neoryte/resume'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me{" "}
                    </button>
                    </a>
                    <a href='https://folll.io/Neoryte/resume'>
                        <button className='btn highlighted-btn'>See Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection