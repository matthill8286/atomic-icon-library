import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={30} height={30} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27.72 19.74l9.62.76L30 26.76l2.24 9.36L24 31.1l-8.26 5.02L18 26.76l-7.34-6.26 9.62-.76L24 10.82l3.72 8.92zM23.74 4a1.02 1.02 0 00-.96.64l-4.9 11.78L5.1 17.44a.98.98 0 00-.88.7l-.22.5a.98.98 0 00.3 1.08L14 28l-2.88 12.44a1.02 1.02 0 00.38 1.06l.5.3c.17.134.383.205.6.2a.962.962 0 00.52-.14L24 35.2l10.94 6.66a.962.962 0 00.52.14.941.941 0 00.6-.2l.44-.3a1.02 1.02 0 00.38-1.06L34 28l9.72-8.3a.98.98 0 00.28-1.06l-.16-.5a.98.98 0 00-.88-.7l-12.78-1.02L25.2 4.64a.98.98 0 00-.94-.64h-.52z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
