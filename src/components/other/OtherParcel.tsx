import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 138 117" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(2)" fill="none">
        <circle fill="#F4F4F4" cx={74.5} cy={58.5} r={58.5} />
        <path fill="#DFB28B" d="M94 89.5l42-11.13V36.63L94 25.5 52 36.63v41.74z" />
        <path fill="#F0D0B4" d="M52 36.5l42 11.158V89.5L52 78.342z" />
        <g fill="#CF9E76">
          <path d="M94 48.074l42-11.444L94 25.5 52 36.855z" />
          <path d="M64.6 40.22v9.256L80 53.683v-9.35zm0 41.426L80 85.759v-10.64l-15.4-4.206z" />
        </g>
        <path fill="#B27946" d="M64.5 40.148L80 44.334l41.816-11.435-14.446-3.816z" />
        <path d="M93.5 23.5L50 35.023v43.956l43.138 11.425.362.096L137 78.978V35.023L93.5 23.5zm0 22.3l-7.533-1.995 36.651-9.708 7.533 1.996L93.5 45.801zm-24.373-6.455l36.651-9.708 11.393 3.017-36.65 9.709-11.394-3.018zm-3.692 1.908l12.63 3.345v6.396l-12.63-3.422v-6.32zm34.896-13.058l-36.65 9.707-6.832-1.809L93.5 26.385l6.831 1.81zm-47.525 9.713l9.823 2.602v9.192l18.242 4.942V45.34l11.226 2.973v38.929L80.87 84.27V74.056l-18.242-4.944v10.325l-9.823-2.601V37.908zm25.259 45.618l-12.63-3.345v-7.417l12.63 3.42v7.342zm16.838 3.717V48.314l39.29-10.408v38.93l-39.29 10.407z" />
        <path fill="#F0D0B4" d="M128 72.5h3v3h-3zm-5 2h3v3h-3zm-6 1h3v3h-3z" />
        <path
          d="M43.6 54H24m19.75 11.201H14.143m29.464 11.41H.393"
          stroke="#958F8F"
          strokeWidth={3.2}
          strokeLinecap="square"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
