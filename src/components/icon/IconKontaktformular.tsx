import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <path
        d="M13.333 24.666c0 .736-.597 1.333-1.334 1.333H6a1.333 1.333 0 110-2.666h6c.736 0 1.334.597 1.334 1.333zm0-8.666c0 .736-.597 1.333-1.334 1.333H6a1.333 1.333 0 110-2.667h6c.736 0 1.334.597 1.334 1.334zm5.333-7.334H6A1.333 1.333 0 116 6h12.667a1.333 1.333 0 010 2.666zM20.114 18H18v-2.114l8.666-8.667 2.114 2.114L20.114 18zM22 22h-3.333c-2.206 0-4 1.794-4 4v3.333H4A1.335 1.335 0 012.667 28V4c0-.736.598-1.334 1.333-1.334h16.666A1.336 1.336 0 0122 4v4.114l-6.276 6.276a1.33 1.33 0 00-.391.943v4c0 .736.597 1.333 1.333 1.333h4c.354 0 .693-.14.943-.39l.39-.39V22zm-4.666 5.448V26c0-.735.598-1.333 1.333-1.333h1.447l-2.78 2.78zM31.61 8.39l-4-4a1.334 1.334 0 00-1.885 0l-1.057 1.057V4c0-2.206-1.794-4-4-4H4C1.794 0 0 1.794 0 4v24c0 2.206 1.794 4 4 4h12l.02-.002c.08-.001.16-.008.24-.024.033-.006.064-.02.096-.03l.153-.046c.033-.014.063-.034.095-.05l.135-.072a1.33 1.33 0 00.204-.167l7.333-7.333a1.32 1.32 0 00.209-.282l.042-.077c.05-.103.092-.2.115-.323a1.37 1.37 0 00.026-.261V17.22l6.943-6.943c.52-.52.52-1.365 0-1.885z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent