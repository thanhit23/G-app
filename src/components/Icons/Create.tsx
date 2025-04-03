import React from 'react';

type Props = {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }): React.ReactNode => {
  return (
    <svg aria-label="Create" width="24" height="24" viewBox="0 0 23 24" fill="transparent"
         xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M11.5 2.25H7.75C4.43629 2.25 1.75 4.93629 1.75 8.25V15.75C1.75 19.0637 4.43629 21.75 7.75 21.75H15.25C18.5637 21.75 21.25 19.0637 21.25 15.75V12M11.981 11.4534L20.396 3.03838"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

export default Icon;
