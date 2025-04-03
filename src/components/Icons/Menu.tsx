import React from 'react';

type Props = {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }): React.ReactNode => {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1 1H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 9H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

export default Icon;
