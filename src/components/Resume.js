import React from 'react'

const Resume = () => {
  return (
    <> 
       <article className="resume" data-page="resume">

<header>
  <h2 className="h2 article-title">Resume</h2>
</header>

<section className="timeline">

  <div className="title-wrapper">
    <div className="icon-box">
      <ion-icon name="book-outline"></ion-icon>
    </div>

    <h3 className="h3">Education</h3>
  </div>

  <ol className="timeline-list">

    <li className="timeline-item">

      <h4 className="h4 timeline-item-title">MCA (from VESIT, Mumbai university)</h4>

      <span>2024 — present</span>

      <p className="timeline-text">
      Currently pusing my masters from VESIT, one of the best institute in mumbai for MCA.  
      </p>

    </li>

    <li className="timeline-item">

      <h4 className="h4 timeline-item-title">BCA (from TMV university)</h4>

      <span>2021 — 2024</span>
      
      <p className="timeline-text">
       Completed my gradution from Tilak maharashtra vidyapeeth university, pune with 8.88 CGPA ranking Second in the entire university.
       </p><p className="timeline-text">
       Recieved Recieved Acadmic excellence Award for outstanding achievements and team work. Earned appreciation from university for
        developing Emolink (Final year project) , a social media platform that enhances user engagement while addressing issues like fake accounts
      </p>

    </li>

    <li className="timeline-item">

      <h4 className="h4 timeline-item-title">HSC</h4>

      <span>2020-2021</span>

      <p className="timeline-text">
      Completed my HSC from maharashtra state board with 84%.
      </p>

    </li>

  </ol>

</section>

<section className="timeline">

  <div className="title-wrapper">
    <div className="icon-box">
      <ion-icon name="book-outline"></ion-icon>
    </div>

    <h3 className="h3">Experience</h3>
  </div>

  <ol className="timeline-list">

    <li className="timeline-item">

      <h4 className="h4 timeline-item-title">Web Developer intern</h4>

      <span>2015 — Present</span>

      <p className="timeline-text">
        Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
        molestias
        exceptur.
      </p>

    </li>

    <li className="timeline-item">

      <h4 className="h4 timeline-item-title">Web developer intern</h4>

      <span>nov 2024 — feb 2024</span>

      <p className="timeline-text">
      during this internship  my role was as MERN  developer,  here i worked hands on project allAboutFood. During this intership i learned ......
       
      </p>

    </li>

    <li className="timeline-item">

      <h4 className="h4 timeline-item-title">Web developer intern</h4>

      <span> Sept 2024 — nov 2024</span>

      <p className="timeline-text">
       during this internship  my role was frontend developer, i was supposed to develop frontend of websites and handover to senior developer.
       
      </p>

    </li>

  </ol>

</section>

<section className="skill">

  <h3 className="h3 skills-title">My skills</h3>

  <ul className="skills-list content-card">

    <li className="skills-item">

      <div className="title-wrapper">
        <h5 className="h5">Javascript</h5>
        {/* <data value="80">80%</data> */}
      </div>

      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{ width: '80%' }}></div>
      </div>

    </li>

    <li className="skills-item">

      <div className="title-wrapper">
        <h5 className="h5">Java</h5>
        {/* <data value="70">70%</data> */}
      </div>

      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{width: '70%'}}></div>
      </div>

    </li>

 

    <li className="skills-item">

      <div className="title-wrapper">
        <h5 className="h5">Python</h5>
        {/* <data value="80">80%</data> */}
      </div>

      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{width: '80%'}}></div>
      </div>

    </li>
    <li className="skills-item">

<div className="title-wrapper">
  <h5 className="h5">React JS</h5>
  {/* <data value="60">60%</data> */}
</div>



<div className="skill-progress-bg">
  <div className="skill-progress-fill" style={{width: '60%'}}></div>
</div>

</li>   <li className="skills-item">

<li className="skills-item">

<div className="title-wrapper">
  <h5 className="h5">Node</h5>
  {/* <data value="60">60%</data> */}
</div>

<div className="skill-progress-bg">
  <div className="skill-progress-fill" style={{width: '60%'}}></div>
</div>

</li>
<li className="skills-item">




<div className="title-wrapper">
  <h5 className="h5">React Native</h5>
  {/* <data value="60">60%</data> */}
</div>
<div className="skill-progress-bg">
  <div className="skill-progress-fill" style={{width: '60%'}}></div>
</div>
</li>
<div className="title-wrapper">
  <h5 className="h5">Spring Boot</h5>
  {/* <data value="60">60%</data> */}
</div>

<div className="skill-progress-bg">
  <div className="skill-progress-fill" style={{width: '60%'}}></div>
</div>

</li>
<li className="skills-item">

<div className="title-wrapper">
  <h5 className="h5">Flask</h5>
  {/* <data value="60">60%</data> */}
</div>

<div className="skill-progress-bg">
  <div className="skill-progress-fill" style={{width: '60%'}}></div>
</div>

</li>

  </ul>

</section>

</article>


     
    </>
  )
}

export default Resume;