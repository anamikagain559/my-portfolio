import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.div`
    background: rgba(10, 10, 20, 0.9);
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
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
    color: #f2f3f4;
    @media (max-width: 640px) {
      padding: 0 0px;
    }
`;

export const Span = styled.div`
    font-weight: 700;
    font-size: 22px;
    color: #f2f3f4;
    transition: all 0.2s ease;
    &:hover {
      color: #854ce6;
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
    color: #b1b2b3;
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
      color: #f2f3f4;
    }

    &.active {
      background: #854ce6;
      color: #fff;
      box-shadow: 0 0 20px rgba(133, 76, 230, 0.6);
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

export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  font-size: 18px;
  &:hover {
    background: rgba(133, 76, 230, 0.2);
    border-color: #854ce6;
    transform: scale(1.05);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: #f2f3f4;
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
    background: rgba(18, 18, 24, 0.95);
    backdrop-filter: blur(12px);
    border-radius: 0 0 24px 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const MobileLink = styled.a`
  color: #b1b2b3;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 0;
  &:hover {
    color: #854ce6;
  }
`;
