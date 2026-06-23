import '../styles/globals.css';
import Link from 'next/link';
import Script from 'next/script';
import ClientInteractions from './ClientInteractions';

export const metadata = {
  title: 'Sky Industries | Premium Electrical Raw Materials',
  description: 'High-Capacity Manufacturing & Precision Global Supply of Premium Grade Electrical Raw Components.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container nav-container">
            <div className="logo-block">
              <img src="/logo.png" alt="Sky Industries Logo Icon" />
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
                {/* Note: In Next.js, active states are typically handled via usePathname in a client component, 
                    but standard routing works perfectly here to preserve your exact design structure. */}
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contacts">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Page specific content injects here */}
        <main>{children}</main>

        <footer>
          <div className="container footer-grid">
            <div className="footer-about">
              <h3>Sky Industries</h3>
              <p>Trusted manufacturers and nationwide wholesale suppliers of high-grade industrial electrical raw components engineered safely for residential, commercial, and macro infrastructure layouts.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Navigation Hub</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contacts">Contact</Link></li>
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

        {/* Client-side logic for cursors and scroll reveals */}
        <ClientInteractions />
      </body>
    </html>
  );
}
