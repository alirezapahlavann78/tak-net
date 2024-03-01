import {ButtonColorsType, ButtonProps, ButtonSizesType, ButtonVarientsType} from "@/components/Button/Button";

function useButtonStyles(
  {className = {}, variant = 'filled', size = 'full-width', color = 'primary', disable}:
    Partial<ButtonProps>
) {

  const buttonStylesColors: Record<ButtonColorsType, Record<ButtonVarientsType, string>> = {
    'primary': {
      'outlined': 'text-primary border border-primary bg-transparent hover:bg-primary/5 hover:border-primary',
      'filled': 'bg-primary border-none text-white hover:bg-primary/90',
    },
    'green': {
      'outlined': 'text-primary-green border border-primary-green bg-transparent hover:bg-primary-green/5 hover:border-primary-green',
      'filled': 'bg-primary-green border-none text-white hover:bg-primary-green/90',
    },
    'pink': {
      'outlined': 'text-danger border border-danger bg-transparent hover:bg-danger/5 hover:border-danger',
      'filled': 'bg-danger border-none text-white hover:bg-danger/90',
    },
    'danger': {
      'outlined': 'text-danger border border-danger bg-transparent hover:bg-primary-red/5 hover:border-primary-red',
      'filled': 'bg-danger border-none text-white hover:bg-danger/90',
    },
    'gray': {
      'outlined': 'text-primary-gray-500 border border-primary-gray-500 bg-transparent hover:bg-primary-gray-500/5 hover:border-primary-gray-500',
      'filled': 'bg-primary-gray-500 border-none text-white hover:bg-primary-gray-500/90',
    },
    'black': {
      'outlined': 'text-black border border-black/50 bg-transparent hover:bg-black/5 hover:border-black',
      'filled': 'bg-black border-none text-white hover:bg-black/90',
    },
    'white': {
      'outlined': 'text-white border border-white/50  bg-gray-100/25 bg-transparent hover:bg-white/5 hover:border-white',
      'filled': 'bg-white border-none text-black hover:bg-white/90',
    },
  }

  const buttonStylesSizes: Record<ButtonSizesType, string> = {
    'full-width': 'w-full py-3',
    'xs': 'btn-xs px-2',
    'sm': 'btn-sm px-5 min-h-[40px]',
    'md': 'btn px-8',
    'lg': 'btn-lg px-12',
  }

  const buttonStyles = {
    default: 'btn font-normal disabled:text-white disabled:bg-primary-gray-300',
    size: buttonStylesSizes[size],
    color: buttonStylesColors[color][variant],
    ...className
  }

  return {buttonStyles}
}

export default useButtonStyles;