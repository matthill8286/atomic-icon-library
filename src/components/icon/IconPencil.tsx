import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M23.497 3.77L20.232.504A1.71 1.71 0 0019.015 0h-.001c-.46 0-.892.178-1.217.504L1.584 16.717a1.1 1.1 0 00-.369.603L.027 22.65a1.108 1.108 0 001.323 1.324l5.331-1.189a1.1 1.1 0 00.605-.372l16.21-16.21a1.723 1.723 0 000-2.434zm-7.73 1.899l2.564 2.563-9.984 9.985-2.563-2.564 9.983-9.984zM3.306 18.13l.91-.91 2.564 2.563-.911.91-3.299.736.736-3.3zM19.899 6.665l-2.564-2.564 1.68-1.679 2.563 2.564L19.9 6.665z"
          id="a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
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
