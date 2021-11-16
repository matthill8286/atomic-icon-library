import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}>
      <path d="M24 23H0V2h24v21zM4 22v-4H1v4h3zm15 0V3H5v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zM4 17v-4H1v4h3zm5-1.2l5.941-3.3L9 9.2v6.6zM20 8v4h3V8h-3zM4 12V8H1v4h3zm16-9v4h3V3h-3zM4 7V3H1v4h3z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
