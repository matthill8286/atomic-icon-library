import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21 14.73l-.8-.66a2 2 0 01-.72-1.64V12v-.43a2 2 0 01.72-1.64l.8-.66A1 1 0 0021.24 8l-1.16-2a1 1 0 00-1.21-.43l-1 .36a2 2 0 01-1.78-.19 5.48 5.48 0 00-.74-.43 2 2 0 01-1.06-1.45l-.17-1a1 1 0 00-1-.84h-2.3a1 1 0 00-1 .84l-.17 1a2 2 0 01-1.02 1.45 5.48 5.48 0 00-.74.43 2 2 0 01-1.78.19l-1-.36A1 1 0 003.92 6L2.76 8A1 1 0 003 9.27l.8.66a2 2 0 01.72 1.64v.86a2 2 0 01-.72 1.64l-.8.66A1 1 0 002.76 16l1.16 2a1 1 0 001.21.43l1-.36a2 2 0 011.78.19 5.48 5.48 0 00.74.43 2 2 0 011.06 1.45l.17 1a1 1 0 001 .84h2.3a1 1 0 001-.84l.17-1a2 2 0 011.06-1.45 5.48 5.48 0 00.74-.43 2 2 0 011.78-.19l1 .36a1 1 0 001.15-.43l1.16-2a1 1 0 00-.24-1.27zM12 15a3 3 0 113-3 3 3 0 01-3 3z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
