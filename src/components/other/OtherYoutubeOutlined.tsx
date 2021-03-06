import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20 4.49l-1.46-.15a63.65 63.65 0 00-13.14 0L4 4.49A3.38 3.38 0 001 7.9v8.2a3.38 3.38 0 003 3.41l1.46.15A62.85 62.85 0 0012 20a62.85 62.85 0 006.57-.34l1.43-.15a3.38 3.38 0 003-3.41V7.9a3.38 3.38 0 00-3-3.41zm1 11.61a1.38 1.38 0 01-1.18 1.42l-1.46.15A61.29 61.29 0 0112 18a61.29 61.29 0 01-6.36-.33l-1.46-.15A1.38 1.38 0 013 16.1V7.9a1.38 1.38 0 011.18-1.42l1.46-.15a61.45 61.45 0 0112.72 0l1.46.15A1.38 1.38 0 0121 7.9zm-9.83-7.32A.75.75 0 0010 9.4v5.2a.75.75 0 001.17.62l3.89-2.6a.74.74 0 000-1.24z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
