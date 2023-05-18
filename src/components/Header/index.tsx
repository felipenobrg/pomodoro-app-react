import { Scroll, Timer, Hourglass } from 'phosphor-react'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <Hourglass size={30} color="#faff00" />
      </span>
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
