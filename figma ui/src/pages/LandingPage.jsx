import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BusinessInfo from '../components/BusinessInfo';
import PartnerLogos from '../components/PartnerLogos';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductSection from '../components/ProductSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

function LandingPage() {
    const { content, loading } = useContent();

    if (loading) {
        return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <div className="app">
            <Header />

            <Link
                to="/editor"
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 1000,
                    padding: '10px 20px',
                    background: '#000',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px'
                }}
            >
                Edit Content
            </Link>

           
            <div style={{ position: 'relative', width: '100%' }}>
                <Hero />
                <BusinessInfo companyName={content.companyName} />
            </div>

            <PartnerLogos />

            
            <AboutSection aboutText={content.aboutCompany} />

            <WhyChooseUs whyText={content.whyChooseUs} />

            
            <ProductSection />

            
            <GallerySection />

            
            <Footer />
        </div>
    );
}

export default LandingPage;
