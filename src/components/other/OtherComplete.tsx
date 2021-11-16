import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm0 1.622C5.38 1.622 1.622 5.38 1.622 10S5.38 18.378 10 18.378 18.378 14.62 18.378 10 14.62 1.622 10 1.622zm3.848 5.06a.81.81 0 111.116 1.177l-5.757 5.46a.81.81 0 01-1.14-.024l-3.026-3.107a.81.81 0 111.161-1.132l2.47 2.535z"
          id="a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
        <g mask="url(#b)" fill="#999">
          <path d="M0 0h20v20H0z" />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
