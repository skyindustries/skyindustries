// app/products/page.jsx
'use client';

import { useEffect } from 'react';

export default function Page() {
  useCursorEffects();
  useScrollReveal();

  return (
    <>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Product Architecture</h1>
          <p>
            Commercial-grade PVC profiles engineered specifically for maximum dielectric safety
            and long structural lifespan parameters.
          </p>
        </div>
      </section>

      {/* Catalog cards + tables */}
      <section className="catalog-section">
        <div className="container">
          {/* PVC Casing Patti */}
          <div className="product-focus-card reveal">
            <div className="product-focus-img">
              <img src="/casing-patti.png" alt="PVC Casing Patti Lineup" />
            </div>
            <div className="product-focus-details">
              <div className="catalog-tag">Primary Production Line</div>
              <h2>PVC Casing (Patti)</h2>
              <p>
                Our flagship product line designed with high impact strength, premium lock-fitting
                mechanics, and completely flame-retardant elements. Specifically optimized for modern
                neat surface wiring requirements in large architectural complexes.
              </p>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Size (mm)</th>
                      <th>Pieces / Pack</th>
                      <th>Weight (Kg)</th>
                      <th>Material Composition &amp; Thermal Properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20 / 12</td>
                      <td>200 Pcs</td>
                      <td>28 kg</td>
                      <td>High-Impact Rigid FR-PVC | Non-Corrosive</td>
                    </tr>
                    <tr>
                      <td>25 / 12</td>
                      <td>100 Pcs</td>
                      <td>28 kg</td>
                      <td>High-Impact Rigid FR-PVC | UV Stabilized</td>
                    </tr>
                    <tr>
                      <td>25 / 16</td>
                      <td>100 Pcs</td>
                      <td>28 kg</td>
                      <td>Heavy-Duty Insulation Compound</td>
                    </tr>
                    <tr>
                      <td>30 / 15</td>
                      <td>100 Pcs</td>
                      <td>28 kg</td>
                      <td>Self-Extinguishing Polymer Matrix</td>
                    </tr>
                    <tr>
                      <td>32 / 12</td>
                      <td>100 Pcs</td>
                      <td>28 kg</td>
                      <td>Reinforced Wall Structure | Anti-Aging</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Conduit pipes */}
          <div className="product-focus-card reveal">
            <div className="product-focus-img">
              <img src="/conduit-pipes.png" alt="Electrical Conduit Pipes Lineup" />
            </div>
            <div className="product-focus-details">
              <div className="catalog-tag">Heavy Duty Insulation</div>
              <h2>Electrical Conduit Pipes</h2>
              <p>
                Engineered structurally seamless with extra smooth interior wall layers to
                significantly reduce pull friction during wiring. Highly stress-tested against
                compression loads, bending fractures, and extreme temperature conditions across
                heavy industrial environments.
              </p>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Diameter Range</th>
                      <th>Wall Thickness Spec</th>
                      <th>Standard Colors</th>
                      <th>Application Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>19 mm / 20 mm</td>
                      <td>Light / Medium / Heavy</td>
                      <td>Ivory White / Black / Grey</td>
                      <td>Concealed &amp; Surface Wiring Layouts</td>
                    </tr>
                    <tr>
                      <td>25 mm</td>
                      <td>Medium / Heavy Duty</td>
                      <td>Ivory White / Grey</td>
                      <td>Commercial Building Grids &amp; Office Fitouts</td>
                    </tr>
                    <tr>
                      <td>32 mm / 40 mm</td>
                      <td>Industrial Heavy Wall</td>
                      <td>Dark Grey / Custom White</td>
                      <td>Heavy Public Infrastructure Development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="product-focus-card reveal">
            <div className="product-focus-img">
              <img src="/accessories.png" alt="Electrical Installation Fittings" />
            </div>
            <div className="product-focus-details">
              <div className="catalog-tag">Precision Accessories</div>
              <h2>Installation Accessories</h2>
              <p>
                A full complementary engineering lineup of structural couplings, heavy multi-way
                deep surface junction boxes, precision bends, and structural clips. Built using
                matching polymer compounds to guarantee uniform durability across the entire
                infrastructure network layout.
              </p>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Accessory Type</th>
                      <th>Compatibility Matrix</th>
                      <th>Mechanical Connection</th>
                      <th>Safety Certification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Precision Bends</td>
                      <td>Fits 19mm, 20mm, 25mm Pipes</td>
                      <td>Smooth Friction Slip-On Fit</td>
                      <td>Flame-Retardant Certified</td>
                    </tr>
                    <tr>
                      <td>Junction Boxes</td>
                      <td>1-Way to 4-Way Surface Outlets</td>
                      <td>Deep Box Internal Threading</td>
                      <td>High Dielectric Strength Insulation</td>
                    </tr>
                    <tr>
                      <td>Couplings &amp; Clips</td>
                      <td>All Standard Profile Adaptations</td>
                      <td>Heavy Snap-Lock Mechanism</td>
                      <td>Impact-Resistant Structural Polymer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical info hub */}
      <section className="specs-info-section">
        <div className="container">
          <h2 className="section-title reveal">Technical Information Hub</h2>
          <p className="section-subtitle reveal">
            Our material blueprints are calibrated to surpass strict global testing benchmarks for
            structural endurance and electrical isolation.
          </p>

          <div className="info-grid">
            <div className="info-card reveal">
              <div className="info-icon">🔥</div>
              <h3>Fire Retardant Class</h3>
              <p>
                Formulated with self-extinguishing compounds that halt flame propagation within
                seconds of ignition sources being removed.
              </p>
            </div>

            <div className="info-card reveal">
              <div className="info-icon">⚡</div>
              <h3>Dielectric Strength</h3>
              <p>
                Provides highly secure non-conductive property layers to handle voltage routing
                safety parameters across continuous workloads.
              </p>
            </div>

            <div className="info-card reveal">
              <div className="info-icon">🔨</div>
              <h3>Mechanical Resilience</h3>
              <p>
                Aggressive break-testing runs ensure maximum structural profile retention during
                bending maneuvers and hard drop stresses.
              </p>
            </div>

            <div className="info-card reveal">
              <div className="info-icon">🧪</div>
              <h3>Chemical &amp; Acid Shield</h3>
              <p>
                Immune to concrete structural moisture degradation, alkaline compounds, and regional
                soil atmospheric aging variations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Cursor sparkle & click burst effects
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
