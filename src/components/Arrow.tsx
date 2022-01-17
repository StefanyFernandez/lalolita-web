import React from 'react';

const Arrow: React.FC = () => (
  <div className="arrow small">
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.62963H13M13 4.62963L9.09302 1M13 4.62963L9.09302 8"
        stroke="var(--black-100)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default Arrow;
