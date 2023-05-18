import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import PodomoroLogoPng from '../../public/PodomoroLogo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={PodomoroLogoPng} alt="" />
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
