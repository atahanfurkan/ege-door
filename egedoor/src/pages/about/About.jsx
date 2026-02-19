import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        
        {/* Üst Başlık Alanı */}
        <div className="section-title-area">
          <span className="gold-text">KURUMSAL</span>
          <h2>Hakkımızda</h2>
          <div className="title-line"></div>
        </div>

        <div className="about-content-grid">
          
          {/* Sol: Görsel Alanı (Üretimi Temsil Eden Şık Bir Kare) */}
          <div className="about-image-side">
            <div className="image-overlay-card">
              <span>20.000+</span>
              <p>Yıllık Üretim Kapasitesi</p>
            </div>
            <img src="/celik2.jpg" alt="Ege Door Üretim" />
          </div>

          {/* Sağ: Metin Alanı */}
          <div className="about-text-side">
            <h3>Geleceğin Teknolojisiyle <br/> <span>Kapılarınızı Tasarlıyoruz</span></h3>
            
            <p className="main-p">
              Ege Door olarak, İzmir'deki modern tesislerimizde yıllık <strong>20.000 adet</strong> 
              iç mekan kapısı üretim kapasitemizle, dünyadaki en son teknolojiyi evlerinize getiriyoruz.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="dot"></div>
                <p>Mühendis kadromuzla hata payını minimize eden bilgisayar kontrollü (CNC) üretim.</p>
              </div>
              <div className="feature-item">
                <div className="dot"></div>
                <p>Lake, Laminat, Mebran ve Melamin kaplama seçenekleriyle eşsiz ürün yelpazesi.</p>
              </div>
              <div className="feature-item">
                <div className="dot"></div>
                <p>Üretimin her aşamasında sıkı kalite kontrol ve güvenli sevkiyat prensibi.</p>
              </div>
            </div>

            <div className="about-katalog-box">
              <div className="katalog-info">
                <p>E-kataloğumuzu hemen inceleyebilirsiniz.</p>
                <a href="/katalog.pdf" target="_blank" className="btn-katalog">
                  DİJİTAL KATALOG <i className="arrow-icon">→</i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;