import { SVGProps } from 'react';

const Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      stroke="currentColor"
      aria-label="Bell"
      role="img"
      {...props}
    >
      <title>Bell</title>
      <g clipPath="url(#a)">
        <path
          d="M18.783 18.5H5.973c-2.056 0-3.392-2.162-2.473-4l.238-.397A9.801 9.801 0 0 0 5.122 9.55l.04-.808a7.096 7.096 0 0 1 14.175 0l.04.808a9.802 9.802 0 0 0 1.385 4.553L21 14.5c1.088 1.741-.164 4-2.217 4Z"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          clipRule="evenodd"
          d="M9.035 21a3.999 3.999 0 0 0 6.93 0h-6.93Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect
            fill="currentColor"
            height="24"
            transform="translate(.5)"
            width="24"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
