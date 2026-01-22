import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from 'lucide-react'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 20px;
margin: 50px 12px;
height: min-content;
background-color: #171721;
border: 1px solid rgba(133, 76, 230, 0.1);
color: #f2f3f4;
padding: 32px;
display: flex;
flex-direction: column;
position: relative;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #f2f3f4;
  margin: 16px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 4px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Desc = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #f2f3f4;
    line-height: 1.6;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
`;

const Label = styled.div`
    font-family: 'Outfit', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #f2f3f4;
    margin: 16px 6px 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0px;
`;

const TagBadge = styled(Badge)`
  font-size: 12px;
  font-weight: 500;
  color: #854ce6 !important;
  background-color: rgba(133, 76, 230, 0.1) !important;
  padding: 4px 12px !important;
  border-radius: 8px !important;
  text-transform: uppercase;
  border: none !important;
`

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 12px 6px;
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(255, 255, 255, 0.03);
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    border: 2px solid rgba(133, 76, 230, 0.2);
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 600;
    flex: 1;
    color: #f2f3f4;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
    gap: 16px;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #f2f3f4;
    padding: 12px 24px;
    border-radius: 12px;
    background-color: #854ce6;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    ${({ dull }) => dull && `
        background-color: rgba(255, 255, 255, 0.05);
        color: #b1b2b3;
        border: 1px solid rgba(255, 255, 255, 0.1);
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        background-color: #9d6ef2;
        transform: translateY(-2px);
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            cursor: "pointer",
                            color: "#b1b2b3"
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, index) => (
                            <TagBadge key={index} variant="outline">{tag}</TagBadge>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member, index) => (
                                    <Member key={index}>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{ textDecoration: 'none', color: '#b1b2b3' }}>
                                            <GitHub fontSize="small" />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: '#b1b2b3' }}>
                                            <LinkedIn fontSize="small" />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new'>
                            <Github size={18} />
                            View Code
                        </Button>
                        <Button href={project?.webapp} target='new'>
                            <ExternalLink size={18} />
                            View Live App
                        </Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default ProjectDetails