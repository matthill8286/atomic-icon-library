# @matthill8286/atomic-icon-library

Builds all SVGs as react components.

## Overall goal of this lib

Having a 3rd party plugin which built the SVGs during bundling is very handy because and it comes with almost no effort. But it does not solve an issue with having different SVGs for each theme (or product line).

You'd need to decide on which icon to use on the component level like so:

```typescript
    case 'bookmark':
      return isPrimary ? <SvgBookmarkPrimary /> : <SvgBookmarkContent />
    case 'history':
      return isContent ? <SvgHistoryContent /> : <SvgHistoryPrimary />
```

These are just some loose icons. But we could have a different icon set for the content theme with a number of icons.
One of these is e.g. the `Arrow` icon which would be used over 20 times, which would be 20 implemented if else cases:

```html
const isPrimary = useContext(ThemeContext)

<Icon>
 {isPrimary ? <SvgArrowPrimary /> : <SvgArrowContent />}
</Icon>
```

Now you can just do it like this:

```html
<Icon>
 <SvgArrow/>
</Icon>
```

The Icon decides for itself which theme to use.

## Adding SVGs

The svgs folder currently holds 3 different categories:

* common
* primary
* content

If you have a styleguide icon you can put it in the `primary/styleguide` folder. If the icon also exists for content you can put the content one into `content/styleguide`. These two SVGs will be combined into a react component which is aware of the theme and decides which svg path to use during runtime.

Once you added your svg...

Please keep in mind that the file name should be in **kebabe case** (e.g. `material-arrow.svg`).
Then execute `yarn build:svg`. It will execute the buildComponents script and generate react components from the SVGs.

The name of the react component depends on the folder and is converted to pascal case. E.g. if you added your `material-arrow.svg` into the folder in *svgs/common/icons*, it will be named `IconsMaterialArrow.tsx`.

Thats it you can now use your svg react component :)

## Usage

You can use a named import like `import { IconsMaterialArrow } from @matthill8286/atomic-icon-library`.

## What is under the hood

The components are prebuild with the `buildComponents.ts` script. It uses a [queue](https://caolan.github.io/async/v3/docs.html#queue) and a worker function to convert multiple files in parallel.

Based on the folder the worker decides on how to convert the svg. `common` SVGs are converted with [svgo](https://github.com/svg/svgo) and [svgr](https://github.com/gregberge/svgr). Th output is the `src/components/**` directory.

`primary` and `content` are combined into one component. This is done by extracting the paths and adding them into a `mustache` template which is basically a function that returns the svg react component. The output looks like this:

```html
import * as React from 'react'
import getSvgComponent from '../../../src/utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="somePath" />
  ),
  danonePaths: (
    <path d="someOtherPath" />
  ),
})
```

which renders a component that returns jsx with the path based on the product line name:

```html
    <svg>
      {pathProps[name]}
    </svg>
```
