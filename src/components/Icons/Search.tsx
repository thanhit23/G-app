import React from 'react';

type Props = {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }): React.ReactNode => {
  return (
    <svg
      aria-label="Search"
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.5 17.725C18.0485 16.1084 19 13.9153 19 11.5C19 6.52944 14.9706 2.5 10 2.5C5.02944 2.5 1 6.52944 1 11.5C1 16.4706 5.02944 20.5 10 20.5C12.5552 20.5 14.8618 19.4351 16.5 17.725ZM16.5 17.725L22 23.225"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Icon;
