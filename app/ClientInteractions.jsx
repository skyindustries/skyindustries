"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    // --- 1. BLUE SPARKLING CURSOR TRAIL ENGINE ---
    const handleMouseMove = (e) => {
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

    // --- 2. MULTI-COLORED CLICK BURST PARTICLE ENGINE ---
    const handleClick = (e) => {
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // --- 3. SCROLL REVEAL VIEW INITIATOR ---
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

    // --- 4. CLOSE MOBILE NAV ON LINK CLICK ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const closeNav = () => {
      const toggle = document.getElementById('menu-toggle');
      if(toggle) toggle.checked = false;
    };
    navLinks.forEach(link => link.addEventListener('click', closeNav));

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      navLinks.forEach(link => link.removeEventListener('click', closeNav));
      revealElements.forEach(element => revealOnScroll.unobserve(element));
    };
  }, [pathname]); // Re-run effect when the route changes to re-bind intersection observers

  return null;
}
