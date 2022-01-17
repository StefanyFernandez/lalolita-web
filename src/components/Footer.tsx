import React from 'react';
/* import Cat from './Cat'; */

const Footer: React.FC = () => (
  <footer>
    <div className="box">
      {/* <Cat /> */}
      <p>
        <span>© 2022 Lalolita Design - </span>
        <a title="Email us" href="mailto:info@lalolita.design">
          info@lalolita.design
        </a>
      </p>
      <ul>
        <li>
          <a
            target="_blank"
            title="Go to Behance"
            rel="noreferrer"
            href="https://www.behance.net/tefyfernandez"
          >
            Behance
          </a>
        </li>
        {/* <li>
          <a
            target="_blank"
            title="Go to Dribbble"
            rel="noreferrer"
            href="https://dribbble.com/tefyfernandez"
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            target="_blank"
            title="Go to Instagram"
            rel="noreferrer"
            href="https://www.instagram.com/lalolita.design/"
          >
            Instagram
          </a>
        </li> */}
        <li>
          <a
            target="_blank"
            title="Go to LinkedIn"
            rel="noreferrer"
            href="https://www.linkedin.com/in/stefanyfernandezsifontes/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
