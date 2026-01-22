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
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    padding: 40px 0 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 42px;
  text-align: left;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  gap: 12px;
  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    text-align: left;
    width: 100%;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 40px;
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
        left: 7.5px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: linear-gradient(180deg, ${({ theme }) => theme.primary} 0%, rgba(255, 255, 255, 0.1) 100%);
        @media (max-width: 768px) {
            left: 7.5px;
        }
    }
`;

const TimelineItem = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    padding-left: 28px;
    padding-bottom: 40px;

    &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 5px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 4px rgba(133, 76, 230, 0.1), 0 0 10px ${({ theme }) => theme.primary};
        z-index: 2;
        @media (max-width: 768px) {
            left: 2px;
        }
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
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Title>Professional Experience</Title>
                    <ExperienceSection
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ marginTop: '40px' }}
                    >
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <ExperienceCard experience={experience} />
                            </TimelineItem>
                        ))}
                    </ExperienceSection>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Experience