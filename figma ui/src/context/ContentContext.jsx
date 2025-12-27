import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [content, setContent] = useState({
        companyName: "Business Name",
        aboutCompany: "",
        whyChooseUs: ""
    });
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/content');
            const data = await response.json();
            setContent(data);
        } catch (error) {
            console.error('Failed to fetch content:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateContent = async (newContent) => {
        try {
            const response = await fetch('http://localhost:5000/api/content', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newContent)
            });
            const data = await response.json();
            setContent(data);
            return true;
        } catch (error) {
            console.error('Failed to update content:', error);
            return false;
        }
    };

    return (
        <ContentContext.Provider value={{ content, updateContent, loading, fetchContent }}>
            {children}
        </ContentContext.Provider>
    );
}

export function useContent() {
    return useContext(ContentContext);
}
