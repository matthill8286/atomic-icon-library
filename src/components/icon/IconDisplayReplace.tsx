import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.8 0h8.4c1.02 0 1.8.78 1.8 1.8v20.4c0 1.02-.84 1.8-1.8 1.8H1.8C.78 24 0 23.16 0 22.2V1.8C0 .78.84 0 1.8 0zm9.6 1.8c0-.66-.54-1.2-1.2-1.2H1.8C1.14.6.6 1.14.6 1.8v20.4c0 .66.54 1.2 1.2 1.2h8.4c.66 0 1.2-.54 1.2-1.2V1.8z"
        fill="#000"
      />
      <path
        d="M3.9 1.95a.15.15 0 000 .3h4.2a.15.15 0 000-.3H3.9zM11.799 6.187a.15.15 0 01.014.212l-4.14 4.73 2.34 5.85 1.734.579a.15.15 0 11-.094.284l-1.866-.622-2.407-6.016-4.092-2.338L.356 10.04a.15.15 0 01-.112-.278l3.068-1.227 4.156 2.375 4.12-4.708a.15.15 0 01.21-.014z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
