import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 900px;
  background-color: rgba(23, 23, 33, 0.5) !important;
  border: 1px solid rgba(133, 76, 230, 0.1) !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5) !important;
  backdrop-filter: blur(8px);
  border-radius: 20px !important;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #854ce6 !important;
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.1) !important;
  }
`;

const Image = styled.img`
    height: 120px;
    width: 120px;
    background-color: #fff;
    border-radius: 16px;
    object-fit: contain;
    padding: 12px;
    @media only screen and (max-width: 768px){
        height: 60px;
        width: 60px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`;

const Role = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #f2f3f4;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`;

const Company = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #854ce6;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const DateTag = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    background-color: rgba(255, 255, 255, 0.05);
    padding: 6px 16px;
    border-radius: 50px;
    white-space: nowrap;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-size: 15px;
    line-height: 1.6;
    color: #b1b2b3;
    margin: 12px 0 20px 0;
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const SkillBadge = styled(Badge)`
  font-size: 11px;
  font-weight: 600;
  color: #f2f3f4 !important;
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 5px 14px !important;
  border-radius: 8px !important;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  
  &:hover {
    background-color: rgba(133, 76, 230, 0.1) !important;
    border-color: #854ce6 !important;
  }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
        >
            <StyledCard>
                <div style={{ display: 'flex', gap: '20px', padding: '12px' }}>
                    <Image src={experience.img} />
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
                        <Skills>
                            {experience.skills?.map((skill, index) => (
                                <SkillBadge key={index} variant="outline">{skill}</SkillBadge>
                            ))}
                        </Skills>
                    </Body>
                </div>
            </StyledCard>
        </motion.div>
    )
}

export default ExperienceCard