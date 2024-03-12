import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Welcome to BookHub</h2>
            <p className='fs-17'>Embark on an extraordinary journey into the world of literature with BookHub. As avid readers ourselves, we understand the unparalleled joy of immersing oneself in the pages of a captivating book. That's why we've created BookHub - a haven where bookworms unite, and stories come to life.</p>
            <p className='fs-17'>Step into our virtual library, where every book is a gateway to adventure, knowledge, and inspiration. From spine-tingling mysteries to heartwarming tales of love and friendship, our collection spans genres, eras, and cultures, ensuring there's something for every reader.</p>
            <p className='fs-17'>But BookHub is more than just a collection of books; it's a vibrant community pulsating with literary enthusiasm. Engage in lively discussions, exchange recommendations with fellow bibliophiles, and participate in exclusive events and book clubs.</p>
            <p className='fs-17'>At BookHub, we believe in the transformative power of storytelling. Whether you seek solace in the pages of a beloved classic or crave the adrenaline rush of a gripping thriller, our platform is your portal to new worlds and endless possibilities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
