import React from 'react';
import './Iletisim.css';

const Iletisim = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi, en kısa sürede size döneceğiz!");
  };

  return (
    <section className="iletisim-section" id="iletisim">
      <div className="container">
        <div className="section-title">
          <span className="tag">BİZE ULAŞIN</span>
          <h2>İletişim & Destek</h2>
          <div className="line"></div>
        </div>

        <div className="iletisim-wrapper">
          {/* SOL TARAF: BİLGİLER & HARİTA */}
          <div className="iletisim-info-side">
            <div className="info-box">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Adresimiz</h4>
                  <p>İzmir Mobilyacılar Sitesi, 1234. Sokak No:5, Karabağlar/İzmir</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Telefon</h4>
                  <p>+90 (232) 444 00 00</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>E-Posta</h4>
                  <p>info@egedoor.com.tr</p>
                </div>
              </div>
            </div>

            {/* HARİTA KISMI - Iletisim.jsx içinde bu kısmı bul ve değiştir */}
<div className="map-container">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.356234502574!2d27.114761!3d38.386861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdf64210e3931%3A0xc6659c049d53c7c2!2zS2FyYWJhxJ9sYXIsIMSwem1pcg!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
    width="100%" 
    height="300" 
    style={{ border: 0, borderRadius: '12px' }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>
          </div>

          {/* SAĞ TARAF: FORM */}
          <div className="iletisim-form-side">
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Adınız Soyadınız</label>
                  <input type="text" placeholder="Örn: Ahmet Yılmaz" required />
                </div>
                <div className="input-group">
                  <label>E-Posta Adresiniz</label>
                  <input type="email" placeholder="ahmet@mail.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>Konu</label>
                <select>
                  <option>Çelik Kapı Modelleri Hakkında</option>
                  <option>Oda Kapıları Hakkında</option>
                  <option>Fiyat Teklifi Almak İstiyorum</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="input-group">
                <label>Mesajınız</label>
                <textarea rows="5" placeholder="Size nasıl yardımcı olabiliriz?" required></textarea>
              </div>

              <button type="submit" className="form-submit-btn">MESAJI GÖNDER</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iletisim;