import { Scroll, Timer, Hourglass } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <Hourglass size={30} color="#faff00" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
