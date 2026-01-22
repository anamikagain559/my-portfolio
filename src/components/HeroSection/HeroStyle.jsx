import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
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
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled(motion.div)`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 6px solid #111111;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const HireTag = styled(motion.div)`
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 24px;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Title = styled(motion.div)`
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const TextLoop = styled(motion.div)`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: underline;
`;

export const SubTitle = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: start;
  gap: 20px;
  width: 100%;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled(motion.a)`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 100%;
    max-width: 200px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 50px;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 0 0 20px rgba(133, 76, 230, 0.4);
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 30px rgba(133, 76, 230, 0.6);
        filter: brightness(1.1);
    }    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 16px;
    } 
`;

export const ViewProjectButton = styled(motion.a)`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 100%;
    max-width: 180px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 50px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    border: 1px solid ${({ theme }) => theme.text_primary + 50};
    background: #111111;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        background: ${({ theme }) => theme.text_primary + 10};
        border: 1px solid ${({ theme }) => theme.text_primary};
    }    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 16px;
    } 
`;

export const ProfileImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: ${({ theme }) => theme.primary + 70};
    filter: blur(100px);
    border-radius: 50%;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;
