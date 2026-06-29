import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { motion } from 'framer-motion';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 0;
    background-color: ${({ theme }) => theme.bg};
    transition: all 0.3s ease;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    padding: 0 24px;
    gap: 12px;
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: -1px;
  
  background: ${({ theme }) => theme.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
      font-size: 36px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 60px;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ExperienceSection = styled(motion.div)`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 20px;
        top: 20px;
        bottom: 20px;
        width: 2px;
        background: linear-gradient(180deg, transparent 0%, ${({ theme }) => theme.primary} 20%, ${({ theme }) => theme.primary} 80%, transparent 100%);
        box-shadow: 0 0 15px ${({ theme }) => theme.primaryBorder};
        @media (max-width: 768px) {
            left: 10px;
        }
    }
`;

const TimelineItem = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    padding-left: 60px;
    padding-bottom: 40px;

    &::before {
        content: "";
        position: absolute;
        left: 13px;
        top: 24px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${({ theme }) => theme.bg};
        border: 2px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}, inset 0 0 5px ${({ theme }) => theme.primaryBorder};
        z-index: 2;
        @media (max-width: 768px) {
            left: 3px;
        }
    }

    @media (max-width: 768px) {
        padding-left: 40px;
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Professional Experience</Title>
                <Desc>My journey through the tech landscape.</Desc>
                <ExperienceSection
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((experience, index) => (
                        <TimelineItem key={index}>
                            <ExperienceCard experience={experience} />
                        </TimelineItem>
                    ))}
                </ExperienceSection>
            </Wrapper>
        </Container>
    )
}

export default Experience