import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const StyledCard = styled(Card)`
  width: 330px;
  height: 490px;
  background-color: rgba(23, 23, 33, 0.5) !important;
  border: 1px solid rgba(133, 76, 230, 0.1) !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5) !important;
  backdrop-filter: blur(8px);
  border-radius: 20px !important;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 26px 20px;

  &:hover {
    border-color: #854ce6 !important;
    transform: translateY(-10px);
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.2) !important;
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    object-fit: cover;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const TagBadge = styled(Badge)`
  font-size: 10px;
  font-weight: 500;
  color: #854ce6 !important;
  background-color: rgba(133, 76, 230, 0.1) !important;
  padding: 2px 8px !important;
  border-radius: 10px !important;
  text-transform: uppercase;
  border: none !important;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #f2f3f4;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: #b1b2b3;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid #171721;
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <StyledCard onClick={() => setOpenModal({ state: true, project: project })}>
                <Image src={project.image} />
                <Tags>
                    {project.tags?.map((tag, index) => (
                        <TagBadge key={index} variant="outline">{tag}</TagBadge>
                    ))}
                </Tags>
                <Details>
                    <Title>{project.title}</Title>
                    <Date>{project.date}</Date>
                    <Description>{project.description}</Description>
                </Details>
                <Members>
                    {project.member?.map((member, index) => (
                        <Avatar key={index} src={member.img} />
                    ))}
                </Members>
            </StyledCard>
        </motion.div>
    )
}

export default ProjectCards