import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <p>
          <span> Pomo App </span>
        </p>
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={30} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
