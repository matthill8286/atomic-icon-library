import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={21}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M12.938 2a3.26 3.26 0 013.22 2.783h1.492c1.112 0 2.016.905 2.016 2.016v1.05a1.31 1.31 0 01-1.308 1.307h-.224v9.872a3.376 3.376 0 01-3.372 3.372H8.936a3.376 3.376 0 01-3.372-3.372V9.156H5.34a1.31 1.31 0 01-1.308-1.308V6.8c0-1.111.905-2.016 2.016-2.016H7.54A3.26 3.26 0 0110.76 2zm4 7.156H6.76v9.872c0 1.2.976 2.177 2.176 2.177h5.826a2.18 2.18 0 002.177-2.177V9.156zm-5.089 2.11c.33 0 .598.267.598.597v6.604a.598.598 0 01-1.195 0v-6.604c0-.33.267-.597.597-.597zm-2.737.678c.33 0 .598.267.598.597v5.288a.598.598 0 01-1.196 0v-5.288c0-.33.268-.597.598-.597zm5.474 0c.33 0 .598.267.598.597v5.288a.598.598 0 01-1.195 0v-5.288c0-.33.267-.597.597-.597zm3.064-5.965H6.048a.822.822 0 00-.82.82v1.05c0 .06.051.112.112.112h13.018a.114.114 0 00.113-.113V6.8a.822.822 0 00-.82-.82zm-4.712-2.784H10.76c-.973 0-1.79.68-2.005 1.588h6.188a2.063 2.063 0 00-2.005-1.588z"
          id="a"
        />
      </defs>
      <g transform="translate(-4 -2)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
        <g mask="url(#b)" fill="#999">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
