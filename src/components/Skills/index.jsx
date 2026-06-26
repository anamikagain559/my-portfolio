import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 120px 0;
  
  /* Cyber/Grid Background */
  background-color: #050505;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  gap: 60px;
`;

const Title = styled(motion.h2)`
  font-size: 52px;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -1px;
  
  /* Metallic Gradient */
  background: linear-gradient(to right, #ffffff, #888888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 16px;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: linear-gradient(to right, rgba(59, 130, 246, 0.5), transparent);
  }
  
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background: #3b82f6;
    border-radius: 50%;
    box-shadow: 0 0 15px #3b82f6;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 16px;
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  
  /* Glassmorphism Styles */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  padding: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    background: rgba(59, 130, 246, 0.05);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05);
  }
`;

const GlowLight = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.05);
  filter: blur(40px);
  border-radius: 50%;
  top: -50px;
  left: -50px;
  transition: all 0.5s ease;

  ${SkillCard}:hover & {
    background: rgba(59, 130, 246, 0.4);
    transform: scale(1.8);
  }
`;

const IconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));
  transition: all 0.4s ease;

  ${SkillCard}:hover & {
    transform: scale(1.15);
    filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.6));
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Percentage = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  
  ${SkillCard}:hover & {
    color: #3b82f6;
  }
`;

const SkillName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  
  ${SkillCard}:hover & {
    color: #ffffff;
  }
`;

// Helper function to generate a consistent pseudo-random percentage based on string name
const getConsistentPercentage = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Generate a number between 75 and 98
  return Math.abs(hash % 24) + 75;
};

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </Title>
        
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {skills.map((category, catIndex) => (
            <CategoryContainer key={catIndex}>
              <CategoryTitle
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {category.title}
              </CategoryTitle>
              
              <SkillsGrid
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 }
                  }
                }}
              >
                {category.skills.map((skill, index) => {
                  const percentage = getConsistentPercentage(skill.name);
                  return (
                    <SkillCard
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { type: "spring", stiffness: 100, damping: 12 }
                        }
                      }}
                    >
                      <GlowLight />
                      <IconWrapper>
                        <SkillImage src={skill.image} alt={skill.name} />
                      </IconWrapper>
                      <Percentage>{percentage}%</Percentage>
                      <SkillName>{skill.name}</SkillName>
                    </SkillCard>
                  );
                })}
              </SkillsGrid>
            </CategoryContainer>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
