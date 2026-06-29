import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  background-image: 
    linear-gradient(${({ theme }) => theme.gridColor} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.gridColor} 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  min-height: 100vh;
  @media (max-width: 960px) {
    padding: 100px 16px;
    min-height: auto;
  }
  @media (max-width: 640px) {
    padding: 80px 16px;
  }
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.3;
  z-index: -1;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15vw;
  font-weight: 900;
  color: ${({ theme }) => theme.glassBg};
  white-space: nowrap;
  pointer-events: none;
  z-index: -1;
  user-select: none;
  letter-spacing: 10px;
  font-family: 'Outfit', sans-serif;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  z-index: 2;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const HeroLeftContainer = styled(motion.div)`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  position: relative;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(76, 230, 117, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(76, 230, 117, 0); }
  100% { box-shadow: 0 0 0 0 rgba(76, 230, 117, 0); }
`;

export const HireTag = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.glassBg};
  border: 1px solid ${({ theme }) => theme.glassBorder};
  backdrop-filter: blur(10px);
  border-radius: 100px;
  font-weight: 600;
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 2px;
  margin-bottom: 30px;
  width: fit-content;

  @media (max-width: 960px) {
    margin: 0 auto 30px auto;
  }

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #4ce675;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }
`;

export const Title = styled(motion.div)`
  font-size: 64px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 16px;
  
  @media (max-width: 960px) {
    font-size: 50px;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const Name = styled.span`
  background: ${({ theme }) => theme.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TextLoop = styled(motion.div)`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 24px;
  
  @media (max-width: 960px) {
    justify-content: center;
    font-size: 28px;
  }
  
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.primaryBorder};
  text-underline-offset: 6px;
  
  .Typewriter {
    display: inline;
  }
`;

export const SubTitle = styled(motion.div)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 550px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: start;
  gap: 24px;
  width: 100%;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled(motion.a)`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 16px 32px;
    color: #ffffff;
    border-radius: 100px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    
    background: ${({ theme }) => theme.primaryGlow};
    border: 1px solid ${({ theme }) => theme.primaryBorder};
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    &:hover {
        background: ${({ theme }) => theme.primaryGlowHover};
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 30px ${({ theme }) => theme.primaryGlowHover};
        transform: translateY(-2px);
    }    
    
    @media (max-width: 640px) {
        padding: 14px 28px;
        font-size: 14px;
    } 
`;

export const ViewProjectButton = styled(motion.a)`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 16px 32px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 100px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    
    background: ${({ theme }) => theme.glassBg};
    border: 1px solid ${({ theme }) => theme.glassBorder};
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    &:hover {
        color: ${({ theme }) => theme.text_primary};
        background: ${({ theme }) => theme.glassHoverBg};
        border-color: ${({ theme }) => theme.glassHoverBorder};
        transform: translateY(-2px);
    }    
    
    @media (max-width: 640px) {
        padding: 14px 28px;
        font-size: 14px;
    } 
`;

export const ProfileImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 420px;
  
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.primaryGlowHover};
    filter: blur(80px);
    border-radius: 50%;
    z-index: -1;
  }
  
  &::after {
    content: "";
    position: absolute;
    width: 105%;
    height: 105%;
    border-radius: 50%;
    border: 1px dashed ${({ theme }) => theme.glassBorder};
    animation: rotate 30s linear infinite;
    z-index: 0;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
  
  border: 4px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 20px 50px ${({ theme }) => theme.shadow}, inset 0 0 20px ${({ theme }) => theme.glassGlow};
`;

export const StatCard = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: -20px;
  background: ${({ theme }) => theme.bg};
  backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  padding: 16px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  z-index: 10;
  
  h4 {
    color: ${({ theme }) => theme.text_primary};
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }
  
  p {
    color: ${({ theme }) => theme.text_secondary};
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 5;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.text_tertiary};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    writing-mode: vertical-rl;
  }
  
  @media (max-width: 960px) {
    display: none;
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 60px;
  background: ${({ theme }) => theme.glassBorder};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: ${({ theme }) => theme.primary};
    animation: scrollDrop 2s infinite ease-in-out;
  }

  @keyframes scrollDrop {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(300%); opacity: 0; }
  }
`;
