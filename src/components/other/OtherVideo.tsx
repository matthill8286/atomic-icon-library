import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M13.383 0a2.261 2.261 0 012.261 2.261v11.122a2.261 2.261 0 01-2.26 2.261H2.26A2.261 2.261 0 010 13.384V2.26A2.261 2.261 0 012.261 0h11.122zM3.555 12.088H1.422v1.295c0 .464.376.84.84.84l1.293-.001v-2.134zm7.111-3.555H4.977v5.689h5.689V8.533zm3.556 3.555h-2.134v2.134h1.295a.84.84 0 00.84-.839l-.001-1.295zm0-3.555h-2.134v2.133h2.134V8.533zm-10.667 0H1.422v2.133h2.133V8.533zm0-3.556H1.422v2.134h2.133V4.977zm7.111-3.555H4.977v5.689h5.689V1.422zm3.556 3.555h-2.134v2.134h2.134V4.977zm-.839-3.555h-1.295v2.133h2.134V2.261a.84.84 0 00-.839-.839zm-9.828 0H2.261a.84.84 0 00-.839.84v1.293h2.133V1.422z"
          id="a"
        />
      </defs>
      <use xlinkHref="#a" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
