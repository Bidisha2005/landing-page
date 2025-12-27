import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

function EditorPage() {
    const { content, updateContent } = useContent();
    const [formData, setFormData] = useState({
        companyName: '',
        aboutCompany: '',
        whyChooseUs: ''
    });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setFormData({
            companyName: content.companyName || '',
            aboutCompany: content.aboutCompany || '',
            whyChooseUs: content.whyChooseUs || ''
        });
    }, [content]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await updateContent(formData);
        if (success) {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Content Editor</h1>
            <Link to="/" style={{ display: 'block', marginBottom: '20px' }}>← Back to Landing Page</Link>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        About Company
                    </label>
                    <textarea
                        name="aboutCompany"
                        value={formData.aboutCompany}
                        onChange={handleChange}
                        rows={6}
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Why Choose Us
                    </label>
                    <textarea
                        name="whyChooseUs"
                        value={formData.whyChooseUs}
                        onChange={handleChange}
                        rows={4}
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '12px 30px',
                        fontSize: '16px',
                        background: '#000',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Save Changes
                </button>

                {saved && (
                    <span style={{ marginLeft: '15px', color: 'green' }}>✓ Saved!</span>
                )}
            </form>
        </div>
    );
}

export default EditorPage;
