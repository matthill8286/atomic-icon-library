import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0h36c3.314 0 6 2.149 6 4.8v38.4c0 2.651-2.686 4.8-6 4.8H6c-3.314 0-6-2.149-6-4.8V4.8C0 2.149 2.686 0 6 0zM4.8 43.2h38.4V4.8H4.8v38.4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6 22.8c0 7.953 6.447 14.4 14.4 14.4s14.4-6.447 14.4-14.4S31.953 8.4 24 8.4 9.6 14.847 9.6 22.8zm6 0a8.4 8.4 0 1116.8 0 8.4 8.4 0 01-16.8 0z"
        fill="currentColor"
      />
      <path
        d="M8.16 34.344c-.387.258-.88.697-1.204 1.237-1.186 1.982-.623 4.521 1.25 5.642 1.874 1.12 4.377.416 5.563-1.566 0 0 9.161-15.316 9.27-15.496.43-.72.073-1.669-.438-1.975-.511-.305-1.067-.149-1.561.29L8.16 34.344zM40.8 10.8a1.2 1.2 0 01-1.2 1.2h-2.4a1.2 1.2 0 01-1.2-1.2V8.4a1.2 1.2 0 011.2-1.2h2.4a1.2 1.2 0 011.2 1.2v2.4zM40.8 39.6a1.2 1.2 0 01-1.2 1.2h-2.4a1.2 1.2 0 01-1.2-1.2v-2.4a1.2 1.2 0 011.2-1.2h2.4a1.2 1.2 0 011.2 1.2v2.4zM12 10.8a1.2 1.2 0 01-1.2 1.2H8.4a1.2 1.2 0 01-1.2-1.2V8.4a1.2 1.2 0 011.2-1.2h2.4A1.2 1.2 0 0112 8.4v2.4z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
