import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 610 546" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(-53 98)">
        <path
          d="M155.701 343C143.164 343 133 332.836 133 320.299V43.701C133 31.164 143.164 21 155.701 21h404.597C572.836 21 583 31.164 583 43.701v276.598C583 332.836 572.836 343 560.298 343z"
          fill="#e3141f"
        />
        <path
          d="M389.82 85h148.36c4.458 0 6.075.464 7.704 1.336a9.086 9.086 0 013.78 3.78c.872 1.63 1.336 3.246 1.336 7.703v16.362c0 4.457-.464 6.074-1.336 7.703a9.086 9.086 0 01-3.78 3.78c-1.63.872-3.246 1.336-7.703 1.336H389.819c-4.457 0-6.074-.464-7.703-1.336-1.63-.871-2.909-2.15-3.78-3.78S377 118.638 377 114.181V97.819c0-4.457.464-6.074 1.336-7.703s2.15-2.909 3.78-3.78S385.362 85 389.819 85z"
          fill="#a90e16"
        />
        <g fill="#fff">
          <path d="M383.5 233h161a6.5 6.5 0 110 13h-161a6.5 6.5 0 110-13zM383.5 298.333h161a6.5 6.5 0 110 13h-161a6.5 6.5 0 110-13zM383.5 266h161a6.5 6.5 0 110 13h-161a6.5 6.5 0 110-13z" />
        </g>
        <circle cx={255} cy={143} fill="#fff" r={90} />
        <path
          d="M296.525 119.89c7.813 20.154.72 67.97-12.794 69.74-5.389.707-16.111-3.96-26.598-12.184l.928 51.213-41.975-5.154 22.727-65.644c-6.896-10.458-10.925-22.73-8.417-35.62 7.226-37.142 58.316-22.503 66.13-2.35z"
          fill="#b28b67"
        />
        <path
          d="M275.155 99.19c-5.421-1.587-20.24-4.04-22.987-4.377-1.756-.216-3.707-.048-4.549-1.79-.69-1.425-.103-3.621-.169-5.186-.076-1.817-.28-3.627-.488-5.432-.593-5.139-1.835-10.11-3.84-14.881C241.064 62.626 235.968 50.87 225 45c-9.077-4.857-23.903-4.495-28.911-3.5-10.54 2.092-21.311 2.102-31.706-.828-10.473-2.952-17.827-9.733-26.156-16.335-8.527-6.76-18.609-11.733-29.61-12.225C98.35 11.653 84.5 13.5 75.5 18 66.5 22.5 54 34.5 54 52s26.5 33 43.37 34.59c8.423.793 16.856.327 25.128-1.49 11.03-2.425 20.942-7.613 31.462-11.517 4.937-1.832 9.978-3.216 15.182-4.02 5.05-.78 9.935-.823 13.992 2.671 4.291 3.696 8.103 7.277 13.211 9.888 4.9 2.505 10.206 4.221 15.677 4.85C222.667 88.196 225 85 230.5 85s13.208 5.63 14.044 9.516c-22.267 1.277-34.133 27.191-30.423 47.74 2.003 11.09 20.392 26.026 28.828 21.36 5.344-2.956 2.938-7.993 1.389-11.313-2.968-6.36-3.3-14.1 4.038-17.373 6.329-2.822 11.491 6.36 11.61 6.365 1.635.07 16.604-6.134 27.667-16.512 9.444 1.733 11.658-4.368 10.017-9.782-1.64-5.414-15.026-13.617-22.515-15.811z"
          fill="#191847"
        />
        <path
          d="M225.994 188.66l33.791 11.418c6.674 8.338 12.03 18.887 16.567 30.372A90.1 90.1 0 01255 233c-24.729 0-47.128-9.973-63.395-26.117 10.973-6.622 22.437-12.695 34.39-18.223z"
          fill="#ffba08"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent