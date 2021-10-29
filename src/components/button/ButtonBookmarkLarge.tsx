import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={49}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M24.902 5.714v20.573l-8.235-8-8.236 8V5.714h16.471zm0-1.714H8.432c-.975 0-1.765.768-1.765 1.714v20.573c0 .693.43 1.317 1.09 1.583a1.803 1.803 0 001.921-.371l6.989-6.927 6.988 6.927c.505.49 1.263.636 1.922.37a1.715 1.715 0 001.09-1.582V5.714c0-.946-.79-1.714-1.765-1.714z"
          id="a"
        />
      </defs>
      <g transform="translate(1.833 1)" fill="none" fillRule="evenodd">
        <g transform="translate(7.167 8)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use fill="#000" xlinkHref="#a" />
          <g mask="url(#b)" fill="#999">
            <path d="M0 0h32v32H0z" />
          </g>
        </g>
        <circle stroke="#979797" strokeWidth={2} cx={23.5} cy={23.5} r={23.5} />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
