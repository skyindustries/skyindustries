"use client";

import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // --- 0. BLUE SPARKLING CURSOR TRAIL ENGINE ---
    const handleMouseMoveTrail = (e: MouseEvent) => {
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
    window.addEventListener('mousemove', handleMouseMoveTrail);

    // --- 0.1 NEW: MULTI-COLORED CLICK BURST PARTICLE ENGINE ---
    const handleMouseClickBurst = (e: MouseEvent) => {
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
    window.addEventListener('click', handleMouseClickBurst);

    // Close dynamic mobile nav panel automatically if user selects a link
    const navLinks = document.querySelectorAll('.nav-links a');
    const handleLinkClick = () => {
      const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
      if (menuToggle) menuToggle.checked = false;
    };
    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // --- 1. INTERACTIVE INTERIOR CANVAS MOLECULAR MATRIX ---
    const canvas = document.getElementById('heroCanvas') as HTMLCanvasElement;
    let animationFrameId: number;
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let particlesArray: any[] = [];
        const numberOfParticles = 75;
        const mouse = { x: null as number | null, y: null as number | null, radius: 160 };

        const resizeCanvas = () => {
          if (canvas.parentElement) {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
          }
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleCanvasMouseMove = (event: MouseEvent) => {
          const rect = canvas.getBoundingClientRect();
          mouse.x = event.clientX - rect.left;
          mouse.y = event.clientY - rect.top;
        };
        window.addEventListener('mousemove', handleCanvasMouseMove);

        const handleCanvasMouseLeave = () => {
          mouse.x = null;
          mouse.y = null;
        };
        window.addEventListener('mouseleave', handleCanvasMouseLeave);

        class Particle {
          x: number;
          y: number;
          size: number;
          speedX: number;
          speedY: number;

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
            if (ctx) {
              ctx.fillStyle = 'rgba(0, 123, 255, 0.45)';
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        const initParticles = () => {
          particlesArray = [];
          for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
          }
        };
        initParticles();

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
                ctx.strokeStyle = `rgba(0, 86, 179, ${0.15 - (distance/110)*0.15})`;
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
        animateParticles();
      }
    }

    // --- 2. SCROLL VIEW REVEAL INITIATOR ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(element => { revealOnScroll.observe(element); });

    // --- 3. LIVE PERFORMANCE METRICS COUNT TICKER ---
    const counters = document.querySelectorAll('.counter');
    const startCounters = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.getAttribute('data-target') || '0');
          let count = 0;
          const speed = target / 35;

          const updateCount = () => {
            if(count < target) {
              count = Math.ceil(count + speed);
              counter.innerText = count + (target === 100 ? '%' : '+');
              setTimeout(updateCount, 25);
            } else {
              counter.innerText = target + (target === 100 ? '%' : '+');
            }
          };
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(counter => { startCounters.observe(counter); });

    // Cleanup listeners and animations on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveTrail);
      window.removeEventListener('click', handleMouseClickBurst);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      cancelAnimationFrame(animationFrameId);
      revealOnScroll.disconnect();
      startCounters.disconnect();
    };
  }, []);

  return (
    <>
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

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: 0.6s;
        }

        .btn-primary:hover::before {
            left: 100%;
        }

        .btn-primary:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0, 86, 179, 0.6);
        }

        .btn-outline {
            border: 2px solid rgba(255,255,255,0.8);
            color: var(--white);
            background: transparent;
        }

        .btn-outline:hover {
            background-color: var(--white);
            color: var(--primary-blue);
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 30px rgba(255, 255, 255, 0.25);
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
            width: 0;
            height: 4px;
            background: var(--gradient-blue);
            border-radius: 4px;
            transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.active .section-title::after {
            width: 120px;
        }

        .section-subtitle {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 70px;
            font-size: 1.15rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 400;
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
            position: relative;
        }

        .logo-block {
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 1010;
        }

        .logo-block img {
            height: 70px;
            width: auto;
            transition: var(--transition-smooth);
        }

        .logo-block:hover img {
            transform: rotate(-5deg) scale(1.05);
        }

        .brand-title {
            font-size: 1.7rem;
            font-weight: 800;
            color: #002855;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            position: relative;
        }

        .brand-title span {
            color: var(--primary-blue);
        }

        .nav-menu-wrapper {
            display: flex;
            align-items: center;
        }

        #menu-toggle {
            display: none;
        }

        .hamburger-label {
            display: none;
            cursor: pointer;
            padding: 10px;
            z-index: 1010;
        }

        .hamburger-label .bar {
            display: block;
            width: 28px;
            height: 3px;
            margin: 5px auto;
            background-color: #002855;
            transition: all 0.4s ease-in-out;
            border-radius: 2px;
        }

        .nav-links {
            display: flex;
            gap: 40px;
        }

        .nav-links a {
            font-weight: 700;
            color: #2A2C2E;
            font-size: 0.95rem;
            transition: var(--transition-smooth);
            position: relative;
            padding: 10px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .nav-links a:hover, .nav-links a.active {
            color: var(--primary-blue);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background-color: var(--primary-blue);
            transition: var(--transition-smooth);
            border-radius: 4px;
        }

        .nav-links a:hover::after, .nav-links a.active::after {
            width: 100%;
        }

        .hero {
            background: linear-gradient(135deg, #050E22 0%, #0D1F42 50%, #020714 100%);
            color: var(--white);
            padding: 240px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        #heroCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: all;
        }

        .hero .container {
            position: relative;
            z-index: 5;
        }

        .hero h1 {
            font-size: 4.8rem;
            font-weight: 900;
            letter-spacing: 3px;
            margin-bottom: 25px;
            background: var(--metallic-glow);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: textShine 4s linear infinite, revealDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero p {
            font-size: 1.5rem;
            max-width: 850px;
            margin: 0 auto 50px auto;
            color: #C0D6F2;
            font-weight: 300;
            animation: revealUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-btns {
            display: flex;
            justify-content: center;
            gap: 25px;
            animation: revealUp 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .motto-strip {
            background-color: var(--dark-grey);
            color: var(--white);
            padding: 40px 0;
            text-align: center;
            border-bottom: 5px solid var(--primary-blue);
            position: relative;
            z-index: 10;
        }

        .motto-content h2 {
            font-size: 2.2rem;
            letter-spacing: 4px;
            font-weight: 800;
        }

        .motto-content span {
            color: var(--accent-blue);
            text-shadow: 0 0 20px rgba(0,123,255,0.6);
        }

        .metrics-section {
            padding: 90px 0;
            background-color: var(--white);
            position: relative;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 40px;
            text-align: center;
        }

        .metric-card {
            padding: 30px;
            background: #F9FAFC;
            border-radius: 16px;
            transition: var(--transition-smooth);
            border: 1px solid rgba(0,0,0,0.02);
        }

        .metric-card:hover {
            transform: translateY(-8px) scale(1.03);
            background: var(--white);
            box-shadow: 0 20px 40px rgba(0,86,179,0.06);
            border-color: rgba(0,86,179,0.1);
        }

        .metric-card h3 {
            font-size: 3.5rem;
            color: var(--primary-blue);
            font-weight: 900;
            margin-bottom: 5px;
        }

        .metric-card p {
            color: var(--text-muted);
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        .products-preview {
            padding: 120px 0;
            background-color: var(--light-bg);
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 40px;
        }

        .product-card {
            background: var(--white);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.02);
            transition: var(--transition-smooth);
            border: 1px solid rgba(0,0,0,0.01);
        }

        .product-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.08);
        }

        .product-img {
            height: 280px;
            background: linear-gradient(135deg, #FAFCFF 0%, #E9EFF8 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
        }

        .product-img img {
            height: 75%;
            width: auto;
            transition: var(--transition-smooth);
        }

        .product-card:hover .product-img img {
            transform: scale(1.12) rotate(2deg);
        }

        .product-info {
            padding: 40px;
        }

        .product-info h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark-grey);
            font-weight: 800;
        }

        .product-info p {
            color: var(--text-muted);
            font-size: 0.98rem;
            margin-bottom: 30px;
            height: 75px;
            overflow: hidden;
        }

        .product-link {
            color: var(--primary-blue);
            font-weight: 700;
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: var(--transition-smooth);
        }

        .product-card:hover .product-link {
            color: var(--accent-blue);
            transform: translateX(8px);
        }

        .process-section {
            padding: 120px 0;
            background-color: var(--white);
        }

        .timeline {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 40px;
            margin-top: 70px;
        }

        .timeline-item {
            text-align: center;
            padding: 40px 30px;
            background: var(--light-bg);
            border-radius: 20px;
            transition: var(--transition-smooth);
            position: relative;
            border-bottom: 4px solid transparent;
        }

        .timeline-item:hover {
            transform: translateY(-10px);
            background: var(--white);
            box-shadow: 0 25px 50px rgba(0,86,179,0.08);
            border-bottom-color: var(--primary-blue);
        }

        .step-number {
            width: 70px;
            height: 70px;
            background: var(--gradient-blue);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            font-weight: 800;
            margin: 0 auto 30px auto;
            box-shadow: 0 8px 25px rgba(0,86,179,0.3);
            transition: var(--transition-smooth);
        }

        .timeline-item:hover .step-number {
            transform: scale(1.1) rotateY(360deg);
        }

        .timeline-item h3 {
            font-size: 1.35rem;
            color: var(--dark-grey);
            margin-bottom: 15px;
            font-weight: 800;
        }

        .timeline-item p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .assurance-banner {
            display: flex;
            background-color: #040A18;
            color: var(--white);
            min-height: 520px;
            flex-wrap: wrap;
            position: relative;
            overflow: hidden;
        }

        .assurance-graphic-side {
            flex: 1 1 600px;
            min-height: 400px;
            background-image: 
                linear-gradient(rgba(0, 86, 179, 0.15) 2px, transparent 2px),
                linear-gradient(90deg, rgba(0, 86, 179, 0.15) 2px, transparent 2px);
            background-size: 40px 40px;
            background-color: #030712;
            position: relative;
            animation: technicalFlow 25s linear infinite;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .equipment-module {
            width: 260px;
            height: 320px;
            background: linear-gradient(135deg, #102040 0%, #060B18 100%);
            border: 3px solid var(--primary-blue);
            border-radius: 12px;
            position: relative;
            box-shadow: 0 0 40px rgba(0, 86, 179, 0.5), inset 0 0 20px rgba(0, 123, 255, 0.3);
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            animation: floatModule 4s ease-in-out infinite alternate;
            z-index: 10;
        }

        .equipment-wave {
            width: 100%;
            height: 60px;
            border: 1px solid rgba(0, 123, 255, 0.3);
            background: rgba(0,0,0,0.4);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
        }

        .equipment-wave::after {
            content: '';
            position: absolute;
            width: 200%;
            height: 100%;
            background: repeating-linear-gradient(90deg, transparent, transparent 10px, var(--accent-blue) 11px, var(--accent-blue) 13px, transparent 14px);
            opacity: 0.7;
            top: 0;
            left: 0;
            animation: waveFlow 1.5s linear infinite;
        }

        .equipment-nodes {
            display: flex;
            justify-content: space-around;
            margin: 15px 0;
        }

        .node {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: #0A152A;
            border: 2px solid #204080;
            position: relative;
        }

        .node::before {
            content: '';
            position: absolute;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #00FFCC;
            box-shadow: 0 0 12px #00FFCC;
            animation: pulseNode 1s infinite alternate;
        }

        .node:nth-child(2)::before {
            background-color: #007BFF;
            box-shadow: 0 0 12px #007BFF;
            animation-delay: 0.3s;
        }

        .node:nth-child(3)::before {
            background-color: #FF3366;
            box-shadow: 0 0 12px #FF3366;
            animation-delay: 0.6s;
        }

        .equipment-bars {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: center;
        }

        .bar-line {
            width: 100%;
            height: 8px;
            background: #152B54;
            border-radius: 4px;
            position: relative;
            overflow: hidden;
        }

        .bar-line::after {
            content: '';
            position: absolute;
            height: 100%;
            width: 30%;
            background: linear-gradient(90deg, transparent, #00FFCC, transparent);
            left: -30%;
            animation: pulseBar 2s infinite linear;
        }

        .bar-line:nth-child(2)::after { animation-delay: 0.7s; }
        .bar-line:nth-child(3)::after { animation-delay: 1.4s; }

        .assurance-graphic-side::before {
            content: '';
            position: absolute;
            width: 80%;
            height: 80%;
            top: 10%;
            left: 10%;
            border: 2px dashed rgba(0,123,255,0.2);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation: morphGraphic 12s linear infinite alternate;
        }

        .assurance-text {
            flex: 1 1 600px;
            padding: 100px 8%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            z-index: 5;
        }

        .assurance-text h2 {
            font-size: 2.6rem;
            margin-bottom: 25px;
            font-weight: 800;
        }

        .assurance-text p {
            color: #A9B9D1;
            margin-bottom: 40px;
            font-size: 1.15rem;
        }

        .why-choose-us {
            background-color: var(--light-bg);
            padding: 120px 0;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
        }

        .feature-card {
            background: var(--white);
            padding: 50px 40px;
            text-align: center;
            border-radius: 20px;
            box-shadow: 0 4px 30px rgba(0,0,0,0.01);
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: var(--gradient-blue);
            transform: scaleX(0);
            transition: var(--transition-smooth);
            transform-origin: center;
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 55px rgba(0,0,0,0.06);
        }

        .feature-icon {
            font-size: 3.5rem;
            color: var(--primary-blue);
            margin-bottom: 25px;
            display: inline-block;
            transition: var(--transition-smooth);
        }

        .feature-card:hover .feature-icon {
            transform: scale(1.2);
        }

        .feature-card h3 {
            font-size: 1.45rem;
            margin-bottom: 15px;
            color: var(--dark-grey);
            font-weight: 800;
        }

        footer {
            background-color: var(--dark-grey);
            color: #92979B;
            padding: 100px 0 40px 0;
            font-size: 0.95rem;
            border-top: 6px solid #141619;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 60px;
            margin-bottom: 60px;
        }

        .footer-about h3, .footer-links h3, .footer-contact h3 {
            color: var(--white);
            font-size: 1.4rem;
            margin-bottom: 30px;
            font-weight: 800;
        }

        .footer-links ul li {
            margin-bottom: 14px;
        }

        .footer-links ul li a {
            transition: var(--transition-smooth);
        }

        .footer-links ul li a:hover {
            color: var(--white);
            padding-left: 12px;
        }

        .footer-contact p {
            margin-bottom: 18px;
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .footer-bottom {
            border-top: 1px solid #232629;
            padding-top: 40px;
            text-align: center;
            font-size: 0.88rem;
        }

        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        @keyframes textShine {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }

        @keyframes revealDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes revealUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes technicalFlow {
            from { background-position: 0 0; }
            to { background-position: 400px 400px; }
        }

        @keyframes floatModule {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes waveFlow {
            0% { left: 0; }
            100% { left: -100%; }
        }

        @keyframes pulseNode {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
        }

        @keyframes pulseBar {
            0% { left: -30%; }
            100% { left: 100%; }
        }

        @keyframes morphGraphic {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
            100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: rotate(360deg); }
        }

        @media (max-width: 1200px) {
            .hero h1 { font-size: 4rem; }
        }

        @media (max-width: 992px) {
            .hero h1 { font-size: 3.4rem; }
            .assurance-text { padding: 70px 6%; }
            
            .hamburger-label {
                display: block;
            }

            .nav-links {
                position: fixed;
                top: 86px; 
                left: -100%;
                width: 100%;
                height: calc(100vh - 86px);
                background-color: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(15px);
                flex-direction: column;
                align-items: center;
                gap: 30px;
                padding-top: 50px;
                transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                box-shadow: 0 15px 30px rgba(0,0,0,0.05);
            }

            .nav-links a {
                font-size: 1.2rem;
                width: 100%;
                text-align: center;
                padding: 15px 0;
            }

            #menu-toggle:checked ~ .nav-links {
                left: 0;
            }

            #menu-toggle:checked ~ .hamburger-label .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
                background-color: var(--primary-blue);
            }
            #menu-toggle:checked ~ .hamburger-label .bar:nth-child(2) {
                opacity: 0;
            }
            #menu-toggle:checked ~ .hamburger-label .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
                background-color: var(--primary-blue);
            }
        }

        @media (max-width: 768px) {
            .logo-block img { height: 55px; }
            .brand-title { font-size: 1.3rem; letter-spacing: 0.5px; }
            .hero h1 { font-size: 2.5rem; letter-spacing: 1px; }
            .hero p { font-size: 1.15rem; }
            .hero-btns { flex-direction: column; align-items: center; }
            .btn { width: 100%; max-width: 320px; }
            .section-title { font-size: 2.2rem; }
            .motto-content h2 { font-size: 1.5rem; letter-spacing: 1px; }
            .metric-card h3 { font-size: 2.8rem; }
            .assurance-text h2 { font-size: 2rem; }
        }
      ` }} />

      <header>
        <div className="container nav-container">
          <div className="logo-block">
            <img src="logo.png" alt="Sky Industries Logo Icon" />
            <div className="brand-title">Sky <span>Industries</span></div>
          </div>
          
          <nav className="nav-menu-wrapper">
            <input type="checkbox" id="menu-toggle" />
            
            <label htmlFor="menu-toggle" className="hamburger-label">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </label>

            <ul className="nav-links">
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <canvas id="heroCanvas"></canvas>
        <div className="container">
          <h1>SKY INDUSTRIES</h1>
          <p>High-Capacity Manufacturing & Precision Global Supply of Premium Grade Electrical Raw Components.</p>
          <div className="hero-btns">
            <a href="/products" className="btn btn-primary">Explore Products</a>
            <a href="/contact" className="btn btn-outline">Request Commercial Quote</a>
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
          <p className="section-subtitle reveal">Engineered robustly to meet meticulous compliance requirements across residential, commercial, and massive public infrastructure layouts.</p>
          
          <div className="product-grid">
            <div className="product-card reveal">
              <div className="product-img">
                <img src="casing-patti.png" alt="PVC Casing (Patti)" />
              </div>
              <div className="product-info">
                <h3>PVC Casing (Patti)</h3>
                <p>High impact-resistant layout built custom-made for completely safe, neat, and flame-retardant interior electrical wiring setups.</p>
                <a href="/products" className="product-link">View Pricing & Size Matrix →</a>
              </div>
            </div>

            <div className="product-card reveal">
              <div className="product-img">
                <img src="conduit-pipes.png" alt="Electrical Conduit Pipes" />
              </div>
              <div className="product-info">
                <h3>Electrical Conduit Pipes</h3>
                <p>Heavy-duty, structurally seamless conduits designed for premium insulation routing and architectural structural permanence.</p>
                <a href="/products" className="product-link">Analyze Technical Specs →</a>
              </div>
            </div>

            <div className="product-card reveal">
              <div className="product-img">
                <img src="accessories.png" alt="Electrical Installation Accessories" />
              </div>
              <div className="product-info">
                <h3>Installation Accessories</h3>
                <p>An expansive range of matching couplings, robust bends, and long-lasting anchors for specialized fits.</p>
                <a href="/products" className="product-link">Discover Full Catalog →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title reveal">Precision Manufacturing Stream</h2>
          <p className="section-subtitle reveal">How we maintain top world-class structural uniformity across millions of custom raw units every single month.</p>
          
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
          <p>Every single electrical raw component produced inside Sky Industries undergoes systematic dimension inspection. We understand that large scale infrastructure developments depend entirely on structural durability, hence we enforce pure engineering precision from chemical formulation to drop-off.</p>
          <div>
            <a href="/about" className="btn btn-outline">Explore Our Factory Standards</a>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title reveal">The Sky Industries Advantage</h2>
          <p className="section-subtitle reveal">Why key electrical project leads and commercial bulk buyers trust us as their primary raw component distribution partner.</p>
          
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
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
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
          <p>© 2026 Sky Industries. All Rights Reserved. | Infrastructure Built For Safety. Made To Last.</p>
        </div>
      </footer>
    </>
  );
}
