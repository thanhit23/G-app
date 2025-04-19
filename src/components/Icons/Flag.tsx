import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }): React.ReactNode => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;
