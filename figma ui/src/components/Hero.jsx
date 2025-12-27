import React from 'react'
import heroImage from '/Rectangle 279.png'

function Hero() {
    return (
        <section className="hero-section section">
            <img src={heroImage} alt="Hero" className="hero-image" />

            <div className="stats-card">
                <div className="stat-item">
                    <span className="stat-number">650k</span>
                    <span className="stat-label">Subscribers</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">5000</span>
                    <span className="stat-label">Post</span>
                </div>
            </div>

            <div className="rating-badge">
                <span className="rating-crown">👑</span>
                <span className="rating-number">4.5</span>
                <span className="rating-star">⭐</span>
            </div>
        </section>
    )
}

export default Hero
