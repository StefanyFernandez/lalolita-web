import React from 'react';

type LogoSizes = 'small' | 'large' | 'game';

interface LogoProps {
  size?: LogoSizes;
}

const Logo: React.FC<LogoProps> = ({ size }) => (
  <div className={`logoWrapper ${size || ''}`}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 407.9 496"
      xmlSpace="preserve"
    >
      <path
        fill="var(--white-100)"
        d="M396,3.3C353.2,4.4,30.6,10,14.8,10.4c-2.1,0-4.1,0.8-5.7,2.1c-2.3,1.6-3.6,4.3-3.5,7.1
	C5.3,71.8,2.8,464.4,2.7,483.5c0,5.1,4.1,9.2,9.2,9.2c43.1-1.2,367-7,382.9-7.4c5-0.1,9.1-4.1,9.2-9.2c0.2-52.2,1.3-444.5,1.4-463.6
	C405.2,7.4,401.1,3.3,396,3.3z"
      />
      <g>
        <g>
          <path
            fill="var(--black-100)"
            d="M220.3,228.3c8.8,2.5,18.2,2.8,27.2,3c15.3,0.4,30.7-0.9,46-1.7c3.5-0.2,7.3-0.3,10.5-1.8c1.8-0.9,4-2.7,4-5
			c0-5.6-6.1-7.2-14.5-6.8c-13.9,0.7-27.8,1.8-41.7,1.1c-5.1-0.2-11.6-0.6-14.3-0.9c-0.5,0-0.9-0.5-0.9-1c0-4.7-0.2-25.9,0.1-32.7
			c0.9-19,2.2-38.1,3.7-57c0.9-11.9,1.9-23.7,2.9-35.6c0.2-2.2-2.7-4.1-4.3-4.8c-3.2-1.4-6.7-2.1-10.3-2c-4.3,0.1-14,0.9-14.5,6.8
			c-2.6,29.5-4.9,59-6.4,88.6c-0.4,8.1-0.8,16.2-0.8,24.3c0,4.2-0.4,13.9,1.4,17.6C210.4,224.6,216.2,227.1,220.3,228.3z"
          />
          <path
            fill="var(--black-100)"
            d="M310.6,264.1c-22.9-2.2-73.3-4.3-75.5-4.3c-31.5,0-34.4,1.2-35.8,4.6c-2.1,5.1,7.9,6.9,23.9,8.3
			c-0.6,10.2-1,20.4-1.4,30.6c-0.7,22.6-1.1,45.3,0.3,67.9c0.6,10,1.6,20.1,4.6,29.7c0.6,2,5.1,3.5,6.7,4c3.7,1,7.5,1.2,11.2,0.7
			c4.2-0.6,11.3-2.2,10.3-7.5c0,0-1.7-8.1-2-10.1c-0.7-4.5-1.1-9.1-1.5-13.7c-0.8-11-1.1-22.1-1.1-33.2c-0.1-20.4,1.8-64.9,1.9-66.8
			c8,0.4,36.6,2.1,42.9,2.6c7.5,0.4,15,0.3,22.5-0.3c3-0.3,10.8-1.6,13.3-4.3C336.5,266.2,313.8,264.4,310.6,264.1z"
          />
          <path
            fill="var(--black-100)"
            d="M262.4,189.2c6.1,0.6,12.9,0,18.5-3.1c4.7-2.5,8.1-7.3,10.6-11.9c2.2-3.6,3.2-7.7,2.9-11.9
			c-0.6-10.5-11.9-12-20.5-10.9c-1.8,0.2-3.6,0.6-5.3,1.1c-6.5,1.8-12.1,5.9-15.7,11.6c-3.6,5.7-6.5,15.4-1.1,20.8
			C254.3,187.6,258.8,188.9,262.4,189.2z M270,164.5c1.6-2.5,3.6-4.8,6-6.6c0.3-0.2,0.7-0.1,0.9,0.2c0,0,0.1,0.1,0.1,0.1
			c0.6,2,0.8,4.1,0.5,6.1c-1.1,6.9-4.4,13.2-9.5,18c-0.3,0.3-0.7,0.2-0.9,0c0,0-0.1-0.1-0.1-0.1l-0.2-0.5
			C264.8,176.4,267.2,169,270,164.5z"
          />
          <path
            fill="var(--black-100)"
            d="M133.8,335.9v30.4c0,3,17.1,5.9,19.9,6.2c2.6,0.3,3.4-0.8,3.4-2.1v-30.4c0-3-17.1-6-19.9-6.2
			C134.8,333.6,133.8,334.6,133.8,335.9z"
          />
          <path
            fill="var(--black-100)"
            d="M137.5,313.8c6.1,5.1,15,4.9,18.5,4s8.6-4.2,2.5-9.2s-15-4.9-18.5-4S131.4,308.8,137.5,313.8z"
          />
          <path
            fill="var(--black-100)"
            d="M312.8,334.5c-1.1-3.8-12.5-7.1-24.8-3.2c-7.2,2.3-14.8,6.7-19,13.2c-3.6,5.7-6.9,15.8-1.7,21.5
			c2.6,2.8,6.3,4.1,10,4.7c6.1,1,13.1,0.5,18.6-2.5c2.7-1.6,5.2-3.6,7.1-6.1c0.6,2.1,1.2,4.2,1.8,6.3c1.6,5.7,18.6,4.1,17.5,0
			C319.1,357.1,316,345.8,312.8,334.5z M293.6,344.4c-0.5,6.9-3.5,12-9.9,18.9c-0.1,0.1-0.3,0.2-0.5,0c0,0-0.1-0.1-0.1-0.1
			c-0.4-1.1-1.1-3.8-0.6-8.3c0.3-2.9,1.3-5.7,2.9-8.2c1.6-2.5,3.9-6,7.1-7.8c0.2-0.1,0.4,0,0.5,0.1c0,0,0,0,0,0
			C293.6,340.8,293.8,342.6,293.6,344.4L293.6,344.4z"
          />
          <path
            fill="var(--black-100)"
            d="M168.7,216c-13.9,0.7-27.8,1.8-41.7,1.1c-5.1-0.2-11.6-0.6-14.3-0.9c-0.5,0-0.9-0.5-0.9-1
			c0-4.7-0.2-25.9,0.1-32.6c0.9-19,2.2-38.1,3.7-57c0.9-11.9,1.9-23.7,2.9-35.6c0.2-2.2-2.7-4.1-4.3-4.8c-3.2-1.4-6.8-2.1-10.3-2
			c-4.3,0.1-14,0.9-14.5,6.8c-2.6,29.5-4.9,59-6.4,88.6c-0.4,8.1-0.8,16.2-0.8,24.3c0,4.2-0.4,13.9,1.4,17.6c2,4.1,7.8,6.7,11.8,7.8
			c8.8,2.5,18.2,2.8,27.2,3c15.3,0.4,30.7-0.9,46-1.7c3.4-0.2,7.3-0.3,10.5-1.8c1.8-0.9,4-2.7,4-5
			C183.2,217.2,177.1,215.6,168.7,216z"
          />
          <path
            fill="var(--black-100)"
            d="M168.7,394.4c-13.9,0.7-27.8,1.8-41.7,1.1c-5.1-0.2-11.6-0.6-14.3-0.9c-0.5,0-0.9-0.5-0.9-1
			c0-4.7-0.2-25.9,0.1-32.6c0.9-19,2.2-38,3.7-57c0.9-11.9,1.9-23.7,2.9-35.6c0.2-2.2-2.7-4.1-4.3-4.8c-3.2-1.4-6.8-2.1-10.3-2
			c-4.3,0.1-14,0.9-14.5,6.8c-2.6,29.5-4.9,59-6.4,88.6c-0.4,8.1-0.8,16.2-0.8,24.3c0,4.2-0.4,13.9,1.4,17.6c2,4.1,7.8,6.7,11.8,7.8
			c8.8,2.5,18.2,2.8,27.2,3c15.3,0.4,30.7-0.9,46-1.7c3.4-0.2,7.3-0.3,10.5-1.8c1.8-0.9,4-2.7,4-5
			C183.2,395.6,177.1,394,168.7,394.4z"
          />
          <path
            fill="var(--black-100)"
            d="M135.3,189.6c6.1,1,13.1,0.5,18.6-2.5c2.8-1.6,5.2-3.6,7.1-6.1c0.6,2.1,1.2,4.2,1.8,6.3
			c1.6,5.7,18.6,4.2,17.4,0l-9.5-33.9c-1.1-3.8-12.5-7.1-24.8-3.2c-7.2,2.3-14.8,6.7-19,13.2c-3.7,5.7-6.9,15.8-1.7,21.5
			C127.9,187.8,131.6,189,135.3,189.6z M140.5,173.8c0.3-2.9,1.3-5.7,2.9-8.2c1.6-2.6,3.9-6,7.1-7.8c0.2-0.1,0.4,0,0.5,0.2
			c0,0,0,0,0,0c0.6,1.7,0.8,3.5,0.6,5.3c-0.5,6.9-3.5,12-9.9,18.9c-0.1,0.1-0.4,0.2-0.5,0c0,0-0.1-0.1-0.1-0.1
			C140.7,181,140,178.3,140.5,173.8z"
          />
          <path
            fill="var(--black-100)"
            d="M398.6,0C355.2,1.2,28.3,6.8,12.2,7.3c-2.1,0-4.2,0.8-5.8,2.1c-2.3,1.6-3.6,4.3-3.5,7.1
			C2.6,69.5,0.1,467.2,0,486.6c0,5.1,4.2,9.3,9.3,9.4c43.7-1.2,371.9-7.1,388-7.5c5.1-0.1,9.2-4.2,9.3-9.3
			c0.2-52.9,1.3-450.4,1.4-469.8C407.9,4.2,403.8,0,398.6,0z M18.7,477.1C19,427.4,21.4,42,21.5,25.6c40.3-1.1,354.9-6.4,367.8-6.8
			c-0.1,49.7-1.3,434.8-1.3,451.2C347.4,471.2,31.6,476.7,18.7,477.1z"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default Logo;
