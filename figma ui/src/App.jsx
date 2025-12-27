import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './context/ContentContext'
import LandingPage from './pages/LandingPage'
import EditorPage from './pages/EditorPage'

function App() {
    return (
        <ContentProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/editor" element={<EditorPage />} />
                </Routes>
            </BrowserRouter>
        </ContentProvider>
    )
}

export default App
