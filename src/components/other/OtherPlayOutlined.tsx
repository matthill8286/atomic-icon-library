import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M9 8.48L15 12l-6 3.52v-7m-1.08-2.8a.58.58 0 00-.3.08l-.25.14a.76.76 0 00-.37.65v10.82a.76.76 0 00.37.65l.25.14a.59.59 0 00.32.09 1.59 1.59 0 00.74-.29l9-5.23a.76.76 0 00.37-.65v-.28a.76.76 0 00-.37-.65L8.84 6.07a2 2 0 00-.92-.35z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
