import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 900px;
  background-color: ${({ theme }) => theme.glassBg} !important;
  border: 1px solid ${({ theme }) => theme.glassBorder} !important;
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadowLight} !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 24px !important;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.primaryBorder} !important;
    background: ${({ theme }) => theme.glassHoverBg} !important;
    transform: translateY(-8px);
    box-shadow: 0 20px 50px ${({ theme }) => theme.shadow}, inset 0 0 20px ${({ theme }) => theme.primaryGlow} !important;
  }
`;

const GlowLight = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background: ${({ theme }) => theme.primaryGlow};
  filter: blur(60px);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  transition: all 0.6s ease;
  pointer-events: none;

  ${StyledCard}:hover & {
    background: ${({ theme }) => theme.primaryGlowHover};
    transform: scale(1.5);
  }
`;

const Image = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 0 20px ${({ theme }) => theme.shadow};
    transition: all 0.4s ease;
    
    ${StyledCard}:hover & {
      transform: scale(1.1) rotate(2deg);
      box-shadow: 0 0 20px ${({ theme }) => theme.primaryBorder};
    }
    
    @media only screen and (max-width: 768px){
        height: 50px;
        width: 50px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 2;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
    
    @media only screen and (max-width: 640px){
      flex-direction: column;
      gap: 8px;
    }
`;

const Role = styled.div`
    font-size: 24px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
    letter-spacing: -0.5px;
    transition: color 0.3s ease;
    
    ${StyledCard}:hover & {
      color: ${({ theme }) => theme.primary};
    }
    
    @media only screen and (max-width: 768px){
        font-size: 20px;
    }
`;

const Company = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 4px;
    letter-spacing: 0.5px;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const DateTag = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primaryGlow};
    border: 1px solid ${({ theme }) => theme.primaryBorder};
    padding: 8px 16px;
    border-radius: 50px;
    white-space: nowrap;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0 0 10px ${({ theme }) => theme.primaryGlow};
    
    @media only screen and (max-width: 768px){
        font-size: 10px;
        padding: 6px 12px;
    }
`;

const Description = styled.div`
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.text_secondary};
    margin: 20px 0;
    font-weight: 400;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const SkillBadge = styled(Badge)`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary} !important;
  background-color: ${({ theme }) => theme.glassBg} !important;
  border: 1px solid ${({ theme }) => theme.glassBorder} !important;
  padding: 6px 14px !important;
  border-radius: 100px !important;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryGlow} !important;
    border-color: ${({ theme }) => theme.primaryBorder} !important;
    color: ${({ theme }) => theme.primary} !important;
    transform: translateY(-2px);
  }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ width: '100%' }}
        >
            <StyledCard>
                <GlowLight />
                <div style={{ display: 'flex', gap: '24px', padding: '32px', position: 'relative', zIndex: 2 }}>
                    <div style={{ position: 'relative' }}>
                        <Image src={experience.img} />
                    </div>
                    <Body>
                        <Header>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Role>{experience.role}</Role>
                                <Company>{experience.company}</Company>
                            </div>
                            <DateTag>{experience.date}</DateTag>
                        </Header>
                        <Description>
                            {experience.desc}
                        </Description>
                        {experience.skills && (
                          <Skills>
                              {experience.skills.map((skill, index) => (
                                  <SkillBadge key={index} variant="outline">{skill}</SkillBadge>
                              ))}
                          </Skills>
                        )}
                    </Body>
                </div>
            </StyledCard>
        </motion.div>
    )
}

export default ExperienceCard