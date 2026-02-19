import React, { useState, useEffect } from 'react';
import './Giris.css';

const Giris = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/celik1.jpg', '/celik2.jpg', '/celik3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="page-wrapper">
      {/* HERO SLIDER */}
      <section className="hero-slider" id="home">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
          />
        ))}
        <div className="hero-overlay-text">
          <h1>EGE DOOR</h1>
          <p>Kapıda Güven, Tasarımda Estetik</p>
        </div>
      </section>

      {/* NEDEN BİZ & KATALOG SECTION */}
      <section className="info-section" id="about">
        <div className="info-container">
          
          <div className="text-content">
            <span className="accent-text">NEDEN BİZ?</span>
            <h2>Kapı denilince ilk akla gelen <strong>EGE DOOR</strong></h2>
            <p>
              Üreticiden tüketiciye doğrudan hizmet veren firmamız, evinizin karakterini belirleyen 
              en önemli unsurun <strong>kapı</strong> olduğunun bilinciyle, her geçen gün yeni modeller üretmeye devam ediyor.
            </p>
            <div className="quote-box">
              "Bir evin kapısı, o eve ait ilk izlenimi verir."
            </div>
          </div>

          <div className="katalog-box">
            <div className="katalog-inner">
              <h3>E-KATALOG</h3>
              <p>Modellerimizi incelemek ve kataloğumuzu indirmek için aşağıdaki butonu kullanın.</p>
              <a href="/katalog.pdf" className="download-btn" target="_blank">
                KATALOĞU İNDİR
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Giris;