import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface HeaderProps {
  aboutActive?: boolean;
}

const Header: React.FC<HeaderProps> = ({ aboutActive }) => (
  <header>
    <div className="box">
      <Link href="/">
        <a href="/" title="Home">
          <h1>
            <Logo />
          </h1>
        </a>
      </Link>
      <nav>
        <Link href="/about">
          <a
            href="/about"
            title="Go to about"
            className={aboutActive ? 'active' : ''}
          >
            About
          </a>
        </Link>
        {/* <Link href="/work">
          <a href="/work" title="Go to work">
            Work
          </a>
        </Link> */}
        <a
          href="https://drive.google.com/drive/folders/1DdiODWVebV52cFL5o17qGW_pEiF3GtAU?usp=sharing"
          title="Go to works"
          target="_blank"
          rel="noreferrer"
        >
          Work
        </a>
        {/* <Link href="/contact">
          <a href="/contact" title="Go to contact">
            Contact
          </a>
        </Link> */}
        <a title="Contact" href="mailto:info@lalolita.design">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
