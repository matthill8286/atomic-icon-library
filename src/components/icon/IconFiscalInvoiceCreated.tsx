import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={184} height={150} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(25.944 17.63)">
          <ellipse
            fillOpacity={0.1}
            fill="#DF0000"
            cx={65.084}
            cy={61.595}
            rx={55.481}
            ry={55.223}
          />
          <ellipse stroke="#FBE5E5" cx={65.084} cy={61.595} rx={61.883} ry={61.595} />
          <ellipse stroke="#FBE5E5" cx={61.883} cy={61.595} rx={61.883} ry={61.595} />
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
        <g>
          <path
            d="M103.224 46.653H71.878a5.224 5.224 0 00-5.225 5.225v52.244a5.224 5.224 0 005.225 5.225h39.183a5.224 5.224 0 005.225-5.225V59.714h-13.062v-13.06z"
            stroke="#494745"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            stroke="#494745"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M103.224 46.653v13.061h13.062z"
          />
          <path
            d="M88.44 90.408a3.461 3.461 0 01-2.47-1.019l-6.53-6.53a3.491 3.491 0 014.937-4.937l4.075 4.088 10.136-10.136a3.487 3.487 0 114.937 4.924L90.92 89.402a3.409 3.409 0 01-2.482 1.006z"
            fill="#DF0000"
          />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
