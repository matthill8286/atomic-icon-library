import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={12}
      height={8}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M14.994 6.712a.81.81 0 00-1.146-.03l-5.177 4.91-2.469-2.536a.81.81 0 10-1.161 1.132l3.027 3.107a.808.808 0 001.139.023l5.757-5.46a.81.81 0 00.03-1.146z"
          id="a"
        />
      </defs>
      <g transform="translate(-4 -6)" fill="none" fillRule="evenodd">
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
