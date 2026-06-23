// app/about/page.jsx
'use client';

import { useEffect } from 'react';

export default function Page() {
  useCursorEffects();
  useScrollReveal();

  return (
    <>
      {/* Page banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Corporate Profile</h1>
          <p>
            Forging structural integrity and manufacturing absolute electrical protection
            mechanisms for high-volume infrastructure requirements.
          </p>
        </div>
      </section>

      {/* Overview section */}
      <section className="overview-section">
        <div className="container overview-grid">
          <div className="overview-text reveal">
            <h2>Our Manufacturing Identity</h2>
            <p>
              SKY INDUSTRIES is a high-capacity manufacturer and reliable supplier of
              premium-quality electrical raw materials. Operating from our advanced
              production facilities inside the industrial zone of South MIDC, Solapur, we
              deliver durable, reliable, and highly cost-effective polymer solutions.
            </p>
            <p>
              We strictly engineer all component geometries to survive the demanding
              installation environments found across residential complexes, large-scale
              commercial structures, and multi-ton industrial setups.
            </p>
          </div>

          <div className="overview-visual reveal">
            <div className="core-badge">
              <h4>Production Output</h4>
              <p>100% Calibrated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational pillars */}
      <section className="pillars-section">
        <div className="container">
          <h2 className="section-title reveal">Operational Principles</h2>
          <p className="section-subtitle reveal">
            The core framework that governs our production floor and ensures customer
            fulfillment across all distribution channels.
          </p>

          <div className="pillars-grid">
            <div className="pillar-card reveal">
              <div className="pillar-num">01</div>
              <h3>Precision Calibrations</h3>
              <p>
                We employ high-precision automated mold matrix systems to enforce uniform
                wall thickness across every millimeter of our PVC profiles.
              </p>
            </div>

            <div className="pillar-card reveal">
              <div className="pillar-num">02</div>
              <h3>Dielectric Integrity</h3>
              <p>
                Every single compounding formulation is thoroughly isolated and verified to
                offer continuous insulation resistance against heavy electrical currents.
              </p>
            </div>

            <div className="pillar-card reveal">
              <div className="pillar-num">03</div>
              <h3>Logistical Certainty</h3>
              <p>
                We streamline our storage allocation frameworks and heavy vehicle loading
                networks to preserve strict deadlines on multi-ton bulk site delivery
                drop-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational timeline */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title reveal">Operational Timeline</h2>
          <p className="section-subtitle reveal">
            Our consistent path of industrial scaling and capacity development over the
            years.
          </p>

          <div className="history-tree">
            <div className="history-node reveal">
              <div className="tree-pointer"></div>
              <div className="history-content">
                <span className="history-year">2024</span>
                <h3>Infrastructure Setup</h3>
                <p>
                  Established our core high-capacity production center inside South MIDC,
                  Solapur, setting up our initial specialized hot-extrusion lines.
                </p>
              </div>
            </div>

            <div className="history-node reveal">
              <div className="tree-pointer"></div>
              <div className="history-content">
                <span className="history-year">2025</span>
                <h3>Catalog Optimization</h3>
                <p>
                  Fully engineered our modular layout arrays, matching pricing schedules,
                  and scaling distribution of our flag-ship PVC Casing Patti series.
                </p>
              </div>
            </div>

            <div className="history-node reveal">
              <div className="tree-pointer"></div>
              <div className="history-content">
                <span className="history-year">2026</span>
                <h3>Digital Procurement Deployment</h3>
                <p>
                  Pushed our unified digital logistics interface live via web infrastructure
                  platforms to support seamless commercial wholesale tracking and volume
                  procurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Cursor sparkle & click burst effects
 * (same engine as your contact page, converted to a React hook)
 */
function useCursorEffects() {
  useEffect(() => {
    const mouseHandler = (e) => {
      if (Math.random() > 0.4) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;

        const customSize = Math.random() * 5 + 4;
        sparkle.style.width = `${customSize}px`;
        sparkle.style.height = `${customSize}px`;

        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 800);
      }
    };

    const clickHandler = (e) => {
      const sparkColors = ['#00FFCC', '#007BFF', '#FF3366', '#77B5FE', '#FFFFFF'];
      const particleCount = 12;

      for (let i = 0; i < particleCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'click-spark';

        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;

        const randomColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        const randomSize = Math.random() * 6 + 4;

        spark.style.backgroundColor = randomColor;
        spark.style.width = `${randomSize}px`;
        spark.style.height = `${randomSize}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80 + 30;
        const mx = `${Math.cos(angle) * distance}px`;
        const my = `${Math.sin(angle) * distance}px`;

        spark.style.setProperty('--mx', mx);
        spark.style.setProperty('--my', my);
        spark.style.boxShadow = `0 0 8px ${randomColor}, 0 0 15px ${randomColor}`;

        document.body.appendChild(spark);

        setTimeout(() => {
          spark.remove();
        }, 600);
      }
    };

    window.addEventListener('mousemove', mouseHandler);
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('mousemove', mouseHandler);
      window.removeEventListener('click', clickHandler);
    };
  }, []);
}

/**
 * Scroll reveal for `.reveal` elements
 */
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
