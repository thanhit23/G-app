import { SVGProps } from 'react';

const Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-label="Xem thêm"
      role="img"
      viewBox="0 0 24 24"
      style={{ fill: 'currentColor', height: '24px', width: '24px' }}
      {...props}
    >
      <title>Xem thêm</title>
      <circle
        className="stroke-current stroke-[2px] fill-none"
        cx="12"
        cy="12"
        r="10"
      ></circle>
      <path d="M7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5Z"></path>
      <path d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z"></path>
      <path d="M16.5 13.5C15.6716 13.5 15 12.8284 15 12C15 11.1716 15.6716 10.5 16.5 10.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5Z"></path>
    </svg>
  );
};

export default Icon;
