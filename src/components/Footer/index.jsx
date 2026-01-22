import styled from 'styled-components';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 24px;
  color: #f2f3f4;
`;

const Logo = styled(motion.h1)`
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #854ce6;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: center;
  margin-top: 12px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    font-size: 14px;
  }
`;

const NavLink = styled.a`
  font-family: 'Outfit', sans-serif;
  color: #f2f3f4;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #854ce6;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #854ce6;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
`;

const SocialMediaIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f2f3f4;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.2);
    border-color: #854ce6;
    color: #854ce6;
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  margin-top: 32px;
  font-size: 0.9rem;
  color: #b1b2b3;
  text-align: center;
  letter-spacing: 0.5px;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper
        as={motion.footer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Anamika Gain
        </Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          {Bio.facebook && (
            <SocialMediaIcon href={Bio.facebook} target="_blank" whileHover={{ scale: 1.1 }}>
              <Facebook size={22} />
            </SocialMediaIcon>
          )}
          {Bio.linkedin && (
            <SocialMediaIcon href={Bio.linkedin} target="_blank" whileHover={{ scale: 1.1 }}>
              <Linkedin size={22} />
            </SocialMediaIcon>
          )}

        </SocialMediaIcons>
        <Copyright>
          &copy; {currentYear} Anamika Gain. Crafted with passion.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
