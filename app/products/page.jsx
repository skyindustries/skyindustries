"use client";

import React, { useEffect, useState } from 'react';

export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // --- SPARKLING CURSOR TRAIL ENGINE ---
        const handleMouseMoveSparkle = (e) => {
            if (Math.random() > 0.4) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = e.clientX + 'px';
                sparkle.style.top = e.clientY + 'px';

                const customSize = Math.random() * 5 + 4;
                sparkle.style.width = customSize + 'px';
                sparkle.style.height = customSize + 'px';

                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 800);
            }
        };

        window.addEventListener('mousemove', handleMouseMoveSparkle);

        // --- MULTI-COLORED CLICK BURST ENGINE ---
        const handleClickSparkle = (e) => {
            const sparkColors = ['#00FFCC', '#007BFF', '#FF3366', '#77B5FE', '#FFFFFF'];
            for (let i = 0; i < 12; i++) {
                const spark = document.createElement('div');
                spark.className = 'click-spark';
                spark.style.left = e.clientX + 'px';
                spark.style.top = e.clientY + 'px';

                const randomColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
                const randomSize = Math.random() * 6 + 4;

                spark.style.backgroundColor = randomColor;
                spark.style.width = randomSize + 'px';
                spark.style.height = randomSize + 'px';

                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 80 + 30;
                spark.style.setProperty('--mx', Math.cos(angle) * distance + 'px');
                spark.style.setProperty('--my', Math.sin(angle) * distance + 'px');
                spark.style.boxShadow = `0 0 8px ${randomColor}, 0 0 15px ${randomColor}`;

                document.body.appendChild(spark);
                setTimeout(() => spark.remove(), 600);
            }
        };

        window.addEventListener('click', handleClickSparkle);

        // --- SCROLL VIEW REVEAL ENGINE ---
        const revealElements = document.querySelectorAll('.reveal');
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(element => revealOnScroll.observe(element));

        return () => {
            window.removeEventListener('mousemove', handleMouseMoveSparkle);
            window.removeEventListener('click', handleClickSparkle);
            revealOnScroll.disconnect();
        };
    }, []);

    return (
        <>
            <header>
                <div className="container nav-container">
                    <div className="logo-block">
                        <img src="/logo.png" alt="Sky Industries Logo Icon" />
                        <div className="brand-title">Sky <span>Industries</span></div>
                    </div>
                    
                    <nav className="nav-menu-wrapper">
                        <div className={`hamburger-label ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
                            <li><a href="/products" onClick={() => setMenuOpen(false)}>Products</a></li>
                            <li><a href="/about" className="active" onClick={() => setMenuOpen(false)}>About Us</a></li>
                            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="inner-hero">
                <div className="container">
                    <h1>Our Infrastructure Heritage</h1>
                    <p>Building the backbone of electrical safety and structural integrity since our inception.</p>
                </div>
            </section>

            <main className="container product-catalog-section" style={{ paddingTop: '80px' }}>
                <div className="product-segment reveal">
                    <div className="grid-two-col">
                        <div className="product-details-content">
                            <h3>Rooted in Precision and Safety</h3>
                            <p>Sky Industries was founded on a singular vision: to eliminate structural vulnerabilities in modern electrical layouts. By controlling the entire manufacturing pipeline—from baseline granule selection to precision extrusion—we guarantee an industrial-grade standard that commercial buyers and wholesale distributors can trust blindly.</p>
                            <p>Our regional factory floor in Solapur operates under strict compliance mandates, ensuring that every meter of casing and conduit pipe meets extreme impact and thermal resistance metrics.</p>
                        </div>
                        <div className="product-visual-wrapper">
                            {/* Placeholder for an inner factory or team image */}
                            <img src="/factory-floor.png" alt="Sky Industries Production Floor" />
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                {/* Same footer block as your other pages */}
                <div className="container footer-grid">
                    <div className="footer-about">
                        <h3>Sky Industries</h3>
                        <p>Trusted manufacturers and nationwide wholesale suppliers of high-grade industrial electrical raw components engineered safely for residential, commercial, and macro infrastructure layouts.</p>
                    </div>
                    <div className="footer-contact">
                        <h3>Regional Factory & Head Office</h3>
                        <p>📍 610, Godutai Vidi, Gharkul Parodekar, South MIDC, Solapur, Maharashtra – 413006, India</p>
                        <p>📞 +91 8830597554</p>
                        <p>🌐 skyindustries.store</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Sky Industries. All Rights Reserved. | Infrastructure Built For Safety. Made To Last.</p>
                </div>
            </footer>
        </>
    );
}
