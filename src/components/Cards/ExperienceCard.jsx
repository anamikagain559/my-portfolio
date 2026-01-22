import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { KeyboardArrowDownRounded } from '@mui/icons-material';

const Card = styled(motion.div)`
    width: 100%;
    max-width: 900px;
    background-color: #171721;
    border: 1px solid #854ce6;
    box-shadow: rgba(133, 76, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 32px;
    display: flex;
    gap: 16px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: rgba(133, 76, 230, 0.2) 0px 4px 32px;
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
      padding: 16px;
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
`;

const Role = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
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
    color: ${({ theme }) => theme.text_primary + 99};
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

const SkillPill = styled.div`
    font-size: 11px;
    font-weight: 600;
    color: #f2f3f4;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 5px 14px;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
`;

const ArrowIcon = styled(KeyboardArrowDownRounded)`
    color: ${({ theme }) => theme.text_secondary};
    position: absolute;
    bottom: 24px;
    right: 24px;
    @media only screen and (max-width: 768px){
        bottom: 16px;
        right: 16px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
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
                        <SkillPill key={index}>{skill}</SkillPill>
                    ))}
                </Skills>
            </Body>
        </Card>
    )
}

export default ExperienceCard