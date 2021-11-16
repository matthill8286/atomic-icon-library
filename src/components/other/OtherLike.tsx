import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#FFF"
        d="M18.649 7a3 3 0 013 3.452l-1.38 8.998A2.997 2.997 0 0117.28 22H6a1 1 0 01-1-1V10a1 1 0 01.086-.406l4-9A1 1 0 0110 0a4 4 0 014 4v3h4.649zM7 20h10.291a1 1 0 001-.852l1.38-8.998A1 1 0 0018.66 9H13a1 1 0 01-1-1V4a2 2 0 00-1.392-1.906L7 10.212V20zm-2-9H3a1 1 0 00-1 1v7a1 1 0 001 1h2v-9zm1 11H3a3 3 0 01-3-3v-7a3 3 0 013-3h3a1 1 0 011 1v11a1 1 0 01-1 1z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
