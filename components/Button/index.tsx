import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ButtonPrimary, ButtonSecondary } from './styles'

export enum ButtonVariant {
  primary,
  secondary,
}

const buttons = {
  [ButtonVariant['primary']]: ButtonPrimary,
  [ButtonVariant['secondary']]: ButtonSecondary,
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: ButtonVariant
  children: React.ReactNode
}

export const Button = ({ variant: type, children, ...rest }: ButtonProps) => {
  const ButtonBase = buttons[type]

  return <ButtonBase {...rest}>{children}</ButtonBase>
}
