import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 12" {...props}>
      <path
        fill="#242424"
        fillRule="evenodd"
        d="M20.884 10.016c-.383-1.135-2.018-2.861-4.086-4.397-.028-.03-.078-.068-.078-.068l-.074-.056c0 .007.02.276.02.405v.259l.021.022c1.252 1.012 2.572 2.41 2.795 3.43.06.285.039.544-.062.757-.13.258-.383.44-.726.55-1.786.6-6.051-.563-9.541-2.27-2.483-1.222-4.67-2.677-6.154-4.112-1.381-1.326-1.745-2.36-1.393-2.981.132-.243.374-.414.688-.534C3.43.58 5.72.921 7.867 1.563a5.741 5.741 0 00-2.178 2.876c.004.293.177 1.537 2.71 2.79 0 0 4.442 2.448 6.894 2.409.28-.36.522-.758.717-1.193 1.271-2.84.058-6.143-2.708-7.45.026.01.053.02.079.032-.034-.015-.067-.03-.1-.043l.019.01a5.63 5.63 0 00-4.85.216C4.867-.012 2.09-.191.99.158.559.3.266.529.114.82c-.15.3-.15.695 0 1.134.49 1.456 2.63 3.454 5.334 5.24a5.606 5.606 0 003.178 4.226 5.654 5.654 0 004.99-.328c2.68.842 5.042 1.143 6.341.71.453-.152.796-.375.947-.672.142-.291.122-.685-.02-1.116h.001zM8.27 11.073l-.09-.044-.018-.007c.036.018.071.034.108.05z"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent