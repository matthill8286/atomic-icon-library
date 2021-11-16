import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68 10H44c-2.21 0-4 1.701-4 3.8v30.4c0 2.099 1.79 3.8 4 3.8h24c2.21 0 4-1.701 4-3.8V13.8c0-2.099-1.79-3.8-4-3.8zm-1 16c.552 0 1 .407 1 .91v16.18c0 .503-.448.91-1 .91H45c-.552 0-1-.407-1-.91V26.91c0-.503.448-.91 1-.91h22zm1-11.09c0-.503-.448-.91-1-.91H45c-.552 0-1 .407-1 .91v6.18c0 .503.448.91 1 .91h22c.552 0 1-.407 1-.91v-6.18zM64 16a2 2 0 110 4 2 2 0 010-4zm-4 2a2 2 0 10-4 0 2 2 0 004 0zm-7-2a2 2 0 110 4 2 2 0 010-4zm-3 2a2 2 0 10-4 0 2 2 0 004 0z"
        fill="currentColor"
      />
      <path
        d="M46 29a1 1 0 011-1h18a1 1 0 011 1v2a1 1 0 01-1 1H47a1 1 0 01-1-1v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 0H4C1.79 0 0 2.149 0 4.8v38.4C0 45.851 1.79 48 4 48h24c2.21 0 4-2.149 4-4.8V4.8C32 2.149 30.21 0 28 0zm0 44H4V30h24v14zm0-18V4H4v22h24zm-4 8a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2zm1-23a1 1 0 00-1-1h-2a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V11z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
