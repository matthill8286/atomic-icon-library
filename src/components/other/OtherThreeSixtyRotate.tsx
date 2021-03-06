import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 4C6.48 4 2 7.13 2 11a6.4 6.4 0 003.43 5.28 9 9 0 004.68 1.22H11v2a.5.5 0 00.85.35l3-3a.5.5 0 000-.7l-3-3a.5.5 0 00-.85.35v2h-.89a7 7 0 01-3.64-.93A4.45 4.45 0 014 11c0-2.71 3.66-5 8-5s8 2.29 8 5a4.35 4.35 0 01-2.3 3.45.49.49 0 00-.15.68l.53.86a.51.51 0 00.69.16A6.27 6.27 0 0022 11c0-3.87-4.48-7-10-7z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
