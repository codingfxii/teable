import * as React from 'react';
import type { SVGProps } from 'react';
const FilePresentation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        fill="#FFB900"
        fillRule="evenodd"
        d="M2.88 0A2.88 2.88 0 0 0 0 2.88v18.24A2.88 2.88 0 0 0 2.88 24h18.24A2.88 2.88 0 0 0 24 21.12V2.88A2.88 2.88 0 0 0 21.12 0zm5.944 16.522c.14.096.374.145.7.145.325 0 .558-.049.699-.145a.611.611 0 0 0 .264-.37c.035-.158.053-.321.053-.488v-1.73h1.69c.369 0 .743-.066 1.121-.198.379-.14.726-.343 1.043-.607.326-.273.585-.611.779-1.016.202-.405.303-.876.303-1.413 0-.545-.1-1.02-.303-1.425a2.987 2.987 0 0 0-.779-1.017 3.096 3.096 0 0 0-1.043-.62 3.278 3.278 0 0 0-1.109-.198H9.536c-.325 0-.558.048-.7.145a.614.614 0 0 0-.263.383 2.07 2.07 0 0 0-.053.475v7.207c0 .168.018.33.053.489a.63.63 0 0 0 .25.383m3.418-4.594H10.54V9.446h1.69c.246 0 .461.053.646.159.194.105.343.25.449.435.105.185.158.4.158.647 0 .29-.066.528-.198.713a1.121 1.121 0 0 1-.475.41c-.185.078-.374.118-.568.118"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilePresentation;
