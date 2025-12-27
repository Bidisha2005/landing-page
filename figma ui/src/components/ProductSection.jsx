import React from 'react'
import productMain from '/Rectangle 220.png'
import productLeft from '/Rectangle 213.png'
import productRight from '/Rectangle 215.png'

function ProductSection() {
    return (
        <section className="product-section section">
            <div className="section-header">
                <div className="header-line">
                    <svg viewBox="0 0 178 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 24C30 2 60 2 89 13C118 24 148 24 176 2" stroke="#000000" strokeWidth="1.36" strokeLinecap="round" />
                    </svg>
                </div>
                <h2 className="section-title">Our<br />Product</h2>
                <div className="header-line">
                    <svg viewBox="0 0 178 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 24C30 2 60 2 89 13C118 24 148 24 176 2" stroke="#000000" strokeWidth="1.36" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            <p className="view-all">view All</p>

            <div className="product-carousel">
                <div className="carousel-arrow left">
                    <svg viewBox="0 0 48 61" fill="none">
                        <path d="M46 59L2 30.5L46 2" stroke="url(#gradLeft)" strokeWidth="4" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="4.84%" stopColor="#E85BFF" />
                                <stop offset="95.29%" stopColor="#232197" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="product-display">
                    <img src={productLeft} alt="Product Left" className="product-side left" />
                    <div className="product-blur left"></div>

                    <div style={{ position: 'relative' }}>
                        <img src={productMain} alt="Product Main" className="product-main" />
                        <div className="product-info">
                            <h3 className="product-name">Product Name</h3>
                            <div className="product-icons">
                                <div className="product-icon">
                                    <svg viewBox="0 0 50 47" fill="none">
                                        <path d="M25 47L21.35 43.65C8.5 32 0 24.35 0 15C0 7.35 6.05 1.3 13.7 1.3C18.05 1.3 22.22 3.35 25 6.65C27.78 3.35 31.95 1.3 36.3 1.3C43.95 1.3 50 7.35 50 15C50 24.35 41.5 32 28.65 43.65L25 47Z" fill="url(#heartGrad)" />
                                        <defs>
                                            <radialGradient id="heartGrad" cx="24%" cy="25%" r="73%">
                                                <stop stopColor="#FF0000" />
                                                <stop offset="1" stopColor="#E81092" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="product-icon">
                                    <svg viewBox="0 0 44 44" fill="none">
                                        <circle cx="22" cy="22" r="20" fill="url(#blueGrad)" />
                                        <circle cx="15" cy="22" r="2" fill="white" />
                                        <circle cx="22" cy="22" r="2" fill="white" />
                                        <circle cx="29" cy="22" r="2" fill="white" />
                                        <defs>
                                            <radialGradient id="blueGrad" cx="24%" cy="25%" r="73%">
                                                <stop stopColor="#40DDFF" />
                                                <stop offset="1" stopColor="#1363FF" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="product-icon">
                                    <svg viewBox="0 0 65 38" fill="#C4C4C4">
                                        <path d="M0 19C0 8.5 8.5 0 19 0H46C56.5 0 65 8.5 65 19C65 29.5 56.5 38 46 38H19C8.5 38 0 29.5 0 19Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-blur right"></div>
                    <img src={productRight} alt="Product Right" className="product-side right" />
                </div>

                <div className="carousel-arrow right">
                    <svg viewBox="0 0 61 61" fill="none">
                        <path d="M2 2L59 30.5L2 59" stroke="url(#gradRight)" strokeWidth="4" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="4.84%" stopColor="#E85BFF" />
                                <stop offset="95.29%" stopColor="#232197" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default ProductSection
