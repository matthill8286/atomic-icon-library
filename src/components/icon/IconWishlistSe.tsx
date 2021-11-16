import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 610 546" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="#0075bf">
          <path d="M105 152h200v256H105z" />
          <path d="M191 152h314v256H191z" />
        </g>
        <path d="M150 118h314v324H150z" fill="#009fe3" />
        <g fill="#fff">
          <path d="M200 342h214v42H200zM234 395h146v13H234z" />
        </g>
        <path
          d="M350.75 83.5A64.66 64.66 0 00305 104.545 64.66 64.66 0 00259.25 83.5c-30.882 0-55.917 25.035-55.917 55.917 0 39.853 48.292 83.875 71.167 106.75l8.032 8.031 15.148 15.149 7.32 7.32 7.32-7.117 7.523-7.523 15.657-15.86c22.875-22.875 71.167-66.897 71.167-106.75A55.917 55.917 0 00350.75 83.5z"
          fill="#ef7c00"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
