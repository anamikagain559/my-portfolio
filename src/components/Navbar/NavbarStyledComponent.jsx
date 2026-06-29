import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.div`
    background: ${({ theme }) => theme.navBg};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
    font-family: 'Outfit', sans-serif;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: auto;
    display: flex;
    justify-items: flex-start;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 640px) {
      padding: 0 0px;
    }
`;

export const Span = styled.div`
    font-weight: 800;
    font-size: 24px;
    background: ${({ theme }) => theme.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.2s ease;
    letter-spacing: -0.5px;
    &:hover {
      background: linear-gradient(to right, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.text_primary};
    }

    &.active {
      background: ${({ theme }) => theme.primary};
      color: #fff;
      box-shadow: 0 0 20px ${({ theme }) => theme.primaryBorder};
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GithubButton = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 24px 40px;
    background: ${({ theme }) => theme.bg};
    backdrop-filter: blur(12px);
    border-radius: 0 0 24px 24px;
    box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
    z-index: 1000;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 0;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
