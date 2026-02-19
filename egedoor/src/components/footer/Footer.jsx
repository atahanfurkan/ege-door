import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-premium">
      {/* ÜST BÖLÜM: BÜLTEN & SLOGAN */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-cta">
            <h2>Modern Yaşamın Kapılarını Birlikte Aralayalım.</h2>
            <div className="footer-newsletter">
              <input type="email" placeholder="E-posta adresiniz..." />
              <button>KAYIT OL</button>
            </div>
          </div>
        </div>
      </div>

      {/* ANA BÖLÜM */}
      <div className="footer-main">
        <div className="container footer-grid">
          
          {/* MARKA HİKAYESİ */}
          <div className="footer-col brand-col">
            <div className="f-logo">
              EGE<span>DOOR</span>
            </div>
            <p>
              İzmir'in kalbinde, çelik ve ahşabı sanatla buluşturuyoruz. 
              Güvenliğinizi estetikle mühürleyen kapılar üretiyoruz.
            </p>
            <div className="f-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* HIZLI ERİŞİM */}
          <div className="footer-col">
            <h4>KURUMSAL</h4>
            <ul className="f-links">
              <li><a href="#about">Hikayemiz</a></li>
              <li><a href="#products">Koleksiyonlar</a></li>
              <li><a href="/katalog.pdf">Dijital Katalog</a></li>
              <li><a href="#iletisim">Teknik Destek</a></li>
            </ul>
          </div>

          {/* ÜRETİM GRUPLARI */}
          <div className="footer-col">
            <h4>ÜRÜNLER</h4>
            <ul className="f-links">
              <li><a href="#">Çelik Kapı Serisi</a></li>
              <li><a href="#">Lake Oda Kapıları</a></li>
              <li><a href="#">Laminat Kaplamalar</a></li>
              <li><a href="#">Özel Tasarım Projeler</a></li>
            </ul>
          </div>

          {/* İLETİŞİM DOKUNUŞU */}
          <div className="footer-col contact-col">
            <h4>İLETİŞİM</h4>
            <div className="f-contact-item">
              <span>T:</span> <a href="tel:+902320000000">+90 (232) 000 00 00</a>
            </div>
            <div className="f-contact-item">
              <span>M:</span> <a href="mailto:info@egedoor.com">info@egedoor.com</a>
            </div>
            <div className="f-contact-item">
              <span>A:</span> <p>Karabağlar Mobilyacılar Bölgesi, İzmir</p>
            </div>
          </div>

        </div>
      </div>

      {/* EN ALT: COPYRIGHT */}
      <div className="footer-legal">
        <div className="container flex-legal">
          <p>© 2026 EGE DOOR. Tasarımla Güvenliği Birleştirir.</p>
          <div className="legal-links">
            <a href="#">KVKK</a>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;