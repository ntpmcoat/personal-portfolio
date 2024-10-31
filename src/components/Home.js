import React, { useEffect } from 'react';
import Sidebar from './Sidebar'
import About from './About';
import Resume from './Resume.js';
import Blogs from './Blogs.js';
import Project from "./Project.js"
import { setupNavigation, setupFormValidation } from './utility';
const Home = () => {

  useEffect(() => {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    setupNavigation(navigationLinks, pages);



    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    setupFormValidation(form, formInputs, formBtn);
  }, []);

  return (
   <>
   
   <main>
    <Sidebar />
    <div className="main-content">

      <nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item">
            <button className="navbar-link  active" data-nav-link>About</button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>Resume</button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>Portfolio</button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>Blog</button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>Contact</button>
          </li>

        </ul>

      </nav>

    <About />

    <Resume />
    <Project/>  {/* portfolio / project  */}
    <Blogs />



      
      <article className="contact" data-page="contact">

        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7212165495826!2d73.09262842409689!3d19.075991101974953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ea0e96302363%3A0xda08b8bd84d84376!2sLABHESHWAR%20PRATHAM%20CO-OPERATIVE%20GROUP%20HOUSING%20SOCIETY%2C%20Petali%2C%20Taloja%20Panchanand%2C%20Taloja%2C%20Navi%20Mumbai%2C%20Maharashtra%20410208!5e0!3m2!1sen!2sin!4v1730027037848!5m2!1sen!2sin" 
          width="400" height="300"  loading="lazy" ></iframe>
        </section>

        <section className="contact-form">

          <h3 className="h3 form-title">Contact Form</h3>

          <form action="#" className="form" data-form>

            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input/>

              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input/>
            </div>

            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>

          </form>

        </section>

      </article>

    </div>

  </main>
</>
  )
}

export default Home;
