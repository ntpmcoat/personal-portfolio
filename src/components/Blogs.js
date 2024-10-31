import React from 'react'

const Blogs = () => {
  return (
    <>
    
    <article className="blog" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">dsa</p>

                    <span className="dot"></span>

                    <time datetime="2024-10-20">20-10-2024</time>
                  </div>

                  <h3 className="h3 blog-item-title">abdsc</h3>

                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>

                </div>

              </a>
            </li>

           
          </ul>

        </section>

      </article>

    </>
  )
}

export default Blogs