import React from 'react'
import logosImage from '/Frame 146@2x.png'

function PartnerLogos() {
    return (
        <section className="partner-logos">
            <div className="logos-track">
                <div className="logo-group">
                    <img src={logosImage} alt="Partner Logos" className="partner-logo" style={{ width: 'auto' }} />
                </div>
                <div className="logo-group">
                    <img src={logosImage} alt="Partner Logos" className="partner-logo" style={{ width: 'auto' }} />
                </div>
                <div className="logo-group">
                    <img src={logosImage} alt="Partner Logos" className="partner-logo" style={{ width: 'auto' }} />
                </div>
            </div>
        </section>
    )
}

export default PartnerLogos
