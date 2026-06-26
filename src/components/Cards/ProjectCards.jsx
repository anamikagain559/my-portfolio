import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: #1a1a1a;
  /* Premium Shadow */
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.15);
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  ${CardWrapper}:hover & {
    transform: scale(1.12);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Top to Bottom gradient to ensure readability at top left */
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    transparent 100%
  );
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: background 0.5s ease;

  ${CardWrapper}:hover & {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(59, 130, 246, 0.2) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const ContentContainer = styled.div`
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  ${CardWrapper}:hover & {
    transform: translateY(4px);
  }
`;

const CategoryText = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #3b82f6;
  margin: 0 0 8px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background-color: #3b82f6;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
`;

const ArrowIcon = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0;
  transform: translate(-20px, 20px);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translate(0, 0);
    background: rgba(59, 130, 246, 0.8);
    border-color: transparent;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <CardWrapper onClick={() => setOpenModal({ state: true, project: project })}>
      <BackgroundImage src={project.image} alt={project.title} />
      
      <Overlay>
        <ContentContainer>
          <CategoryText>
            {project.tags && project.tags.length > 0 ? project.tags[0] : project.category}
          </CategoryText>
          <Title>{project.title}</Title>
        </ContentContainer>

        <ArrowIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </ArrowIcon>
      </Overlay>
    </CardWrapper>
  );
};

export default ProjectCards;