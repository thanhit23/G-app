import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }): React.ReactNode => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};

export default Icon;
