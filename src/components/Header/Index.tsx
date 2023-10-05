import { HeaderContainer, ImageLogo } from './style'
import Logo from '../../assets/Logo.svg'
import Left from '../../assets/effectLeft.svg'
import Right from '../../assets/effectRight.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Left} alt="" />
      <ImageLogo>
        <img src={Logo} alt="Logo GitHub Blog" />
      </ImageLogo>
      <img src={Right} alt="" />
    </HeaderContainer>
  )
}
