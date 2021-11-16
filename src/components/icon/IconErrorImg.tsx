import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={402}
      height={275}
      {...props}>
      <defs>
        <path id="a" d="M.815.4h247.556v24.818H.815z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#201D1D"
          d="M77.172 108.455l1.273 1.177 1.172 1.04 2.314 1.998a232.905 232.905 0 004.63 3.836c3.097 2.506 6.246 4.915 9.42 7.29a293.25 293.25 0 0019.682 13.363c6.723 4.228 13.73 8.108 20.907 11.7 7.137 3.641 14.677 6.729 22.275 9.576 5.401 2.02 11.758-.61 14.2-5.88 2.184-4.715.495-9.94-3.752-12.438l-.398-.234c-6.144-3.622-12.158-7.377-17.844-11.675-5.705-4.239-11.23-8.704-16.481-13.485a257.845 257.845 0 01-15.188-14.833c-2.402-2.583-4.773-5.178-7.049-7.824a197.395 197.395 0 01-3.342-3.97l-1.596-1.98-.756-.967c-.243-.316-.504-.653-.632-.854-5.254-8.275-16.819-10.53-25.83-5.037-9.01 5.494-12.058 16.657-6.802 24.931a16.625 16.625 0 002.688 3.246l1.109 1.02z"
        />
        <path
          fill="#000"
          d="M158.843 158.427c5.4 2.045 11.758-.616 14.201-5.95 2.185-4.768.496-10.055-3.751-12.582l-.398-.237c-6.147-3.664-12.16-7.465-17.844-11.809-5.706-4.29-11.23-8.808-16.484-13.645a258.559 258.559 0 01-15.186-15.007c-2.404-2.61-4.776-5.238-7.049-7.912-.56-.658-1.098-1.32-1.647-1.981-1.49 5.157-5.476 19.74-5.406 27.897-5.195-.044-18.105-7.513-21.626-14.884-2.054-4.298-4.245-15.36-8.118-20.057-5.245 6.006-6.375 14.581-2.165 21.287a16.71 16.71 0 002.69 3.284l1.107 1.031 1.274 1.192 1.173 1.055 2.313 2.02a241.174 241.174 0 004.63 3.879c3.097 2.535 6.248 4.975 9.42 7.375a293.146 293.146 0 0019.685 13.52c6.722 4.28 13.73 8.202 20.904 11.837 7.138 3.683 14.678 6.809 22.277 9.687"
        />
        <g transform="translate(106.8 249.181)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#F4F4F4"
            d="M184.866.4c-18.707 0-35.517 1.582-47.138 4.097-7.19 1.558-14.611 1.612-21.812.08C103.86 2.016 86.266.4 66.662.4 30.296.4.815 5.956.815 12.809c0 6.853 29.481 12.41 65.847 12.41 19.603 0 37.199-1.617 49.256-4.178 7.199-1.53 14.62-1.478 21.81.08 11.619 2.517 28.43 4.098 47.138 4.098 35.072 0 63.505-5.557 63.505-12.41S219.938.399 184.866.399"
            mask="url(#b)"
          />
        </g>
        <path
          fill="#000"
          d="M297.541 238.81s9.914 7.883 17.454 10.382c7.54 2.5 8.758 6 9.002 8.25.241 2.25-12.651 3.748-28.949 3.748-16.298 0-21.195-2.749-21.439-7.498-.241-4.748 4.23-14.883 4.23-14.883s13.438-6.384 19.702 0"
        />
        <path
          fill="#201D1D"
          d="M299.915 257.55c-16.298 0-21.195-2.766-21.438-7.543-.173-3.416 2.061-9.586 3.35-12.835-2.359.738-3.985 1.507-3.985 1.507s-4.474 10.193-4.233 14.97c.246 4.776 5.143 7.541 21.441 7.541s29.19-1.506 28.947-3.77a7.66 7.66 0 00-.274-1.386c-5.198.951-13.86 1.517-23.808 1.517"
        />
        <path
          fill="#000"
          d="M148.857 242.412s-9.912 7.884-17.452 10.382c-7.542 2.5-8.758 6-9.002 8.249-.243 2.252 12.651 3.75 28.947 3.75 16.298 0 21.195-2.751 21.44-7.5.242-4.749-4.232-14.881-4.232-14.881s-13.437-6.385-19.701 0"
        />
        <path
          fill="#201D1D"
          d="M168.558 242.806s-.79-.366-2.056-.83c1.306 3.285 3.28 8.815 3.118 11.957-.244 4.665-5.14 7.366-21.44 7.366-11.053 0-20.527-.678-25.411-1.803a7.329 7.329 0 00-.366 1.613c-.241 2.213 12.651 3.684 28.949 3.684 16.298 0 21.195-2.703 21.438-7.368.244-4.665-4.232-14.619-4.232-14.619"
        />
        <path
          fill="#201D1D"
          d="M294.087 230.34c-4.629-12.82-29.396-39.786-78.081-41.4-2.316-.822-49.038-9.248-66.883 13.43-17.845 22.678-10.15 36.993-4.72 43.246 5.431 6.256 31.73 5.657 27.85-13.109-3.104-16.423 25.253-8.61 36.114-10.901 0 0 35.106 5.057 54.84 19.713 11.944 8.376 37.632 2.19 30.88-10.98"
        />
        <path
          fill="#000"
          d="M295.2 234.384c-12.464 8.461-36.672-1.114-55.821-12.101-19.162-10.992-47.287-10.365-61.967-6.853-14.68 3.508-10.97 19.73-16.533 24.284-4.277 3.5-15.382 1.087-20.479.196a27.42 27.42 0 003.779 5.67c5.44 6.318 31.782 5.715 27.895-13.238-3.107-16.586 25.293-8.695 36.172-11.01 0 0 35.163 5.11 54.929 19.909 10.606 7.5 32.019 3.433 32.025-6.857"
        />
        <path
          fill="#201D1D"
          d="M330.83 107.254l-1.274 1.177-1.174 1.04-2.312 1.998a232.911 232.911 0 01-4.63 3.836c-3.097 2.506-6.246 4.915-9.42 7.29a293.296 293.296 0 01-19.685 13.363c-6.722 4.229-13.727 8.108-20.902 11.7-7.14 3.641-14.68 6.729-22.278 9.576-5.398 2.021-11.758-.61-14.199-5.88-2.184-4.714-.498-9.94 3.75-12.438l.4-.234c6.144-3.621 12.158-7.377 17.843-11.675 5.706-4.239 11.23-8.703 16.482-13.485a257.137 257.137 0 0015.186-14.833c2.403-2.583 4.773-5.178 7.048-7.824a177.886 177.886 0 003.343-3.97l1.597-1.98.755-.967c.245-.316.506-.652.632-.854 5.253-8.275 16.82-10.53 25.832-5.037 9.01 5.494 12.056 16.657 6.802 24.931a16.625 16.625 0 01-2.688 3.247l-1.109 1.019z"
        />
        <path
          fill="#FECEA2"
          d="M90.377 74.769S76.694 59.98 69.15 40.515c-7.331-19.004-9.087 20.787-6.065 28.344 0 0-15.49.203-12.234 7.082 3.257 6.88 14.835 20.632 27.044 23.018 8.334 1.628 19.02-14.729 12.483-24.19"
        />
        <path
          fill="#000"
          d="M312.024 122.122c3.173-2.406 6.323-4.848 9.42-7.388a233.64 233.64 0 004.63-3.887l2.313-2.024 1.173-1.055 1.274-1.193 1.108-1.033a16.8 16.8 0 002.69-3.29c4.468-7.13 2.916-16.364-3.18-22.394-4.54 3.8-6.934 16.483-9.165 21.16-3.52 7.385-16.434 14.867-21.629 14.911.063-7.348-3.15-19.88-4.881-26.09l-.107.127c-2.276 2.681-4.647 5.312-7.051 7.929a258.057 258.057 0 01-15.187 15.03c-5.251 4.848-10.776 9.373-16.482 13.669-5.686 4.353-11.7 8.16-17.845 11.83l-.398.236c-4.247 2.533-5.936 7.83-3.751 12.607 2.44 5.34 8.8 8.005 14.2 5.96 7.598-2.886 15.139-6.018 22.279-9.705 7.175-3.643 14.182-7.572 20.903-11.857a293.137 293.137 0 0019.686-13.543"
        />
        <path
          fill="#B59458"
          d="M278.678 203.548a5.71 5.71 0 01-3.13-.933L154.984 123.94a5.68 5.68 0 01-1.648-7.887c1.733-2.63 5.285-3.359 7.917-1.64l120.56 78.677a5.683 5.683 0 011.65 7.887 5.722 5.722 0 01-4.786 2.571"
        />
        <path
          fill="#201D1D"
          d="M245.172 133.185c-10.824-12.28-29.615-16.714-38.053-18.138a25.867 25.867 0 00-8.638 0c-8.438 1.424-27.229 5.858-38.053 18.138-6.292 7.668-3.006 49.936 6.56 61.957h71.623c9.567-12.021 12.853-54.29 6.56-61.957"
        />
        <path
          fill="#201D1D"
          d="M245.149 134.323a38.948 38.948 0 00-4.268-4.028c.243 1.744.42 3.658.51 5.729 1.107 25.665-19.885 46.984-45.844 46.984H160.8c1.508 5.101 3.388 9.413 5.611 12.134h72.131c9.634-11.8 12.944-53.292 6.607-60.82"
        />
        <path
          fill="#CDCACA"
          d="M229.2 121.555c-8.296-3.828-16.72-5.688-21.624-6.513a25.735 25.735 0 00-8.566 0c-4.86.819-13.182 2.653-21.41 6.411 9.41 10.432 25.693 29.257 25.693 29.257l25.907-29.155z"
        />
        <path
          fill="#201D1D"
          d="M207.977 151.524l25.415-27.49a67.492 67.492 0 00-6.54-3.05l-23.464 25.383-22.842-25.68a70.428 70.428 0 00-6.546 2.977l63.591 71.478h1.877c1.056-1.304 2.03-2.987 2.932-4.926l-34.423-38.692z"
        />
        <path
          fill="#000"
          d="M244.527 186.333c-73.468-8.26-83.295-56.008-83.685-58.072-.234-1.24.53-2.457 1.698-2.721 1.179-.257 2.306.53 2.54 1.767.128.633 10.297 48.26 83.767 54.847 1.26.124 2.055 1.22 1.942 2.48-.117 1.264-1.172 2.2-2.36 2.093-1.318-.12-2.625-.253-3.902-.394"
        />
        <path
          fill="#929497"
          d="M373.023 88.783a3.095 3.095 0 01-2.045-5.84 3.091 3.091 0 013.94 1.896 3.098 3.098 0 01-1.895 3.944m12.264-8.742l-9.682-.66a1.182 1.182 0 01-.796-.38l-6.557-7.162c-.71-.77-1.996-.319-2.067.726l-.659 9.69c-.02.306-.158.59-.385.796l-7.151 6.565c-.775.706-.323 1.995.723 2.066l9.682.66c.304.02.59.157.798.382l6.555 7.162c.708.77 1.996.319 2.067-.726l.659-9.69c.02-.304.158-.59.385-.799l7.151-6.562c.775-.706.323-1.997-.723-2.068m3.335-30.889a3.087 3.087 0 01-3.939-1.897 3.097 3.097 0 011.895-3.944 3.094 3.094 0 012.044 5.841m12.265-8.74l-9.681-.659a1.196 1.196 0 01-.798-.38l-6.557-7.162c-.708-.771-1.996-.321-2.067.725l-.659 9.688a1.186 1.186 0 01-.383.799l-7.154 6.564c-.772.706-.32 1.995.725 2.066l9.681.66c.304.02.59.156.798.383l6.557 7.161c.706.77 1.996.32 2.067-.726l.659-9.69a1.2 1.2 0 01.383-.798l7.154-6.562c.772-.707.32-1.998-.725-2.068m-43.465-20.081a3.094 3.094 0 01-2.043-5.84 3.094 3.094 0 012.043 5.84m12.265-8.74l-9.681-.659a1.189 1.189 0 01-.798-.383l-6.557-7.16c-.708-.772-1.996-.32-2.067.724l-.659 9.69a1.181 1.181 0 01-.383.797l-7.154 6.564c-.772.708-.32 1.995.725 2.066l9.681.659c.304.021.59.158.798.385l6.557 7.16c.706.772 1.996.32 2.067-.724l.659-9.692c.021-.304.156-.59.383-.796l7.154-6.562c.772-.709.32-1.998-.725-2.068M28.283 90.843a3.092 3.092 0 115.836 2.047 3.095 3.095 0 01-3.94 1.897 3.096 3.096 0 01-1.896-3.944m-11.095-2.727l7.154 6.562c.227.205.364.492.383.796l.661 9.69c.069 1.047 1.357 1.498 2.065.723l6.557-7.157c.205-.227.492-.364.798-.385l9.683-.66c1.044-.07 1.495-1.357.723-2.067l-7.154-6.562a1.186 1.186 0 01-.383-.797l-.66-9.689c-.07-1.047-1.358-1.499-2.066-.724l-6.557 7.157a1.187 1.187 0 01-.798.386l-9.683.659c-1.044.07-1.495 1.36-.723 2.068m-5.706-45.307a3.093 3.093 0 115.838 2.046 3.093 3.093 0 01-5.838-2.046M.387 40.08l7.156 6.562c.225.205.362.492.383.796l.659 9.69c.07 1.047 1.359 1.498 2.065.723l6.557-7.157a1.2 1.2 0 01.798-.385l9.683-.66c1.044-.07 1.495-1.357.725-2.067l-7.156-6.562a1.195 1.195 0 01-.383-.796l-.657-9.69c-.073-1.047-1.36-1.499-2.067-.724l-6.56 7.157a1.187 1.187 0 01-.795.386l-9.683.659c-1.044.07-1.495 1.36-.725 2.068m45.895-26.092a3.093 3.093 0 115.838 2.046 3.093 3.093 0 01-5.838-2.046M35.187 11.26l7.154 6.562c.227.205.364.492.383.796l.661 9.69c.069 1.047 1.356 1.498 2.065.723l6.557-7.157c.207-.226.492-.363.798-.385l9.683-.66c1.044-.07 1.495-1.357.725-2.067L56.057 12.2a1.186 1.186 0 01-.383-.796l-.657-9.69C54.944.667 53.657.215 52.95.99l-6.56 7.157a1.187 1.187 0 01-.795.386l-9.683.66c-1.044.07-1.495 1.359-.725 2.067"
        />
        <path
          fill="#3C2415"
          d="M383.91 64.799c-1.928.493-3.827.614-5.723.646-1.895.042-3.76-.368-5.636-.585a341.729 341.729 0 01-11.252-1.498.109.109 0 01-.097-.127.11.11 0 01.11-.094c3.791-.083 7.578-.106 11.36-.066 1.89.024 3.794-.146 5.669.136 1.872.27 3.74.63 5.584 1.365a.112.112 0 01.064.153.122.122 0 01-.079.07m-5.925-36.398c-.944 1.75-2.157 3.215-3.431 4.613-1.266 1.405-2.858 2.472-4.307 3.68a340.098 340.098 0 01-8.856 7.114.122.122 0 01-.167-.02.118.118 0 01.005-.15 335.738 335.738 0 017.74-8.295c1.313-1.357 2.49-2.861 3.989-4.02 1.49-1.17 3.045-2.271 4.868-3.091a.125.125 0 01.164.061.123.123 0 01-.005.108m-4.942 82.672c-2.237-.754-4.26-1.828-6.233-2.984-1.976-1.14-3.692-2.673-5.518-4.041a482.372 482.372 0 01-10.848-8.37.117.117 0 01-.018-.166.114.114 0 01.147-.027 472.908 472.908 0 0111.751 7.026c1.94 1.2 3.993 2.234 5.78 3.657 1.797 1.411 3.541 2.902 5.068 4.713a.124.124 0 01-.013.17.114.114 0 01-.116.022M340.445 7.87c.395.915.359 1.784.35 2.646-.027.851-.144 1.69-.29 2.51-.282 1.653-1.045 3.165-1.633 4.719a157.536 157.536 0 01-3.843 9.206c-.027.059-.096.085-.157.059a.116.116 0 01-.07-.13 723.05 723.05 0 012.256-9.655c.39-1.601.559-3.256 1.165-4.786.55-1.54 1.335-3.032 1.993-4.51l.027-.058a.11.11 0 01.144-.056.11.11 0 01.058.056M21.69 66c1.926.492 3.827.614 5.722.645 1.894.043 3.76-.367 5.637-.584 3.756-.438 7.505-.935 11.252-1.498a.11.11 0 00.097-.127.112.112 0 00-.112-.094 349.096 349.096 0 00-11.358-.066c-1.89.024-3.796-.146-5.668.136-1.875.27-3.74.63-5.584 1.364a.114.114 0 00-.067.153c.016.034.047.06.082.07m5.923-36.397c.944 1.75 2.157 3.215 3.431 4.613 1.268 1.405 2.858 2.471 4.31 3.68a332.8 332.8 0 008.856 7.114.12.12 0 00.164-.02.116.116 0 00-.005-.15 335.74 335.74 0 00-7.74-8.296c-1.313-1.356-2.49-2.86-3.989-4.019-1.492-1.17-3.046-2.271-4.868-3.091a.121.121 0 00-.162.061.123.123 0 00.003.108m6.144 82.672c2.238-.754 4.26-1.828 6.231-2.984 1.979-1.14 3.693-2.674 5.52-4.041a487.399 487.399 0 0010.849-8.37.12.12 0 00.017-.166.117.117 0 00-.149-.027 481.096 481.096 0 00-11.75 7.025c-1.94 1.2-3.992 2.235-5.78 3.658-1.795 1.411-3.54 2.902-5.067 4.713a.12.12 0 00.013.17.113.113 0 00.116.022M65.155 9.072c-.393.914-.36 1.783-.35 2.645.027.851.146 1.69.29 2.51.282 1.653 1.045 3.165 1.636 4.718a154.496 154.496 0 003.842 9.207.118.118 0 00.155.058.116.116 0 00.07-.13 683.634 683.634 0 00-2.256-9.654c-.39-1.601-.56-3.256-1.165-4.786-.548-1.54-1.338-3.032-1.993-4.51l-.027-.058a.11.11 0 00-.144-.057.112.112 0 00-.058.057"
        />
        <path
          fill="#DF0000"
          d="M204.208 198.745c-23.797 0-41.145-2.8-42.227-2.978-3.108-.516-5.213-3.471-4.706-6.606.508-3.133 3.462-5.26 6.548-4.748.384.065 38.896 6.256 79.205-.01 3.121-.491 6.026 1.673 6.505 4.81.479 3.14-1.656 6.078-4.769 6.56-14.331 2.228-28.299 2.972-40.556 2.972"
        />
        <path
          fill="#DF0000"
          d="M210.935 192.74c1.66.71 2.873 1.417 4.19 2.28 1.294.838 2.5 1.778 3.686 2.76 2.35 1.982 4.484 4.226 6.468 6.614 2.005 2.384 3.748 4.952 5.427 7.597.827 1.327 1.569 2.686 2.359 4.055l2.135 4.18-17.45 4.938-.231-3.819c-.145-1.243-.253-2.537-.437-3.794-.388-2.505-.847-5.046-1.567-7.486-.7-2.447-1.567-4.878-2.686-7.18-.568-1.14-1.174-2.284-1.865-3.346-.65-1.052-1.519-2.16-2.164-2.922l2.135-3.877zm-9.07 0c-1.66.71-2.873 1.417-4.19 2.28-1.294.838-2.497 1.778-3.686 2.76-2.35 1.982-4.482 4.226-6.468 6.614-2.005 2.384-3.748 4.952-5.424 7.597-.828 1.327-1.57 2.686-2.36 4.055l-2.137 4.18 17.45 4.938.231-3.819c.147-1.243.253-2.537.44-3.794.385-2.505.844-5.046 1.564-7.486.702-2.447 1.567-4.878 2.686-7.18.568-1.14 1.174-2.284 1.867-3.346.648-1.052 1.517-2.16 2.162-2.922l-2.135-3.877z"
        />
        <path
          fill="#FECEA2"
          d="M317.622 73.568s13.683-14.788 21.23-34.254c7.329-19.004 9.087 20.787 6.063 28.344 0 0 15.49.203 12.236 7.082-3.26 6.88-14.837 20.632-27.043 23.018-8.335 1.628-19.023-14.728-12.486-24.19"
        />
        <path
          fill="#DF0000"
          d="M268.474 76.948l.752-.781.649-.651c.424-.407.852-.832 1.284-1.199a44.19 44.19 0 012.642-2.207c.901-.71 1.85-1.342 2.79-2.01.977-.601 1.95-1.227 2.96-1.8a43.875 43.875 0 0113.356-4.912c4.768-.91 9.853-1.18 14.747-.446 2.516.212 4.845.886 7.271 1.454 2.378.64 4.598 1.555 6.925 2.383l-11.803 21.766c-1.164-.753-2.319-1.708-3.529-2.415-1.218-.626-2.44-1.467-3.725-1.894-2.544-1.186-5.248-1.753-8.096-2.015-2.844-.256-5.848.003-8.85.775-.746.195-1.485.439-2.245.652-.726.282-1.488.53-2.211.84-.725.315-1.453.631-2.143.993-.364.171-.676.356-1.013.538l-.465.258c-.153.09-.31.184-.334.164l-8.962-9.493z"
        />
        <path
          fill="#97CCEF"
          d="M223.659 110.98c-6.504-2.973-13.109-4.417-16.953-5.057a20.367 20.367 0 00-6.715 0c-3.81.635-10.335 2.06-16.785 4.978 7.377 8.1 20.143 22.717 20.143 22.717l20.31-22.638z"
        />
        <path
          fill="#F6931E"
          d="M202.466 124.1c-14.202 0-23.52-6.145-24.092-6.533-3.17-2.146-3.774-6.16-1.353-8.966 2.412-2.795 6.914-3.338 10.08-1.23.676.438 14.117 8.832 32.628-.453 3.473-1.737 7.878-.658 9.845 2.416 1.966 3.073.746 6.977-2.725 8.717-9.021 4.522-17.307 6.049-24.383 6.049"
        />
        <path
          fill="#DF0000"
          d="M257.074 64.855c.023-.07.176-.268.297-.43l.382-.535c.264-.364.522-.743.777-1.142.522-.76.999-1.599 1.485-2.397.928-1.663 1.803-3.344 2.546-5.09 1.488-3.478 2.688-7.039 3.384-10.673.687-3.632 1.166-7.236 1.093-10.863.087-1.784-.141-3.606-.234-5.375-.146-1.778-.505-3.56-.721-5.3l24.718-.54c-.346 2.501-.584 4.973-1.065 7.422-.536 2.452-.962 4.883-1.734 7.261-1.289 4.784-3.242 9.362-5.433 13.696-2.205 4.346-4.942 8.362-7.947 12.064-1.502 1.856-3.133 3.603-4.816 5.283-.879.82-1.721 1.644-2.656 2.427-.448.394-.918.785-1.406 1.17l-.743.585-.868.656-7.06-8.22z"
        />
        <path
          fill="#201D1D"
          d="M281.857 41.552C268.51 24.63 203.912 28.01 203.912 28.01s-78.133-2.875-77.944 77.625c.188 33.062 37.511 50.363 77.944 50.363 40.434 0 77.755-17.301 77.945-50.363.035-14.618-2.524-26.477-6.719-36.112-.002-.007-.002-.012-.002-.019-3.38-14.554 19.728-11.456 6.72-27.952"
        />
        <path
          fill="#000"
          d="M281.857 41.552c-1.254-1.589-2.962-3-5.023-4.25 10.23 14.664-11.193 12.266-7.931 26.318l.001.012c4.197 9.643 6.756 21.5 6.72 36.12-.189 33.06-37.51 50.364-77.944 50.364-23.87 0-46.65-6.036-61.35-17.778 13.889 15.605 40.006 23.66 67.582 23.66 40.434 0 77.755-17.301 77.945-50.363.035-14.618-2.524-26.477-6.719-36.112-.002-.007-.002-.012-.002-.019-3.38-14.554 19.728-11.456 6.72-27.952"
        />
        <path
          fill="#FECEA2"
          d="M263.343 93.65c-10.8-20.578-38.444-20.576-59.43-20.576-20.988 0-48.634-.002-59.432 20.576-10.558 20.118-1.557 44.35 22.426 44.346 1.906 0 14.231-1.294 24.141-3.236a66.908 66.908 0 0125.728 0c9.91 1.942 22.235 3.236 24.141 3.236 23.983.003 32.984-24.228 22.426-44.346"
        />
        <path
          fill="#201D1D"
          d="M241.59 115.38c0 9.198-4.56 16.652-10.188 16.652-5.627 0-10.189-7.454-10.189-16.652s4.562-16.653 10.189-16.653c5.628 0 10.188 7.455 10.188 16.653"
        />
        <path
          fill="#FFF"
          d="M238.28 108.803c0 3.633-1.802 6.577-4.023 6.577-2.224 0-4.024-2.944-4.024-6.577 0-3.632 1.8-6.575 4.024-6.575 2.221 0 4.023 2.943 4.023 6.575"
        />
        <path
          fill="#201D1D"
          d="M186.61 115.38c0 9.198-4.56 16.652-10.188 16.652-5.626 0-10.188-7.454-10.188-16.652s4.562-16.653 10.188-16.653c5.628 0 10.189 7.455 10.189 16.653"
        />
        <path
          fill="#FFF"
          d="M183.3 108.803c0 3.633-1.802 6.577-4.024 6.577-2.221 0-4.024-2.944-4.024-6.577 0-3.632 1.803-6.575 4.024-6.575 2.222 0 4.024 2.943 4.024 6.575"
        />
        <path
          fill="#DF0000"
          d="M204.08 49.336c-28.335 0-49.962 4.215-64.976 8.705-3.222 4.582-6.018 9.86-8.189 15.942 12.664-5.015 37.177-12.261 73.165-12.261 39.167 0 63.386 8.993 73.266 13.626-.68-2.02-1.403-3.976-2.208-5.825-.002-.007-.002-.012-.002-.019-.825-3.556-.065-6.054 1.358-8.046-13.337-5.325-37.248-12.122-72.414-12.122"
        />
        <path
          fill="#000"
          d="M214.274 100.98l-2.693-8.55 36.157-11.628 2.695 12.088zm-20.724 0l-36.159-8.09 2.693-12.088 36.159 11.629z"
        />
        <path
          fill="#E5A876"
          d="M257.074 131.645c0 2.078-4.442 3.761-9.924 3.761-5.48 0-9.921-1.683-9.921-3.76 0-2.079 4.441-3.763 9.921-3.763 5.482 0 9.924 1.684 9.924 3.762m-106.324 0c0 2.078 4.444 3.761 9.924 3.761 5.48 0 9.922-1.683 9.922-3.76 0-2.079-4.442-3.763-9.922-3.763s-9.923 1.684-9.923 3.762"
        />
        <g fill="#FFF" fillRule="nonzero">
          <path d="M224.485 57.352c-.187.631-.758 1.243-1.328 1.396-.44.076-.758.019-.973-.134-.234-.162-.374-.45-.44-.717a1.468 1.468 0 01-.028-.277c0-.583.3-1.147.852-1.567.318-.23.748-.316 1.122-.23.215.048.505.182.692.526.103.181.15.42.15.65 0 .115-.01.239-.047.353zm-22.012 0c-.177.64-.71 1.233-1.281 1.377-.421.086-.805.038-1.02-.115-.234-.162-.365-.44-.44-.717-.028-.124-.028-.19-.028-.277 0-.583.3-1.147.852-1.567.318-.23.748-.316 1.122-.23.215.048.505.182.693.526.102.181.159.42.159.65-.01.115-.028.239-.057.353zm23.453-2.57a.146.146 0 00-.038-.106c-.028-.038-.074-.048-.112-.048h-.786a.152.152 0 00-.15.115l-.055.306a1.719 1.719 0 00-.6-.363l-.074-.038c-.01 0-.019-.01-.028-.01-.851-.191-1.703.076-2.404.746a3.433 3.433 0 00-.786 1.137l.767-4.33a.135.135 0 00-.019-.105.114.114 0 00-.093-.048H220.5a.111.111 0 00-.084.048s-3.143 4.292-3.64 4.865c.179-.717.833-4.76.833-4.76v-.029c0-.028-.009-.066-.028-.086a.111.111 0 00-.084-.047h-1.104a.098.098 0 00-.084.047l-5.267 6.328c-.084-.918-.514-1.921-.514-1.921-.692-1.472-2.217-1.97-3.115-1.176-.047.02-.103.038-.14.067.682-.975 2.254-.898 3.283.325a6 6 0 00.804 1.453c.094-.306.14-.622.16-.947a5.838 5.838 0 00-1.17-1.223c-1.29-.898-2.816-.564-3.246.545a.73.73 0 00-.112.181c.121-1.204 1.525-1.95 3.003-1.424 0 0 .72.278 1.44.88l-.028-.144a4.394 4.394 0 00-.337-.908c-.841-.382-1.59-.449-1.59-.449-1.59-.115-2.778 1.032-2.535 2.256v.067c0 .038 0 .076.01.105-.534-1.109.327-2.533 1.889-2.848 0 0 .73-.134 1.637.01a4.034 4.034 0 00-.776-.66c-.908.114-1.581.43-1.581.43-1.44.726-1.909 2.341-1.104 3.269a.828.828 0 00.093.152c-1.01-.678-.954-2.36.253-3.45 0 0 .57-.487 1.413-.841a4.19 4.19 0 00-1.086-.153 5.808 5.808 0 00-1.113 1.166c-.898 1.386-.524 3.04.646 3.412v.01l.018.01a.735.735 0 00.113.066c-1.198-.067-1.956-1.558-1.441-3.125 0 0 .243-.679.776-1.396a3.984 3.984 0 00-.86.354c-.346.85-.412 1.587-.412 1.587-.112 1.644.982 2.867 2.142 2.628h.075c.038 0 .084 0 .122-.01-1.067.545-2.432-.344-2.741-1.959 0 0-.122-.736 0-1.644a4.073 4.073 0 00-.664.87 5.94 5.94 0 00.411 1.558c.702 1.5 2.274 1.988 3.172 1.128h.009l.019-.01a.78.78 0 00.112-.076c-.655 1.051-2.283 1.003-3.33-.249 0 0-.515-.707-.796-1.53a.29.29 0 00-.056-.104.176.176 0 00-.121-.048h-.786c-.075 0-.131.038-.168.124 0 0-.047.096-.066.287a1.82 1.82 0 00-.561-.335s-.103-.038-.112-.038c-.852-.21-1.712.067-2.414.746a3.3 3.3 0 00-.87 1.376s-.01.01-.019.029l.356-1.988a.143.143 0 00-.038-.125.145.145 0 00-.112-.057h-.87a.152.152 0 00-.15.134l-.879 4.855c-.01.048 0 .096.038.125.028.038.074.028.112.028h.87c.075 0 .14-.028.15-.105l.346-1.988c0 .01.018.42.056.621.13.746.767 1.444 1.459 1.587.599.115 1.244-.048 1.88-.45a7.214 7.214 0 01-.028.182v.029c0 .038.01.057.028.086.028.038.075.048.122.048h.776c.075 0 .14-.029.15-.105l.683-3.852a9.366 9.366 0 001.188 1.175c1.291.908 2.835.564 3.255-.563a.95.95 0 00.103-.163c-.121 1.204-1.524 1.95-3.002 1.415 0 0-.655-.249-1.348-.803.01.028.01.057.02.076.083.335.196.64.355.937a5.606 5.606 0 001.496.41c1.581.116 2.76-1.022 2.536-2.226.009-.038.009-.077.009-.124v-.048c.496 1.109-.356 2.494-1.908 2.81 0 0-.693.124-1.553 0 .205.23.44.43.701.602a5.704 5.704 0 001.562-.43c1.404-.707 1.89-2.275 1.151-3.212a.829.829 0 00-.103-.181c.964.698.898 2.351-.29 3.422 0 0-.58.497-1.431.85.337.115.683.191 1.038.201.74-.573 1.179-1.214 1.179-1.214.898-1.386.524-3.03-.636-3.412a.74.74 0 00-.15-.077c1.207.067 1.965 1.549 1.45 3.126 0 0-.262.736-.842 1.491l.14-.029c.29-.076.571-.19.833-.325.356-.87.421-1.634.421-1.634.112-1.615-.945-2.83-2.095-2.638-.047-.01-.094-.02-.14-.02h-.029c1.057-.477 2.376.412 2.676 1.998 0 0 .177.756.047 1.644a2.136 2.136 0 01-.29.717v.01c-.02.028-.02.076-.01.114a.115.115 0 00.103.067h1.235c.037 0 .065-.019.093-.038 0 0 4.08-4.55 4.547-5.132-.178.965-.543 3.287-.87 5.027v.029c0 .028.01.057.028.076a.114.114 0 00.093.048h.973c.038 0 .066-.02.085-.038 0 0 3.283-4.54 3.77-5.133-.206.965-.543 3.307-.88 5.028v.028c0 .029.01.048.028.077a.111.111 0 00.084.048h.955c.056 0 .093-.039.112-.096l.355-2.112v.133c0 .201-.065.402-.037.603.13.745.767 1.443 1.46 1.586.598.115 1.243-.048 1.88-.449l-.028.182v.028c0 .038.009.067.037.096.028.038.075.029.112.029h.777c.075 0 .14-.03.15-.106l.701-3.87.103-1.08zm5.529 4.597c-.347-.583-1.338-2.275-1.432-2.418.122-.144 1.357-1.711 1.61-2.017l-.113.602c-.01.048 0 .096.028.124a.145.145 0 00.112.058h.43c-.037.277-.504 2.829-.635 3.65zm3.021-4.693a.145.145 0 00-.112-.058h-.88c.047-.277.244-1.347.244-1.347v-.029a.146.146 0 00-.038-.105.145.145 0 00-.112-.057h-.87a.152.152 0 00-.15.133l-.252 1.405h-.487c-.056 0-.103.02-.13.067a.136.136 0 00-.122-.067h-1.001a.153.153 0 00-.112.048s-.711.927-1.123 1.396c.122-.736.496-2.791.496-2.791v-.029a.146.146 0 00-.038-.105.145.145 0 00-.112-.057h-.86a.152.152 0 00-.15.133c-.019.125-.14.698-.253 1.415v-.01a.159.159 0 00-.121-.066c-.356.01-.758.162-1.039.353l.019-.115c.01-.047 0-.095-.028-.124-.028-.038-.075-.048-.112-.048h-.786a.152.152 0 00-.15.115l-.019.124-.841 4.76c-.01.048.009.086.037.124a.12.12 0 00.122.048h.748c.075 0 .13-.048.15-.124l.58-2.953c.187-.746.664-.975 1.094-1.033.019 0 .112 0 .122-.01-.29 1.788-.636 3.91-.636 3.948-.01.048.009.086.037.124a.145.145 0 00.112.058h.842a.14.14 0 00.14-.105c.029-.086.244-1.3.365-2.036.31.497 1.226 2.074 1.226 2.074a.136.136 0 00.121.067h.945c.019 0 .038-.02.056-.029.02.01.047.029.066.029h.982c.075 0 .131-.058.15-.124 0 0 .664-3.709.701-3.948h.945c.075 0 .14-.057.15-.134l.13-.793v-.029c-.018-.038-.027-.067-.046-.095zM196.3 56.999c0 .153-.018.239-.046.353-.16.65-.73 1.243-1.3 1.386-.44.086-.777.029-1.002-.114a1.18 1.18 0 01-.44-.717c-.028-.115-.028-.191-.028-.287 0-.583.319-1.147.87-1.577a1.43 1.43 0 011.123-.23c.215.048.477.201.674.536.103.172.159.41.15.65zm-7.268-.392c.233-.468.73-.746 1.16-.812.467-.039.673.086.879.267.187.191.271.373.29.545-.243.01-1.974 0-2.33 0zm8.905-3.45a.145.145 0 00-.112-.058h-.786c-.075 0-.13.058-.15.124 0 0-.27 1.358-.364 1.807-.178-.163-.384-.258-.57-.344l-.076-.038c-.009 0-.018-.01-.028-.01-.851-.191-1.712.076-2.404.746a3.33 3.33 0 00-.88 1.376 2.985 2.985 0 00-.28-1.147s0-.01-.01-.01c-.41-.707-1.094-1.051-1.982-1.003h-.01c-.982.124-1.964.803-2.441 1.768-.01.02-.02.029-.02.048l.75-4.225a.135.135 0 00-.02-.105.114.114 0 00-.093-.048h-1.02a.138.138 0 00-.084.038s-3.171 4.282-3.667 4.856c.15-.727.823-4.76.823-4.76v-.029a.11.11 0 00-.028-.076.111.111 0 00-.084-.048h-.992a.111.111 0 00-.084.048l-6.296 7.532c-.028.038-.037.086-.018.124.018.038.056.076.103.076h1.263c.037 0 .065-.019.093-.048 0 0 3.985-4.692 4.462-5.275-.177.965-.552 3.43-.916 5.17v.029c0 .029.009.057.028.076a.114.114 0 00.093.048h.973a.097.097 0 00.084-.048s3.312-4.683 3.798-5.275c-.206.965-.514 3.46-.916 5.18v.029c0 .028.009.047.028.076a.114.114 0 00.093.048h.936c.056 0 .093-.038.112-.096l.355-1.988c0 .43.075.841.253 1.185.346.631.973 1.014 1.721 1.042 1.076 0 2.105-.669 2.554-1.663a.176.176 0 00-.01-.153.149.149 0 00-.13-.076h-.805a.132.132 0 00-.112.057c-.384.44-.814.67-1.272.688a1.08 1.08 0 01-1.067-.755.778.778 0 01-.047-.22c0-.019 0-.028.01-.047h3.61c.038 0 .076-.02.104-.039 0 .201.01.402.046.602.131.746.768 1.444 1.46 1.587.599.115 1.244-.048 1.88-.45l-.028.182v.03c0 .037.01.066.037.095.029.038.075.028.113.028h.776c.075 0 .14-.028.15-.105l1.141-6.423a.191.191 0 00-.047-.133zm.253 1.328h.87c.075 0 .14-.076.15-.153l.187-1.051c.01-.048 0-.096-.028-.124a.145.145 0 00-.113-.058h-.87a.152.152 0 00-.15.134l-.177 1.042c-.01.048 0 .114.028.153.01.028.056.057.103.057zm36.175-.908h.13c.038 0 .113-.01.113-.086 0-.038-.028-.076-.103-.076h-.14v.162zm0 .335h-.122v-.593h.272c.037 0 .215 0 .215.182 0 .114-.075.143-.103.162l.103.258h-.131l-.094-.239h-.14v.23zm.103.162c.243 0 .44-.21.44-.459a.446.446 0 00-.44-.458c-.243 0-.44.2-.44.458 0 .249.197.46.44.46zm0-1.013a.54.54 0 01.533.554.541.541 0 01-.533.555.541.541 0 01-.533-.555c0-.315.233-.554.533-.554z" />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent