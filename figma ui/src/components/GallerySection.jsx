import React from 'react'
import galleryImage1 from '/Rectangle 228@2x.png'
import galleryImage2 from '/Rectangle 229.png'

function GallerySection() {
    return (
        <section className="gallery-section section">
            <div className="section-header">
                <div className="header-line">
                    <svg viewBox="0 0 178 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 24C30 2 60 2 89 13C118 24 148 24 176 2" stroke="#000000" strokeWidth="1.36" strokeLinecap="round" />
                    </svg>
                </div>
                <h2 className="section-title">Our<br />Gallery</h2>
                <div className="header-line">
                    <svg viewBox="0 0 178 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 24C30 2 60 2 89 13C118 24 148 24 176 2" stroke="#000000" strokeWidth="1.36" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            <p className="view-all">view All</p>

            <div className="gallery-grid">
                <div className="gallery-card">
                    <img src={galleryImage1} alt="Gallery 1" className="gallery-image" />
                    <div className="gallery-gradient"></div>

                    <div className="gallery-user">
                        <div className="gallery-avatar" style={{ background: '#C4C4C4' }}></div>
                        <div>
                            <div className="gallery-username">mymus</div>
                            <div className="gallery-handle">@mymus_off</div>
                        </div>
                    </div>

                    <div className="gallery-footer">
                        <p className="gallery-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="gallery-stats">
                            <span className="gallery-stat">❤️ 26</span>
                            <span className="gallery-stat">💬 03</span>
                            <span className="gallery-stat">🔗</span>
                        </div>
                    </div>
                </div>

                <div className="gallery-card">
                    <img src={galleryImage2} alt="Gallery 2" className="gallery-image" />
                    <div className="gallery-gradient"></div>

                    <div className="gallery-user">
                        <div className="gallery-avatar" style={{ background: '#C4C4C4' }}></div>
                        <div>
                            <div className="gallery-username">mymus</div>
                            <div className="gallery-handle">@mymus_off</div>
                        </div>
                    </div>

                    <div className="gallery-footer">
                        <p className="gallery-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="gallery-stats">
                            <span className="gallery-stat">❤️ 26</span>
                            <span className="gallery-stat">💬 03</span>
                            <span className="gallery-stat">🔗</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GallerySection
