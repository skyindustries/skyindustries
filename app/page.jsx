// app/page.jsx
'use client';

import { useEffect } from 'react';

export default function Page() {
  useCursorEffects();
  useScrollReveal();

  return (
    <>
      {/* Hero & core messaging from index.html */}
      <section className="page-banner home-banner">
        <div className="container">
          <h1>
            High-Capacity Manufacturing &amp; Precision Global Supply of Premium Grade
            Electrical Raw Components.
          </h1>
          <p>
            Engineered robustly to meet meticulous compliance requirements across residential,
            commercial, and massive public infrastructure layouts.
          </p>
        </div>
      </section>

      <section className="catalog-section home-section">
        <div className="container">
          {/* 4 core feature blocks exactly as in your copy */}
          <div className="feature-grid">
            <div className="feature-card">
              <h2>Premium Grade Precision</h2>
              <p>
                High impact-resistant layout built custom-made for completely safe, neat, and
                flame-retardant interior electrical wiring setups.
              </p>
              <a href="/products" className="feature-link">
                View Pricing &amp; Size Matrix →
              </a>
            </div>

            <div className="feature-card">
              <h2>Industrial Safety Scale</h2>
              <p>
                Heavy-duty, structurally seamless conduits designed for premium insulation routing
                and architectural structural permanence.
              </p>
              <a href="/products" className="feature-link">
                Analyze Technical Specs →
              </a>
            </div>

            <div className="feature-card">
              <h2>Commercial Dimensions</h2>
              <p>
                An expansive range of matching couplings, robust bends, and long-lasting anchors for
                specialized fits.
              </p>
              <a href="/products" className="feature-link">
                Discover Full Catalog →
              </a>
            </div>

            <div className="feature-card">
              <h2>On-Time Supply Match</h2>
              <p>
                Fully equipped to handle continuous, timed multi-ton drop distribution runs smoothly
                across major construction layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production integrity / structural uniformity block */}
      <section className="home-section production-section">
        <div className="container">
          <h2 className="section-title">
            How we maintain top world-class structural uniformity across millions of custom raw
            units every single month.
          </h2>

          <div className="grid-two">
            <div className="text-block reveal">
              <p>
                Selection of clean, ultra-dense baseline granules for absolute raw material
                integrity. Advanced automated hot-mold profiling creates continuous architectural
                wall-thickness consistency.
              </p>
              <p>
                Aggressive break-testing runs ensure maximum structural resilience under high heat
                and sudden impact loads. Secure freight loading and fast logistics deployment
                directly delivered straight onto your construction site.
              </p>
            </div>

            <div className="text-block reveal">
              <p>
                Engineered strictly to survive aggressive physical wear, high structural stress, and
                long mechanical lifespans. Formulated carefully using premium safety compounds to
                offer completely secure non-conductive property layers.
              </p>
              <p>
                Direct from our regional production floor grids, giving major commercial pricing
                leverage over standard intermediaries. Fully equipped to handle continuous, timed
                multi-ton drop distribution runs smoothly across major construction layouts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Sparkle & click burst effects
 * (reuse same engine as other pages so animations stay identical)
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
