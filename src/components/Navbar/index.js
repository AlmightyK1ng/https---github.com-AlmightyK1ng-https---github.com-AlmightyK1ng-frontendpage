import React from 'react';
import { FaBars } from 'react-icons/fa';
import{ 
Nav, 
NavbarContainer,
NavLogo, 
MobileIcon, 
NavMenu, 
NavItem, 
NavLinks,
NavBtn,
NavBtnLink

} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
    <>
        <Nav>
            <NavbarContainer>

                <NavLogo to='/'>Home</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>Covid-19</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Map</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>

        </Nav>
    </>
    );
};

export default Navbar
