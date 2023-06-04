import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import styled from 'styled-components'

const Navbar = styled.h1 `
  background-color: #281c1c;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  //width: 70%;
  //position: fixed;
`

const Logo = styled.div`
  display: flex;
  margin-top: 1%;
  margin-bottom: 1%;
  box-sizing: border-box;
  height: 80px;
  box-shadow: black;
`
const Icon = styled.div`
  padding-left: 30%;
  display: flex;
  padding-top: 3%;
  height: 2.2rem;
`

function NavBar() {
    return (
        <Navbar>
            <Logo>
                <img src={logo} alt={logo}/>
            </Logo>
            <Icon>
                <img src={home} alt={logo}/>
            </Icon>
        </Navbar>
    );
}

export default NavBar;
