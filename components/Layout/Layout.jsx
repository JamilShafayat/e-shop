import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            { children }
            <Footer />
            <a href="#" id="back-to-top" title="Back to top" style={{ display: "none" }}>
                &uarr;
            </a>
        </>
    )
}