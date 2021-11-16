import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={12}
      viewBox="0 0 96 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.8 0h52.8A2.4 2.4 0 0196 2.4V36a2.4 2.4 0 01-2.4 2.4H74.4v4.8H78a1.2 1.2 0 011.2 1.2v2.4A1.2 1.2 0 0178 48H56.4a1.2 1.2 0 01-1.2-1.2v-2.4a1.2 1.2 0 011.2-1.2H60v-4.8H40.8a2.4 2.4 0 01-2.4-2.4V2.4A2.4 2.4 0 0140.8 0zm2.4 33.6h48V4.8h-48v28.8zM16.8 9.816V7.2H18a3.6 3.6 0 003.6-3.6V1.2A1.2 1.2 0 0020.4 0H18a1.2 1.2 0 00-1.2 1.2v1.2h-1.2A3.6 3.6 0 0012 6v3.816A14.4 14.4 0 000 24v9.6C0 41.553 6.447 48 14.4 48s14.4-6.447 14.4-14.4V24a14.4 14.4 0 00-12-14.184zM24 33.6a9.6 9.6 0 01-19.2 0V24A9.6 9.6 0 0124 24v9.6zM12 20.4a1.2 1.2 0 011.2-1.2h2.4a1.2 1.2 0 011.2 1.2v4.8a1.2 1.2 0 01-1.2 1.2h-2.4a1.2 1.2 0 01-1.2-1.2v-4.8z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
