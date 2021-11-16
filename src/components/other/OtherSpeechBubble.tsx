import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={53}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <filter
          x="-17.2%"
          y="-15.2%"
          width="134.3%"
          height="134.8%"
          filterUnits="objectBoundingBox"
          id="a">
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0701143569 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter2" />
          <feGaussianBlur stdDeviation={2.5} in="shadowOffsetOuter2" result="shadowBlurOuter2" />
          <feComposite
            in="shadowBlurOuter2"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter2"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0582540761 0"
            in="shadowBlurOuter2"
            result="shadowMatrixOuter2"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="shadowMatrixOuter2" />
          </feMerge>
        </filter>
        <path
          d="M477.625 183.596c-6.581 18.658-24.369 32.029-45.279 32.029-26.51 0-48-21.49-48-48 0-19.652 11.81-36.546 28.721-43.971a47.936 47.936 0 00-2.721 15.971c0 26.51 21.49 48 48 48a47.852 47.852 0 0018.684-3.772z"
          id="b"
        />
      </defs>
      <g transform="translate(-448 -172)" fill="none">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <path
          stroke="#ddd"
          d="M476.759 184.508a48.363 48.363 0 01-18.412 3.617c-13.393 0-25.518-5.429-34.295-14.205-8.777-8.777-14.205-20.902-14.205-34.295 0-5.249.834-10.303 2.376-15.038a47.7 47.7 0 00-19.674 17.097 47.28 47.28 0 00-7.702 25.941c0 13.117 5.317 24.992 13.912 33.588 8.596 8.596 20.471 13.912 33.588 13.912a47.286 47.286 0 0027.4-8.694 47.644 47.644 0 0017.013-21.923z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
