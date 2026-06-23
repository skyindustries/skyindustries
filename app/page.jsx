"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMoveTrail = (e) => {
      if (Math.random() > 0.4) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";

        const customSize = Math.random() * 5 + 4;
        sparkle.style.width = customSize + "px";
        sparkle.style.height = customSize + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMoveTrail);

    const handleMouseClickBurst = (e) => {
      const sparkColors = ["#00FFCC", "#007BFF", "#FF3366", "#77B5FE", "#FFFFFF"];
      const particleCount = 12;

      for (let i = 0; i < particleCount; i++) {
        const spark = document.createElement("div");
        spark.className = "click-spark";

        spark.style.left = e.clientX + "px";
        spark.style.top = e.clientY + "px";

        const randomColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        const randomSize = Math.random() * 6 + 4;

        spark.style.backgroundColor = randomColor;
        spark.style.width = randomSize + "px";
        spark.style.height = randomSize + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80 + 30;
        const mx = Math.cos(angle) * distance + "px";
        const my = Math.sin(angle) * distance + "px";

        spark.style.setProperty("--mx", mx);
        spark.style.setProperty("--my", my);
        spark.style.boxShadow = `0 0 8px ${randomColor}, 0 0 15px ${randomColor}`;

        document.body.appendChild(spark);

        setTimeout(() => {
          spark.remove();
        }, 600);
      }
    };

    window.addEventListener("click", handleMouseClickBurst);

    const canvas = document.getElementById("heroCanvas");
    let animationFrameId;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      let particlesArray = [];
      const numberOfParticles = 75;
      const mouse = { x: null, y: null, radius: 160 };

      const resizeCanvas = () => {
        if (canvas.parentElement) {
          canvas.width = canvas.parentElement.offsetWidth;
          canvas.height = canvas.parentElement.offsetHeight;
        }
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const handleCanvasMouseMove = (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      };

      window.addEventListener("mousemove", handleCanvasMouseMove);

      const handleCanvasMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
      };

      window.addEventListener("mouseleave", handleCanvasMouseLeave);

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 1;
          this.speedX = (Math.random() - 0.5) * 0.6;
          this.speedY = (Math.random() - 0.5) * 0.6;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
          if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

          if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.hypot(dx, dy);

            if (distance < mouse.radius) {
              let force = (mouse.radius - distance) / mouse.radius;
              this.x -= (dx / distance) * force * 2;
              this.y -= (dy / distance) * force * 2;
            }
          }
        }

        draw() {
          ctx.fillStyle = "rgba(0, 123, 255, 0.45)";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const initParticles = () => {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      };

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();

          for (let j = i; j < particlesArray.length; j++) {
            let dx = particlesArray[i].x - particlesArray[j].x;
            let dy = particlesArray[i].y - particlesArray[j].y;
            let distance = Math.hypot(dx, dy);

            if (distance < 110) {
              ctx.strokeStyle = `rgba(0, 86, 179, ${0.15 - (distance / 110) * 0.15})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
            }
          }
        }

        animationFrameId = requestAnimationFrame(animateParticles);
      };

      initParticles();
      animateParticles();

      return () => {
        window.removeEventListener("mousemove", handleMouseMoveTrail);
        window.removeEventListener("click", handleMouseClickBurst);
        window.removeEventListener("resize", resizeCanvas);
        window.removeEventListener("mousemove", handleCanvasMouseMove);
        window.removeEventListener("mouseleave", handleCanvasMouseLeave);
        cancelAnimationFrame(animationFrameId);
      };
    }

    const navLinks = document.querySelectorAll(".nav-links a");
    const handleNavLinkClick = () => {
      const menuToggle = document.getElementById("menu-toggle");
      if (menuToggle) menuToggle.checked = false;
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((element) => {
      revealOnScroll.observe(element);
    });

    const counters = document.querySelectorAll(".counter");
    const startCounters = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute("data-target"));
            let count = 0;
            const speed = target / 35;

            const updateCount = () => {
              if (count < target) {
                count = Math.ceil(count + speed);
                counter.innerText = count + (target === 100 ? "%" : "+");
                setTimeout(updateCount, 25);
              } else {
                counter.innerText = target + (target === 100 ? "%" : "+");
              }
            };

            updateCount();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((counter) => {
      startCounters.observe(counter);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveTrail);
      window.removeEventListener("click", handleMouseClickBurst);

      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });

      revealElements.forEach((element) => {
        revealOnScroll.unobserve(element);
      });

      counters.forEach((counter) => {
        startCounters.unobserve(counter);
      });
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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

          /* keep all your remaining styles exactly same */
          `}
      />
      
      <section className="hero">
        <canvas id="heroCanvas"></canvas>
        <div className="container">
          <h1>SKY INDUSTRIES</h1>
          <p>High-Capacity Manufacturing & Precision Global Supply of Premium Grade Electrical Raw Components.</p>
          <div className="hero-btns">
            <a href="products.html" className="btn btn-primary">Explore Products</a>
            <a href="contact.html" className="btn btn-outline">Request Commercial Quote</a>
          </div>
        </div>
      </section>

      <section className="motto-strip">
        <div className="container motto-content">
          <h2>BUILT FOR <span>SAFETY</span>. MADE TO <span>LAST</span>.</h2>
        </div>
      </section>

      <section className="metrics-section">
        <div className="container metrics-grid">
          <div className="metric-card">
            <h3 className="counter" data-target="100">0</h3>
            <p>Premium Grade Precision</p>
          </div>
          <div className="metric-card">
            <h3 className="counter" data-target="100">0</h3>
            <p>Industrial Safety Scale</p>
          </div>
          <div className="metric-card">
            <h3 className="counter" data-target="50">0</h3>
            <p>Commercial Dimensions</p>
          </div>
          <div className="metric-card">
            <h3>100%</h3>
            <p>On-Time Supply Match</p>
          </div>
        </div>
      </section>

      <section className="products-preview">
        <div className="container">
          <h2 className="section-title reveal">Our Product Architecture</h2>
          <p className="section-subtitle reveal">
            Engineered robustly to meet meticulous compliance requirements across residential, commercial, and massive public infrastructure layouts.
          </p>

          <div className="product-grid">
            <div className="product-card reveal">
              <div className="product-img">
                <img src="casing-patti.png" alt="PVC Casing (Patti)" />
              </div>
              <div className="product-info">
                <h3>PVC Casing (Patti)</h3>
                <p>High impact-resistant layout built custom-made for completely safe, neat, and flame-retardant interior electrical wiring setups.</p>
                <a href="products.html" className="product-link">View Pricing & Size Matrix →</a>
              </div>
            </div>

            <div className="product-card reveal">
              <div className="product-img">
                <img src="conduit-pipes.png" alt="Electrical Conduit Pipes" />
              </div>
              <div className="product-info">
                <h3>Electrical Conduit Pipes</h3>
                <p>Heavy-duty, structurally seamless conduits designed for premium insulation routing and architectural structural permanence.</p>
                <a href="products.html" className="product-link">Analyze Technical Specs →</a>
              </div>
            </div>

            <div className="product-card reveal">
              <div className="product-img">
                <img src="accessories.png" alt="Electrical Installation Accessories" />
              </div>
              <div className="product-info">
                <h3>Installation Accessories</h3>
                <p>An expansive range of matching couplings, robust bends, and long-lasting anchors for specialized fits.</p>
                <a href="products.html" className="product-link">Discover Full Catalog →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title reveal">Precision Manufacturing Stream</h2>
          <p className="section-subtitle reveal">
            How we maintain top world-class structural uniformity across millions of custom raw units every single month.
          </p>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="step-number">1</div>
              <h3>Raw Processing</h3>
              <p>Selection of clean, ultra-dense baseline granules for absolute raw material integrity.</p>
            </div>
            <div className="timeline-item reveal">
              <div className="step-number">2</div>
              <h3>Precision Extrusion</h3>
              <p>Advanced automated hot-mold profiling creates continuous architectural wall-thickness consistency.</p>
            </div>
            <div className="timeline-item reveal">
              <div className="step-number">3</div>
              <h3>Stress Verification</h3>
              <p>Aggressive break-testing runs ensure maximum structural resilience under high heat and sudden impact loads.</p>
            </div>
            <div className="timeline-item reveal">
              <div className="step-number">4</div>
              <h3>Bulk Distribution</h3>
              <p>Secure freight loading and fast logistics deployment directly delivered straight onto your construction site.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="assurance-banner reveal">
        <div className="assurance-graphic-side">
          <div className="equipment-module">
            <div className="equipment-wave"></div>
            <div className="equipment-bars">
              <div className="bar-line"></div>
              <div className="bar-line"></div>
              <div className="bar-line"></div>
            </div>
            <div className="equipment-nodes">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
            </div>
          </div>
        </div>
        <div className="assurance-text">
          <h2>Engineered For Maximum Safety Standards</h2>
          <p>
            Every single electrical raw component produced inside Sky Industries undergoes systematic dimension inspection. We understand that large scale infrastructure developments depend entirely on structural durability, hence we enforce pure engineering precision from chemical formulation to drop-off.
          </p>
          <div>
            <a href="about.html" className="btn btn-outline">Explore Our Factory Standards</a>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title reveal">The Sky Industries Advantage</h2>
          <p className="section-subtitle reveal">
            Why key electrical project leads and commercial bulk buyers trust us as their primary raw component distribution partner.
          </p>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">🛡️</div>
              <h3>Industrial Grade</h3>
              <p>Engineered strictly to survive aggressive physical wear, high structural stress, and long mechanical lifespans.</p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">⚡</div>
              <h3>Advanced Insulation</h3>
              <p>Formulated carefully using premium safety compounds to offer completely secure non-conductive property layers.</p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">💸</div>
              <h3>Wholesale Advantage</h3>
              <p>Direct from our regional production floor grids, giving major commercial pricing leverage over standard intermediaries.</p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">🚛</div>
              <h3>Mass Delivery Ready</h3>
              <p>Fully equipped to handle continuous, timed multi-ton drop distribution runs smoothly across major construction layouts.</p>
            </div>
          </div>
        </div>
      </section>

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
