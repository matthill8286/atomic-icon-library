import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={24}
      viewBox="0 0 100 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.8 43.2h3.6a1.2 1.2 0 011.2 1.2v1.2a2.4 2.4 0 01-2.4 2.4H2.4A2.4 2.4 0 010 45.6v-1.2a1.2 1.2 0 011.2-1.2h3.6V12a2.4 2.4 0 012.4-2.4h43.2a2.4 2.4 0 012.4 2.4v31.2zM48 14.4H9.6v26.4H48V14.4zM71.2 0h24c2.21 0 4 2.149 4 4.8v38.4c0 2.651-1.79 4.8-4 4.8h-24c-2.21 0-4-2.149-4-4.8V4.8c0-2.651 1.79-4.8 4-4.8zm0 42.2h24V5h-24v37.2zm3-31.2v2h18v-2c0-1.105-.971-2-2.169-2H76.37c-1.198 0-2.169.895-2.169 2zm0 16v-2c0-1.105.97-2 2.169-2H90.03c1.198 0 2.169.895 2.169 2v2h-18zm0-9v2h18v-2c0-1.105-.971-2-2.169-2H76.37c-1.198 0-2.169.895-2.169 2zm1.4 13.2H78c.663 0 1.2.358 1.2.8v3.2c0 .442-.537.8-1.2.8h-2.4c-.663 0-1.2-.358-1.2-.8V32c0-.442.537-.8 1.2-.8z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
