import React, { useState, useEffect } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GithubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ProfileIcon } from './NavbarStyledComponent'
import { FaBars, FaGithub } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Me', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Span>Anamika</Span>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseRounded /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => !link.external && setActiveSection(link.id)}
            >
              {link.name}
            </NavLink>
          ))}
        </NavItems>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" style={{ border: 'none', background: 'transparent', padding: '0', color: 'inherit' }}>
            <FaGithub size={30} style={{ color: '#b1b2b3', transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#854ce6';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#b1b2b3';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </GithubButton>
        </ButtonContainer>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((link) => (
                <MobileLink
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  onClick={() => {
                    setIsOpen(false);
                    if (!link.external) setActiveSection(link.id);
                  }}
                >
                  {link.name}
                </MobileLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
