export const metadata = {
  title: 'Sky Industries – Premium Electrical Raw Components',
  description:
    'High-capacity manufacturing and precision supply of PVC casing, conduits, and accessories from South MIDC, Solapur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <header className="border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="font-semibold tracking-wide">
              SKY INDUSTRIES
            </div>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:text-blue-700">
                Home
              </a>
              <a href="/about" className="hover:text-blue-700">
                About
              </a>
              <a href="/products" className="hover:text-blue-700">
                Products
              </a>
              <a href="/contacts" className="hover:text-blue-700">
                Contacts
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="mt-10 border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Sky Industries, South MIDC, Solapur.
          </div>
        </footer>
      </body>
    </html>
  );
}
