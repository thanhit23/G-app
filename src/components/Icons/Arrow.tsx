import React from 'react';

type Props = {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }): React.ReactNode => {
  return (
    <svg
      role="img"
      viewBox="0 0 13 12"
      className={className}
    >
      <path
        d="m2.5 4.2 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default Icon;
