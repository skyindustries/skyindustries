// app/contacts/page.jsx
'use client';

import { useEffect } from 'react';

export default function Page() {
  useCursorEffects();
  useScrollReveal();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const overlay = document.getElementById('formSuccessOverlay');
    if (overlay) {
      overlay.classList.add('triggered');
    }
  };

  return (
    <>
      {/* Page banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Procurement Gateway</h1>
          <p>
            Connect with our corporate supply department directly to establish logistics routing
            schedules or clear massive wholesale price brackets.
          </p>
        </div>
      </section>

      {/* Contact hub grid */}
      <section className="contact-hub-section">
        <div className="container hub-grid">
          {/* Left column: cards */}
          <div className="contact-cards-column reveal">
            {/* WhatsApp card */}
            <a
              href="https://wa.me/918830597554?text=Hello%20Sky%20Industries,%20I%20am%20interested%20in%20a%20wholesale%20commercial%20quote%20for%20electrical%20raw%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="info-card whatsapp-card"
            >
              <div className="card-icon">💬</div>
              <div className="card-content">
                <h3>WhatsApp Business Desk</h3>
                <p>
                  Click to open an instant message channel directly with our MIDC factory operations
                  desk.
                </p>
                <span className="whatsapp-action-link">Start Instant Chat →</span>
              </div>
            </a>

            {/* Address card */}
            <div className="info-card">
              <div className="card-icon">📍</div>
              <div className="card-content">
                <h3>Regional Production Complex</h3>
                <p>
                  610, Godutai Vidi, Gharkul Parodekar, South MIDC, Solapur, Maharashtra – 413006,
                  India
                </p>
              </div>
            </div>

            {/* Phone card */}
            <a href="tel:+918830597554" className="info-card">
              <div className="card-icon">📞</div>
              <div className="card-content">
                <h3>Direct Sourcing Line</h3>
                <p>+91 8830597554</p>
              </div>
            </a>

            {/* Social placeholder card */}
            <div className="info-card social-link-card">
              <div className="card-content">
                <h3>Digital Network Hubs</h3>
                <p>
                  Connect with our corporate social channels for industrial updates and product
                  rollouts.
                </p>
              </div>
              <div className="social-link-tree">
                <button
                  type="button"
                  className="social-btn instagram"
                  onClick={() =>
                    alert('Instagram profile linkage configuration coming soon!')
                  }
                >
                  Instagram
                </button>
                <button
                  type="button"
                  className="social-btn linkedin"
                  onClick={() =>
                    alert('LinkedIn corporate hub profile linkage coming soon!')
                  }
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Right column: form panel */}
          <div className="form-panel reveal">
            <div className="success-overlay" id="formSuccessOverlay">
              <div className="success-icon">✓</div>
              <h3>Transmission Verified</h3>
              <p>
                Your institutional RFQ profile requirements have been successfully dispatched onto
                our South MIDC logistics routing office desk.
              </p>
            </div>

            <form id="procurementForm" onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="compName">Commercial Entity Name</label>
                  <input
                    type="text"
                    id="compName"
                    required
                    placeholder="e.g., Infrastructure Ltd"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="contactName">Procurement Lead Name</label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    placeholder="e.g., Rahul Sharma"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phoneNum">Direct Contact Line</label>
                  <input
                    type="tel"
                    id="phoneNum"
                    required
                    placeholder="e.g., +91 98765 43210"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="volRequest">Estimated Package Volume</label>
                  <input
                    type="text"
                    id="volRequest"
                    placeholder="e.g., 500 Packs / Custom Truckload"
                  />
                </div>

                <div className="input-group full-width">
                  <label htmlFor="msgDetails">
                    Batch Dimensional Specifications &amp; Schedule Requirements
                  </label>
                  <textarea
                    id="msgDetails"
                    required
                    placeholder="Detail your required PVC sizing parameters, custom length adjustments, and destination site loading drop dates..."
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Disptach RFQ Specification Profile
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Cursor sparkle & click burst effects
 * (ported from your original script into a React hook)
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
