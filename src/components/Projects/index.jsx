import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 0;
    overflow: hidden;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 12px;
    @media (max-width: 1200px) {
        max-width: 1000px;
    }
`;

const Title = styled(motion.h2)`
    font-size: 42px;
    text-align: center;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 20px 0 8px 0;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Desc = styled(motion.p)`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 40px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CardContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    width: 100%;
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTabsList = styled(TabsList)`
  background: rgba(133, 76, 230, 0.05) !important;
  border: 1px solid rgba(133, 76, 230, 0.1);
  border-radius: 12px !important;
  padding: 4px !important;
  margin-bottom: 40px !important;
  display: flex !important;
  gap: 8px !important;
  flex-wrap: wrap !important;
  height: auto !important;
  justify-content: center !important;
`;

const StyledTabsTrigger = styled(TabsTrigger)`
  border-radius: 8px !important;
  padding: 8px 24px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  color: ${({ theme }) => theme.text_secondary} !important;
  transition: all 0.3s ease !important;

  &[data-state="active"] {
    background-color: #854ce6 !important;
    color: #fff !important;
    box-shadow: 0 4px 12px rgba(133, 76, 230, 0.3) !important;
  }

  &:hover {
    color: #854ce6 !important;
    &[data-state="active"] {
      color: #fff !important;
    }
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  const categories = ['all', 'web app', 'android app', 'machine learning'];

  return (
    <Container id="projects">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </Title>
        <Desc
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>

        <StyledTabs value={toggle} onValueChange={setToggle}>
          <StyledTabsList>
            {categories.map((cat) => (
              <StyledTabsTrigger key={cat} value={cat}>
                {cat.toUpperCase()}
              </StyledTabsTrigger>
            ))}
          </StyledTabsList>

          <AnimatePresence mode="wait">
            <StyledTabsContent key={toggle} value={toggle}>
              <CardContainer>
                {projects
                  .filter((item) => toggle === 'all' || item.category === toggle)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                  ))
                }
              </CardContainer>
            </StyledTabsContent>
          </AnimatePresence>
        </StyledTabs>
      </Wrapper>
    </Container>
  )
}

const StyledTabsContent = styled(TabsContent)`
  width: 100%;
  margin: 0 !important;
`;

export default Projects
