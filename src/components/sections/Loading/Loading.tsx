

const sizes = {
 xs: 'loading-xs',
 sm: 'loading-sm',
 md: 'loading-md',
 lg: 'loading-lg',
} as const

const loadings = {
 dots: 'loading-dots',
 spinner: 'loading-spinner',
 ring: 'loading-ring',
 ball: 'loading-ball',
 bars: 'loading-bars',
 infinity: 'loading-infinity'
}

type Props = {
 size?: keyof typeof sizes
 type?: keyof typeof loadings
}

function Loading({size = 'lg' , type = 'dots'}: Props) {
  return (
    <span className={`loading ${loadings[type]} ${sizes[size]}`}></span>
  )
}

export default Loading;