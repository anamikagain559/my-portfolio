import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import { motion } from 'framer-motion'
import { Palette, Server } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  overflow: hidden;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled(motion.h2)`
  font-family: 'Outfit', sans-serif;
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`

const StyledCard = styled(Card)`
  flex: 1;
  min-width: 320px;
  max-width: 500px;
  background-color: rgba(23, 23, 33, 0.5) !important;
  border: 1px solid rgba(133, 76, 230, 0.1) !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5) !important;
  backdrop-filter: blur(8px);
  border-radius: 20px !important;
  transition: all 0.3s ease-in-out;
  padding: 20px;

  &:hover {
    border-color: #854ce6 !important;
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.1) !important;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
  }
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(133, 76, 230, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #854ce6;
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

const SkillItem = styled(motion.div)`
  font-size: 15px;
  font-weight: 500;
  color: #f2f3f4;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #854ce6;
    background: rgba(133, 76, 230, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 14px;
  }
`

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </Title>
        <Desc
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          The tools I use to bring ideas to life
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
            >
              <StyledCard>
                <CategoryHeader>
                  <IconWrapper>
                    {skill.title.includes("Frontend") ? <Palette size={24} /> : <Server size={24} />}
                  </IconWrapper>
                  <CardTitle style={{ fontSize: '24px', fontWeight: '600', color: '#f2f3f4', fontFamily: "'Outfit', sans-serif" }}>
                    {skill.title}
                  </CardTitle>
                </CategoryHeader>
                <SkillList>
                  {skill.skills.map((item, idx) => (
                    <SkillItem
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </StyledCard>
            </motion.div>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
