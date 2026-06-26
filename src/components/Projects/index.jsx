import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 100px 0 140px 0;
    overflow: hidden;
    background-color: #0d0d0d;
    width: 100%;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0 24px;
    gap: 50px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

const SubTitle = styled(motion.div)`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 4px;
    color: #3b82f6;
    margin-bottom: 16px;
    text-transform: uppercase;
`;

const Title = styled(motion.h2)`
    font-size: 56px;
    font-weight: 800;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: -1px;
    
    /* Beautiful Gradient Text */
    background: linear-gradient(to right, #ffffff, #888888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

const FilterWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`;

const FilterContainer = styled.div`
    display: inline-flex;
    gap: 8px;
    padding: 8px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 100px;
    flex-wrap: wrap;
    justify-content: center;
`;

const FilterItem = styled.div`
    padding: 10px 24px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 100px;
    color: ${({ active }) => (active ? '#ffffff' : '#888888')};
    background: ${({ active }) => (active ? 'rgba(59, 130, 246, 0.15)' : 'transparent')};
    border: 1px solid ${({ active }) => (active ? 'rgba(59, 130, 246, 0.3)' : 'transparent')};
    text-transform: uppercase;
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
    }
`;

const GridContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 320px;
    grid-auto-flow: dense;
    gap: 30px;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-auto-rows: 400px;
        gap: 20px;
    }
`;

const GridItem = styled(motion.div)`
    width: 100%;
    height: 100%;
    
    @media (min-width: 1025px) {
        /* Make the 1st and 4th items span 2 rows for a very dynamic masonry */
        &:nth-child(1), &:nth-child(4) {
            grid-row: span 2;
        }
        
        /* Make the 6th item span 2 columns if available */
        &:nth-child(6) {
            grid-column: span 2;
        }
    }
`;

const Projects = ({ openModal, setOpenModal }) => {
    const [filter, setFilter] = useState('all');
    
    const categories = ['all', 'web app', 'android app', 'machine learning'];

    const filteredProjects = projects.filter((item) => {
        if (filter === 'all') return true;
        return item.category === filter;
    });

    return (
        <Container id="projects">
            <Wrapper>
                <HeaderContainer>
                    <SubTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Portfolio
                    </SubTitle>
                    <Title
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Selected Works
                    </Title>
                </HeaderContainer>

                <FilterWrapper
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <FilterContainer>
                        {categories.map((cat) => (
                            <FilterItem 
                                key={cat} 
                                active={filter === cat} 
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </FilterItem>
                        ))}
                    </FilterContainer>
                </FilterWrapper>

                <AnimatePresence mode="popLayout">
                    <GridContainer layout>
                        {filteredProjects.map((project, index) => (
                            <GridItem 
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard 
                                    project={project} 
                                    openModal={openModal} 
                                    setOpenModal={setOpenModal} 
                                />
                            </GridItem>
                        ))}
                    </GridContainer>
                </AnimatePresence>
            </Wrapper>
        </Container>
    );
};

export default Projects;
