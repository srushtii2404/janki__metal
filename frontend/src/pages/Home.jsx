import React from 'react';
const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='img-container-box'>
                <div className='img-inner-box'>
                  <img src="/images/slide1.jpg" className="d-block w-100" alt="item1" />
                </div>
              </div>
              <div class="slider-content">
                <h1 class="caresoule-title"><span class="break-word">Discover</span> Right Steel</h1>
                <p class="caresoule-content">Stainless Steel</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className='img-container-box'>
                <div className='img-inner-box'>
                  <img src="/images/banner3.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div class="slider-content">
                <h1 class="caresoule-title"><span class="break-word">Discover</span> Right Steel</h1>
                <p class="caresoule-content">Stainless Steel</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className='img-container-box'>
                <div className='img-inner-box'>
                  <img src="/images/banner4.webp" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div class="slider-content">
                <h1 class="caresoule-title"><span class="break-word">Discover</span> Right Steel</h1>
                <p class="caresoule-content">Stainless Steel</p>
              </div>
            
            </div>
            <div className="carousel-item">
              <div className='img-container-box'>
                <div className='img-inner-box'>
                  <img src="/images/banner5.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div class="slider-content">
                <h1 class="caresoule-title"><span class="break-word">Discover</span> Right Steel</h1>
                <p class="caresoule-content">Stainless Steel</p>
              </div>
            
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span><span class="control-txt prev-view">Previous</span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="control-txt prev-next">Next</span> <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Home