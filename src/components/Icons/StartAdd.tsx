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
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;
