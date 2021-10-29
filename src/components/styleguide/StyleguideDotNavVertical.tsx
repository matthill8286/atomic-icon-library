import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  filteredPaths: (
    <React.Fragment>
      <defs>
        <path
          d="M12 17a2 2 0 110 4 2 2 0 010-4zm0-7a2 2 0 110 4 2 2 0 010-4zm0-7a2 2 0 110 4 2 2 0 010-4z"
          id="a"
        />
      </defs>
      <g transform="translate(-10 -3)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" />
        <g mask="url(#b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </React.Fragment>
  ),
  danonePaths: (
    <React.Fragment>
      <defs>
        <path
          d="M12 17a2 2 0 110 4 2 2 0 010-4zm0-7a2 2 0 110 4 2 2 0 010-4zm0-7a2 2 0 110 4 2 2 0 010-4z"
          id="a"
        />
      </defs>
      <g transform="translate(-10 -3)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" />
        <g mask="url(#b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </React.Fragment>
  ),
})
