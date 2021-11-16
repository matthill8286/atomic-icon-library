import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={184} height={150} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter id="a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.286275 0 0 0 0 0.278431 0 0 0 0 0.270588 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(25.898 17.886)">
          <ellipse
            fillOpacity={0.1}
            fill="#DF0000"
            cx={65.597}
            cy={61.345}
            rx={55.597}
            ry={55.345}
          />
          <ellipse stroke="#FBE5E5" cx={65.219} cy={61.73} rx={62.012} ry={61.73} />
          <ellipse stroke="#FBE5E5" cx={62.012} cy={61.73} rx={62.012} ry={61.73} />
        </g>
        <g opacity={0.5} stroke="#DF0000" strokeWidth={2}>
          <g transform="translate(11.07 1)">
            <ellipse cx={96.616} cy={3.953} rx={3.944} ry={3.953} />
            <ellipse cx={6.69} cy={140.71} rx={3.944} ry={3.953} />
            <path
              strokeLinecap="square"
              d="M.394 95.774l9.24 7.408M121.396 140.095l9.239 7.407M126.041 27.299l9.24 7.407"
            />
          </g>
          <g transform="translate(1 11.963)">
            <path d="M4.353 26.874l4.14 3.004-1.582 4.86H1.794l-1.581-4.86z" />
            <path strokeLinecap="square" d="M20.973 0l9.27 7.407" />
            <path d="M160.264 98.802l4.14 3.004-1.581 4.86h-5.117l-1.581-4.86z" />
            <ellipse cx={177.28} cy={36.359} rx={3.957} ry={3.952} />
          </g>
        </g>
        <g filter="url(#a)" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)">
          <g stroke="#262626" strokeWidth={3}>
            <path d="M103.449 45h-32.1C68.396 45 66 47.388 66 50.333v53.334c0 2.945 2.395 5.333 5.35 5.333h40.124c2.954 0 5.35-2.388 5.35-5.333V58.333h-13.375V45z" />
            <path d="M103.647 45v13.176h13.177z" />
          </g>
        </g>
        <path
          d="M106.524 85.059H77.353s0 0 0 0 0 0 0 0h29.17s0 0 0 0 .014 0 0 0zM106.524 76.588H77.353s0 0 0 0 0 0 0 0h29.17s0 0 0 0 .014 0 0 0zM106.524 68.118H77.353s0 0 0 0 0 0 0 0h29.17s0 0 0 0 .014 0 0 0z"
          stroke="#DF0000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
