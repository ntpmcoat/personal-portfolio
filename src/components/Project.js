
import React, { useEffect } from 'react';
import { setupFilterButtons, setupCustomSelect, filterFunc } from './utility';

const Project = () => {
  useEffect(() => {
    const filterBtns = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const selectValue = document.querySelector("[data-selecct-value]");

    setupFilterButtons(filterBtns, selectValue, (selectedValue) => filterFunc(filterItems, selectedValue));



    
      const select1 = document.querySelector("[data-select]");
      const selectItems1 = document.querySelectorAll("[data-select-item]");
      const selectValue1 = document.querySelector("[data-selecct-value]");
      const filterItems1 = document.querySelectorAll("[data-filter-item]");
  
      setupCustomSelect(select1, selectItems1, selectValue1, (selectedValue) => filterFunc(filterItems1, selectedValue));
   
  }, []);
  return (
    <>
    <article className="portfolio" data-page="portfolio">

<header>
  <h2 className="h2 article-title">Portfolio</h2>
</header>

<section className="projects">

  <ul className="filter-list">

    <li className="filter-item">
      <button className="active" data-filter-btn>All</button>
    </li>

    <li className="filter-item">
      <button data-filter-btn>Web design</button>
    </li>

    <li className="filter-item">
      <button data-filter-btn>Applications</button>
    </li>

    <li className="filter-item">
      <button data-filter-btn>Web development</button>
    </li>

  </ul>

  <div className="filter-select-box">

    <button className="filter-select" data-select>

      <div className="select-value" data-selecct-value>Select category</div>

      <div className="select-icon">
        <ion-icon name="chevron-down"></ion-icon>
      </div>

    </button>

    <ul className="select-list">

      <li className="select-item">
        <button data-select-item>All</button>
      </li>

      <li className="select-item">
        <button data-select-item>Web design</button>
      </li>

      <li className="select-item">
        <button data-select-item>Applications</button>
      </li>

      <li className="select-item">
        <button data-select-item>Web development</button>
      </li>

    </ul>

  </div>

  <ul className="project-list">

    

    <li className="project-item  active" data-filter-item data-category="web development">
      <a href="#">

        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-2.png" alt="orizon" loading="lazy"/>
        </figure>

        <h3 className="project-title">Emolink</h3>

        <p className="project-category">Web development</p>

      </a>
    </li>

    {/* <li className="project-item  active" data-filter-item data-category="web design">
      <a href="#">

        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-3.jpg" alt="fundo" loading="lazy"/>
        </figure>

        <h3 className="project-title">Fundo</h3>

        <p className="project-category">Web design</p>

      </a>
    </li>

    <li className="project-item  active" data-filter-item data-category="applications">
      <a href="#">

        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-4.png" alt="brawlhalla" loading="lazy"/>
        </figure>

        <h3 className="project-title">Brawlhalla</h3>

        <p className="project-category">Applications</p>

      </a>
    </li> */}




    <li className="project-item  active" data-filter-item data-category="web development">
      <a href="#">

        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-9.png" alt="arrival" loading="lazy"/>
        </figure>

        <h3 className="project-title">Video Streaming</h3>

        <p className="project-category">Web development</p>

      </a>
    </li>

  </ul>

</section>

</article>
    </>
  )
}

export default Project