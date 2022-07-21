import { HeaderContainer } from "./Header.styles";
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo" />
        </HeaderContainer>
    )
}

export default Header;