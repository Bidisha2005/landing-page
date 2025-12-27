import React from 'react'
import aboutImage1 from '/Rectangle 286.png'
import aboutImage2 from '/Rectangle 287.png'

function AboutSection({ aboutText }) {
    const defaultText = "Lorem ipsum dolor sit amet consectetur. Viverra leo scelerisque dui mollis integer. Quisque enim sit porttitor quam amet eros. Sed sit in at odio malesuada semper. Nec vulputate ut a velit pellentesque platea purus etiam nunc. Massa at arcu lectus in.";

    return (
        <section className="about-section section">
          
            <img src={aboutImage1} alt="About 1" className="about-image-1" />

          
            <div className="about-image-2-wrapper">
                <img src={aboutImage2} alt="About 2" className="about-image-2" />
            </div>

            <div className="about-content">
                <h2 className="about-title">About Company</h2>
                <p className="about-text">
                    {aboutText || defaultText}
                </p>
            </div>

            <button className="hiring-btn">We're Hiring</button>
        </section>
    )
}

export default AboutSection
