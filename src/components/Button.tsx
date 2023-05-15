import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
    variant?: ButtonVariant;
}

export const Button = ({ variant = 'secondary' }: ButtonProps) => {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}