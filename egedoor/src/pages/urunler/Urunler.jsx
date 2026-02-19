import React, { useState, useEffect } from 'react';
import './Urunler.css';

const Urunler = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Veri hatası:", err));
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="urunler-section" id="products">
      <div className="container">
        <div className="section-title">
          <span className="tag">MODERN KOLEKSİYON</span>
          <h2>Kapı Modellerimiz</h2>
          <div className="line"></div>
        </div>

        <div className="filter-nav">
          {['all', 'celik', 'lake', 'laminat', 'membran', 'melamin'].map(cat => (
            <button 
              key={cat}
              className={filter === cat ? 'active' : ''} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'TÜMÜ' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((p) => (
            <div key={p.id} className="p-card">
              <div className="p-img-wrapper">
                <img src={p.image} alt={p.name} className="main-img" />
                
                {/* Her zaman görünür alt başlık */}
                <div className="p-static-title">
                  <h4>{p.name}</h4>
                  <span className="p-static-cat">{p.category.toUpperCase()}</span>
                </div>

                {/* Gelişmiş Hover Katmanı */}
                <div className="p-hover-layer">
                  <div className="p-hover-content">
                    <div className="p-hover-line"></div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <button className="p-hover-btn">DETAYI GÖR</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Urunler;