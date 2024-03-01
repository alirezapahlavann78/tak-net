import {Types} from "@/types/types";
import joinObjectValues from "@/utils/joinObjectValues";
import useButtonStyles from "@/components/Button/hooks/useButtonStyles";
import Loading from "@/components/sections/Loading/Loading";


type ClassNameType = {
  extra?: string
}

export type ButtonSizesType = 'full-width' | 'sm' | 'md' | 'lg' | 'xs'
export type ButtonVarientsType = 'filled' | 'outlined'
export type ButtonColorsType = 'primary' | 'pink' | 'green' | 'danger' | 'gray' | 'black' | 'white'

export type ButtonProps = {
  children: Types["children"],
  onClick?: (e: any) => void,
  type?: 'submit' | 'button',
  className?: ClassNameType,
  variant?: ButtonVarientsType,
  size?: ButtonSizesType,
  color?: ButtonColorsType,
  disable?: boolean
  loading?: boolean
}

const Button = ({children, onClick, type, className, variant, size, color, disable, loading}: ButtonProps) => {
  //TODO add disable mode and loading by disabling button
  const {buttonStyles} = useButtonStyles({className, variant, size, color})

  return (
    <button
      {...disable &&{disabled: true}}
      type={type || 'button'}
      {...onClick ? {onClick} : {}}
      className={joinObjectValues(buttonStyles)}
    >
      {loading ? <Loading size='xs' /> : children}
    </button>
  );
}

export default Button