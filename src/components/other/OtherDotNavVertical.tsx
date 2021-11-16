import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={4}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M12 17a2 2 0 110 4 2 2 0 010-4zm0-7a2 2 0 110 4 2 2 0 010-4zm0-7a2 2 0 110 4 2 2 0 010-4z"
          id="a"
        />
      </defs>
      <g transform="translate(-10 -3)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#999" xlinkHref="#a" />
        <g mask="url(#b)" fill="#999">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
