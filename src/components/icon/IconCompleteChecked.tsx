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
          d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm4.994 6.712a.81.81 0 00-1.146-.03l-5.177 4.91-2.469-2.536-.075-.068a.81.81 0 00-1.086 1.2l3.027 3.107.083.075a.808.808 0 001.056-.052l5.757-5.46.069-.074a.81.81 0 00-.04-1.072z"
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
