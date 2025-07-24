"use client";

import Link from 'next/link';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-custom">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand fw-bold">JOKIIN-AJA</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <div className="navbar-nav ms-auto align-items-center">
            <Link href="/" legacyBehavior><a className="nav-link mx-2">Home</a></Link>
            <Link href="/services" legacyBehavior><a className="nav-link mx-2">Layanan</a></Link>
            <Link href="/how-to-order" legacyBehavior><a className="nav-link mx-2">Cara Pesan</a></Link>
            <Link href="/contact" legacyBehavior><a className="nav-link mx-2">Kontak</a></Link>
            <Link href="/how-to-order" legacyBehavior>
              <a className="btn btn-custom ms-2">Pesan Sekarang</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
