import styled from 'styled-components';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterContainer = styled.div`
  width: 100%;
  padding: 60px 0 40px 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  background-color: #050505;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 24px;
  color: #f2f3f4;
`;

const Logo = styled(motion.h1)`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.5px;
  background: linear-gradient(to right, #ffffff, #888888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
`;

const Nav = styled(motion.nav)`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    font-size: 14px;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -6px;
    left: 50%;
    background-color: #3b82f6;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    box-shadow: 0 0 10px #3b82f6;
  }

  &:hover {
    color: #ffffff;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialMediaIcons = styled(motion.div)`
  display: flex;
  gap: 24px;
  margin-top: 16px;
`;

const SocialMediaIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.5);
    color: #3b82f6;
    transform: translateY(-8px) scale(1.1);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
  }
`;

const Copyright = styled(motion.p)`
  margin-top: 24px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  letter-spacing: 0.5px;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <FooterContainer>
      <FooterWrapper
        as={motion.footer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Logo variants={itemVariants}>
          Anamika Gain
        </Logo>
        
        <Nav variants={itemVariants}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        
        <SocialMediaIcons variants={itemVariants}>
          {Bio.facebook && (
            <SocialMediaIcon href={Bio.facebook} target="_blank">
              <Facebook size={20} />
            </SocialMediaIcon>
          )}
          {Bio.linkedin && (
            <SocialMediaIcon href={Bio.linkedin} target="_blank">
              <Linkedin size={20} />
            </SocialMediaIcon>
          )}
        </SocialMediaIcons>
        
        <Copyright variants={itemVariants}>
          &copy; {currentYear} Anamika Gain. Crafted with passion.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
