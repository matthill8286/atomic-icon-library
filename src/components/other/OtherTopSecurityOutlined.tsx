import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.12 5.12l-3.53-3.53A2 2 0 0015.17 1H8.83a2 2 0 00-1.42.59L3.88 5.12A3 3 0 003 7.24v5.85a8 8 0 003.09 6.31l4.08 3.18a2 2 0 001.23.42h1.2a2 2 0 001.23-.42l4.08-3.18A8 8 0 0021 13.09V7.24a3 3 0 00-.88-2.12zm-1.12 8a5.93 5.93 0 01-2.32 4.73L12.6 21h-1.2l-4.08-3.18A5.93 5.93 0 015 13.09V7.24a1 1 0 01.29-.7L8.83 3h6.34l3.54 3.54a1 1 0 01.29.7zm-2.92-3.86l-2.6-.2-1-2.43a.5.5 0 00-.92 0l-1 2.43-2.6.2a.51.51 0 00-.29.88l2 1.7L9 14.38a.5.5 0 00.74.55L12 13.56l2.25 1.37a.5.5 0 00.74-.55l-.61-2.54 2-1.7a.51.51 0 00-.3-.88z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
