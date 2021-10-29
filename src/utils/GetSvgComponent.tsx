import React from 'react'
import { ProductLineSvgComponent } from './ProductLineSvgComponent'

interface ProductLineSvgComponentProps {
  filteredPaths: JSX.Element
  danonePaths?: JSX.Element
}

const getSvgComponent = ({ filteredPaths, danonePaths }: ProductLineSvgComponentProps) => {
  const Component = (props: React.SVGProps<SVGSVGElement>) => (
    <ProductLineSvgComponent {...props} filteredPaths={filteredPaths} danonePaths={danonePaths} />
  )

  return React.memo(Component)
}

export default getSvgComponent
