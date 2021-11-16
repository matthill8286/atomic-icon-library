import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.75 2.1a.15.15 0 01.15-.15h4.2a.15.15 0 010 .3H3.9a.15.15 0 01-.15-.15zM9.087 7.991a.314.314 0 01.378.05v.001l.494.495a.314.314 0 01.05.378l-.658 1.153v.001a.315.315 0 01-.211.151l-.73.143-1.14 1.143-.212-.212 1.204-1.208.82-.16a.014.014 0 00.009-.007l.657-1.153a.015.015 0 00-.002-.018l-.493-.494a.014.014 0 00-.008-.004c-.003 0-.006 0-.009.002l-1.154.66-.002.002a.014.014 0 00-.007.008l-.162.813-1.205 1.207-.212-.212 1.14-1.143.147-.734V8.85a.315.315 0 01.157-.2l1.15-.658zM2.287 14.083l1.89-1.89.212.213-1.89 1.89A.852.852 0 003.705 15.5l1.89-1.889.212.212-1.89 1.89a1.152 1.152 0 01-1.629-1.63z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.615 7.969a1.936 1.936 0 012.137 2.421l4.005 4.008a.961.961 0 11-1.36 1.36L4.392 11.75a1.936 1.936 0 01-2.422-2.138.312.312 0 01.53-.178l.842.83a.154.154 0 01.008.01l.012.009a.165.165 0 00.033.016c.029.01.07.019.124.014.107-.01.276-.071.495-.29.433-.433.264-.67.253-.681V9.34l-.83-.842a.312.312 0 01.179-.53zm.854.39c-.259-.1-.539-.132-.813-.093a.012.012 0 00-.008.02l.001.002.83.842c.166.167.253.598-.254 1.106-.5.5-.934.421-1.098.239l-.839-.828h-.001a.012.012 0 00-.013-.004.012.012 0 00-.008.01v.001a1.635 1.635 0 002.122 1.784.15.15 0 01.152.037l4.07 4.071.003.002a.663.663 0 001.137-.465.662.662 0 00-.202-.47l-.002-.002-4.07-4.072a.15.15 0 01-.036-.152 1.635 1.635 0 00-.971-2.029z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2 0H1.8C.84 0 0 .78 0 1.8v20.4c0 .96.78 1.8 1.8 1.8h8.4c.96 0 1.8-.78 1.8-1.8V1.8C12 .78 11.22 0 10.2 0zm0 .6c.66 0 1.2.54 1.2 1.2v20.4c0 .66-.54 1.2-1.2 1.2H1.8c-.66 0-1.2-.54-1.2-1.2V1.8c0-.66.54-1.2 1.2-1.2h8.4z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
