'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { href: '#features', label: '회사소개' },
    { href: '#process', label: '설치 과정' },
    { href: '#pricing', label: '가격 안내' },
    { href: '#gallery', label: '갤러리' },
    { href: '#contact', label: '문의' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  return (
    <>
    <meta name="google-site-verification" content="YeCbmLlS4ajVmrvbIY0994SkyQ2_W1gi9MwNbgkPBGY" />
    <meta name="naver-site-verification" content="f4edc4327dd7add6cb6966dcc8e839bde6deb136" />
     <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-4 sm:px-10 py-5">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
          </div>
          <h2 className="text-[#111418] text-2xl font-bold leading-tight tracking-[-0.015em]">
            진명에어컨 이전설치
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            {links.map((link) => (
              <Link key={link.label} className="text-[#111418] text-lg font-medium leading-normal hover:font-bold hover:underline hover:decoration-lime-500 hover:underline-offset-4" href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#111418] text-4xl font-medium leading-normal hover:font-bold hover:underline hover:decoration-lime-500 hover:underline-offset-4"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

