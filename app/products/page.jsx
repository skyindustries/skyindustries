"use client";

import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        // --- 0. BLUE SPARKLING CURSOR TRAIL ENGINE ---
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

                setTimeout(() => {
                    sparkle.remove();
                }, 800);
            }
        };

        window.addEventListener('mousemove', handleMouseMoveSparkle);

        // --- 0.1 MULTI-COLORED CLICK BURST PARTICLE ENGINE ---
        const handleClickSparkle = (e) => {
            const sparkColors = ['#00FFCC', '#007BFF', '#FF3366', '#77B5FE', '#FFFFFF'];
            const particleCount = 12;

            for (let i = 0; i < particleCount; i++) {
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
                const mx = Math.cos(angle) * distance + 'px';
                const my = Math.sin(angle) * distance + 'px';

                spark.style.setProperty('--mx', mx);
                spark.style.setProperty('--my', my);
                spark.style.boxShadow = `0 0 8px ${randomColor}, 0 0 15px ${randomColor}`;

                document.body.appendChild(spark);

                setTimeout(() => {
                    spark.remove();
                }, 600);
            }
        };

        window.addEventListener('click', handleClickSparkle);

        // --- 2. SCROLL VIEW REVEAL INITIATOR ---
        const revealElements = document.querySelectorAll('.reveal');
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        revealElements.forEach(element => { revealOnScroll.observe(element); });

        return () => {
            window.removeEventListener('mousemove', handleMouseMoveSparkle);
            window.removeEventListener('click', handleClickSparkle);
            revealOnScroll.disconnect();
        };
    }, [activeTab]); // Re-run effect when tabs shift to hook dynamic new elements into IntersectionObserver

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* Embedded Native Global Style Block */}
            <style dangerouslySetInnerHTML={{ __html: `
                :root {
                    --primary-blue: #0056B3;
                    --gradient-blue: linear-gradient(135deg, #0056B3 0%, #002855 100%);
                    --metallic-glow: linear-gradient(90deg, #FFFFFF, #B0D4FF, #FFFFFF);
                    --dark-grey: #0F1113;
                    --light-bg: #F4F7FB;
                    --white: #FFFFFF;
                    --text-dark: #101214;
                    --text-muted: #5F6468;
                    --accent-blue: #007BFF;
                    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    --transition-smooth: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    --max-width: 1440px; 
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html {
                    scroll-behavior: smooth;
                }

                body {
                    font-family: var(--font-main);
                    color: var(--text-dark);
                    line-height: 1.65;
                    background-color: var(--white);
                    overflow-x: hidden;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }

                ul {
                    list-style: none;
                }

                img {
                    max-width: 100%;
                    display: block;
                }

                .container {
                    width: 92%;
                    max-width: var(--max-width);
                    margin: 0 auto;
                }

                .sparkle {
                    position: fixed;
                    width: 6px;
                    height: 6px;
                    background: radial-gradient(circle, #77B5FE 0%, rgba(0, 86, 179, 0.8) 60%, transparent 100%);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    box-shadow: 0 0 10px #007BFF, 0 0 20px #0056B3;
                    transform: translate(-50%, -50%);
                    animation: sparkleFade 0.8s ease-out forwards;
                }

                @keyframes sparkleFade {
                    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(0) rotate(180deg); opacity: 0; }
                }

                .click-spark {
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10000;
                    transform: translate(-50%, -50%);
                    animation: clickSparkFade 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }

                @keyframes clickSparkFade {
                    0% { transform: translate(-50%, -50%) translate(0, 0) scale(1); opacity: 1; }
                    100% { transform: translate(-50%, -50%) translate(var(--mx), var(--my)) scale(0); opacity: 0; }
                }

                .btn {
                    display: inline-block;
                    padding: 16px 42px;
                    border-radius: 50px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 2px;
                    transition: var(--transition-smooth);
                    cursor: pointer;
                    position: relative;
                    z-index: 5;
                    overflow: hidden;
                    border: none;
                    text-align: center;
                }

                .btn-primary {
                    background: var(--gradient-blue);
                    color: var(--white);
                    box-shadow: 0 4px 25px rgba(0, 86, 179, 0.4);
                }

                .btn-primary:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 15px 35px rgba(0, 86, 179, 0.6);
                }

                .section-title {
                    text-align: center;
                    font-size: 2.8rem;
                    color: var(--dark-grey);
                    margin-bottom: 20px;
                    position: relative;
                    padding-bottom: 20px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120px;
                    height: 4px;
                    background: var(--gradient-blue);
                    border-radius: 4px;
                }

                .section-subtitle {
                    text-align: center;
                    color: var(--text-muted);
                    margin-bottom: 50px;
                    font-size: 1.15rem;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                header {
                    background-color: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 4px 30px rgba(0,0,0,0.02);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 0;
                }

                .logo-block {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    z-index: 1010;
                }

                .logo-block img { height: 70px; width: auto; }
                .brand-title { font-size: 1.7rem; font-weight: 800; color: #002855; letter-spacing: 1.5px; text-transform: uppercase; }
                .brand-title span { color: var(--primary-blue); }
                
                .hamburger-label { display: none; cursor: pointer; padding: 10px; z-index: 1010; }
                .hamburger-label .bar { display: block; width: 28px; height: 3px; margin: 5px auto; background-color: #002855; transition: all 0.4s ease-in-out; border-radius: 2px; }

                .nav-links { display: flex; gap: 40px; }
                .nav-links a { font-weight: 700; color: #2A2C2E; font-size: 0.95rem; transition: var(--transition-smooth); position: relative; padding: 10px 0; text-transform: uppercase; }
                .nav-links a:hover, .nav-links a.active { color: var(--primary-blue); }
                .nav-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 3px; background-color: var(--primary-blue); transition: var(--transition-smooth); border-radius: 4px; }
                .nav-links a.active::after, .nav-links a:hover::after { width: 100%; }

                /* --- INNER HERO DISPLAY --- */
                .inner-hero {
                    background: linear-gradient(135deg, #050E22 0%, #0D1F42 100%);
                    color: var(--white);
                    padding: 100px 0;
                    text-align: center;
                }

                .inner-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                    background: var(--metallic-glow);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .inner-hero p { font-size: 1.2rem; color: #C0D6F2; font-weight: 300; max-width: 700px; margin: 0 auto; }

                /* --- TABS SYSTEM --- */
                .tabs-container {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin: 50px 0;
                    flex-wrap: wrap;
                }

                .tab-btn {
                    padding: 14px 28px;
                    border-radius: 30px;
                    font-weight: 700;
                    background: var(--light-bg);
                    color: var(--text-dark);
                    border: 2px solid transparent;
                    cursor: pointer;
                    transition: var(--transition-smooth);
                    font-size: 0.95rem;
                }

                .tab-btn:hover, .tab-btn.active {
                    background: var(--white);
                    color: var(--primary-blue);
                    border-color: var(--primary-blue);
                    box-shadow: 0 10px 20px rgba(0, 86, 179, 0.08);
                    transform: translateY(-2px);
                }

                /* --- DETAILS DISPLAY GRID --- */
                .product-catalog-section { padding-bottom: 120px; }
                .product-segment { margin-bottom: 100px; }
                .segment-header { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; border-bottom: 2px solid var(--light-bg); padding-bottom: 15px; }
                .segment-header h2 { font-size: 2rem; font-weight: 800; color: #002855; }
                .segment-header .badge { background: var(--primary-blue); color: var(--white); font-size: 0.8rem; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }

                .grid-two-col { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center; }
                .grid-two-col.reverse { grid-template-columns: 1.2fr 1fr; }
                
                .product-visual-wrapper {
                    background: linear-gradient(135deg, #FAFCFF 0%, #E9EFF8 100%);
                    border-radius: 24px;
                    padding: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid rgba(0,0,0,0.02);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.01);
                }

                .product-visual-wrapper img { width: 80%; height: auto; transition: var(--transition-smooth); }
                .product-visual-wrapper:hover img { transform: scale(1.05) rotate(1deg); }

                .product-details-content h3 { font-size: 1.6rem; color: var(--dark-grey); margin-bottom: 15px; font-weight: 800; }
                .product-details-content p { color: var(--text-muted); margin-bottom: 25px; font-size: 1.05rem; }
                
                /* --- TECH SPECS MATRIX TABLES --- */
                .matrix-table-wrapper { overflow-x: auto; margin-top: 25px; border-radius: 12px; border: 1px solid #E2E8F0; }
                .matrix-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }
                .matrix-table th { background: #002855; color: var(--white); padding: 14px 18px; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; }
                .matrix-table td { padding: 14px 18px; border-bottom: 1px solid #E2E8F0; color: #333A40; font-weight: 500; }
                .matrix-table tr:nth-child(even) td { background: #F8FAFC; }
                .matrix-table tr:last-child td { border-bottom: none; }

                /* --- SUB CATALOG MINI CARDS --- */
                .sub-catalog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 25px; margin-top: 20px; }
                .sub-card { background: #F8FAFC; border-radius: 16px; padding: 25px; text-align: center; border: 1px solid #E2E8F0; transition: var(--transition-smooth); }
                .sub-card:hover { background: var(--white); border-color: var(--primary-blue); transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,86,179,0.06); }
                .sub-card .img-box { height: 130px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; }
                .sub-card .img-box img { max-height: 100%; width: auto; }
                .sub-card h4 { font-size: 1.1rem; color: var(--dark-grey); font-weight: 700; }

                /* --- ENHANCED INQUIRY CTA BANNER --- */
                .cta-commercial-banner {
                    background: linear-gradient(135deg, #040A18 0%, #020612 100%);
                    color: var(--white);
                    border-radius: 30px;
                    padding: 80px 60px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 120px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                }

                .cta-commercial-banner::before {
                    content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,86,179,0.15) 0%, transparent 70%); top: -150px; left: -150px;
                }

                .cta-commercial-banner h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 20px; }
                .cta-commercial-banner p { color: #A9B9D1; font-size: 1.2rem; max-width: 750px; margin: 0 auto 40px auto; }

                footer { background-color: var(--dark-grey); color: #92979B; padding: 100px 0 40px 0; font-size: 0.95rem; border-top: 6px solid #141619; }
                .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 60px; margin-bottom: 60px; }
                .footer-about h3, .footer-links h3, .footer-contact h3 { color: var(--white); font-size: 1.4rem; margin-bottom: 30px; font-weight: 800; }
                .footer-links ul li { margin-bottom: 14px; }
                .footer-links ul li a { transition: var(--transition-smooth); }
                .footer-links ul li a:hover { color: var(--white); padding-left: 12px; }
                .footer-contact p { margin-bottom: 18px; display: flex; align-items: flex-start; gap: 15px; }
                .footer-bottom { border-top: 1px solid #232629; padding-top: 40px; text-align: center; font-size: 0.88rem; }

                /* --- REVEAL COMPLIANCE ENGINE --- */
                .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
                .reveal.active { opacity: 1; transform: translateY(0); }

                /* --- MEDIA QUERIES --- */
                @media (max-width: 992px) {
                    .grid-two-col, .grid-two-col.reverse { grid-template-columns: 1fr; gap: 40px; }
                    .grid-two-col.reverse .product-visual-wrapper { order: -1; }
                    .hamburger-label { display: block; }
                    .nav-links {
                        position: fixed; top: 86px; left: -100%; width: 100%; height: calc(100vh - 86px);
                        background-color: rgba(255, 255, 255, 0.98); backdrop-filter: blur(15px);
                        flex-direction: column; align-items: center; gap: 30px; padding-top: 50px;
                        transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 15px 30px rgba(0,0,0,0.05);
                    }
                    .nav-links.open { left: 0; }
                    .nav-links a { font-size: 1.2rem; width: 100%; text-align: center; padding: 15px 0; }
                    .hamburger-label.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); background-color: var(--primary-blue); }
                    .hamburger-label.active .bar:nth-child(2) { opacity: 0; }
                    .hamburger-label.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); background-color: var(--primary-blue); }
                }

                @media (max-width: 768px) {
                    .inner-hero h1 { font-size: 2.6rem; }
                    .cta-commercial-banner { padding: 50px 30px; border-radius: 20px; }
                    .cta-commercial-banner h2 { font-size: 1.8rem; }
                }
            `}} />

            <header>
                <div className="container nav-container">
                    <div className="logo-block">
                        <img src="logo.png" alt="Sky Industries Logo Icon" />
                        <div className="brand-title">Sky <span>Industries</span></div>
                    </div>
                    
                    <nav className="nav-menu-wrapper">
                        <div 
                            className={`hamburger-label ${menuOpen ? 'active' : ''}`} 
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                            <li><a href="index.html" onClick={handleLinkClick}>Home</a></li>
                            <li><a href="products.html" className="active" onClick={handleLinkClick}>Products</a></li>
                            <li><a href="about.html" onClick={handleLinkClick}>About Us</a></li>
                            <li><a href="contact.html" onClick={handleLinkClick}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="inner-hero">
                <div className="container">
                    <h1>Technical Product Catalog</h1>
                    <p>High-precision manufacturing layout built to exact ISI and international safety specifications.</p>
                </div>
            </section>

            <div className="container">
                <div className="tabs-container">
                    <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Show All Inventory</button>
                    <button className={`tab-btn ${activeTab === 'casing' ? 'active' : ''}`} onClick={() => setActiveTab('casing')}>PVC Casing (Patti)</button>
                    <button className={`tab-btn ${activeTab === 'conduit' ? 'active' : ''}`} onClick={() => setActiveTab('conduit')}>Electrical Conduit Pipes</button>
                    <button className={`tab-btn ${activeTab === 'accessories' ? 'active' : ''}`} onClick={() => setActiveTab('accessories')}>Fittings & Accessories</button>
                </div>
            </div>

            <main className="container product-catalog-section">
                
                {/* --- SEGMENT 1: PVC CASING --- */}
                {(activeTab === 'all' || activeTab === 'casing') && (
                    <div className="product-segment reveal">
                        <div className="segment-header">
                            <h2>PVC Casing & Capping</h2>
                            <span className="badge">Flame Retardant</span>
                        </div>
                        <div className="grid-two-col">
                            <div className="product-visual-wrapper">
                                <img src="casing-patti.png" alt="Sky Industries PVC Casing Patti Component" />
                            </div>
                            <div className="product-details-content">
                                <h3>High-Impact PVC Wiring Profiles</h3>
                                <p>Our premium PVC Casing Patti is engineered from highly refined, high-density unplasticized polyvinyl chloride. Designed explicitly for crisp clean integration profiles across modern micro-interior networks, it provides zero structural buckling and an effortless clip-lock mechanism layout.</p>
                                
                                <div className="matrix-table-wrapper">
                                    <table className="matrix-table">
                                        <thead>
                                            <tr>
                                                <th>Standard Dimensions</th>
                                                <th>Wall Thickness</th>
                                                <th>Standard Length</th>
                                                <th>Pack Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>20 mm × 12 mm</td><td>1.0 mm</td><td>2.0 Meters</td><td>100 Units</td></tr>
                                            <tr><td>25 mm × 16 mm</td><td>1.2 mm</td><td>2.0 Meters</td><td>100 Units</td></tr>
                                            <tr><td>32 mm × 16 mm</td><td>1.2 mm</td><td>2.0 Meters</td><td>50 Units</td></tr>
                                            <tr><td>38 mm × 25 mm</td><td>1.5 mm</td><td>2.0 Meters</td><td>50 Units</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SEGMENT 2: CONDUIT PIPES --- */}
                {(activeTab === 'all' || activeTab === 'conduit') && (
                    <div className="product-segment reveal">
                        <div className="segment-header">
                            <h2>Electrical Rigid Conduit Pipes</h2>
                            <span className="badge">Heavy Duty Shockproof</span>
                        </div>
                        <div className="grid-two-col reverse">
                            <div className="product-details-content">
                                <h3>Rigid Structural Insulation Conduits</h3>
                                <p>Constructed carefully to tolerate extreme construction load distributions without wall collapses or structural fault points. These pipes showcase brilliant elastic bending capacity during installation phases, preventing micro-stress fractures when running complex hidden internal floor configurations.</p>
                                
                                <div className="matrix-table-wrapper">
                                    <table className="matrix-table">
                                        <thead>
                                            <tr>
                                                <th>Outer Diameter</th>
                                                <th>Classification Gauge</th>
                                                <th>Impact Strength</th>
                                                <th>Standard Length</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>20 mm</td><td>Medium / Heavy Mechanical</td><td>High Stress Proof</td><td>3.0 Meters</td></tr>
                                            <tr><td>25 mm</td><td>Medium / Heavy Mechanical</td><td>High Stress Proof</td><td>3.0 Meters</td></tr>
                                            <tr><td>32 mm</td><td>Heavy Industrial Grade</td><td>Extreme Stress Proof</td><td>3.0 Meters</td></tr>
                                            <tr><td>40 mm</td><td>Heavy Industrial Grade</td><td>Extreme Stress Proof</td><td>3.0 Meters</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="product-visual-wrapper">
                                <img src="conduit-pipes.png" alt="Sky Industries Heavy Duty Rigid Electrical Conduit Pipes" />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SEGMENT 3: ACCESSORIES --- */}
                {(activeTab === 'all' || activeTab === 'accessories') && (
                    <div className="product-segment reveal">
                        <div className="segment-header">
                            <h2>Precision Interlink Fitting Inventory</h2>
                            <span className="badge">Seamless Fit Match</span>
                        </div>
                        <div className="product-details-content" style={{ marginBottom: '30px' }}>
                            <h3>Modular Structural Component Links</h3>
                            <p>To support high-speed mass operations on raw construction zones, we produce an extensive line of matching custom component accessories built to align flawlessly with our primary casing and pipe runs.</p>
                        </div>
                        
                        <div className="sub-catalog-grid">
                            <div className="sub-card">
                                <div className="img-box"><img src="accessories.png" alt="Coupling Link" /></div>
                                <h4>Smooth Straight Couplings</h4>
                            </div>
                            <div className="sub-card">
                                <div className="img-box"><img src="accessories.png" alt="90 Degree Bend" /></div>
                                <h4>90° Architectural Bends</h4>
                            </div>
                            <div className="sub-card">
                                <div className="img-box"><img src="accessories.png" alt="Junction Box" /></div>
                                <h4>Deep Dimension Junction Boxes</h4>
                            </div>
                            <div className="sub-card">
                                <div className="img-box"><img src="accessories.png" alt="Space Bar Saddle" /></div>
                                <h4>Secure Grip Space Saddles</h4>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- COMMERICAL DEPLOYMENT CALL TO ACTION --- */}
                <section className="cta-commercial-banner reveal">
                    <h2>Custom Wholesale Production Specifications Required?</h2>
                    <p>We work tightly alongside structural procurement engineering squads, regional wholesale distributors, and real estate development groups to construct tailor-made wall-thickness parameters and dedicated custom length runs.</p>
                    <div>
                        <a href="contact.html" className="btn btn-primary">Connect With Procurement Desk</a>
                    </div>
                </section>

            </main>

            <footer>
                <div className="container footer-grid">
                    <div className="footer-about">
                        <h3>Sky Industries</h3>
                        <p>Trusted manufacturers and nationwide wholesale suppliers of high-grade industrial electrical raw components engineered safely for residential, commercial, and macro infrastructure layouts.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Navigation Hub</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
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
