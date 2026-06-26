import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { 
  HeroContainer, 
  HeroBg, 
  HeroLeftContainer, 
  Img, 
  HeroRightContainer, 
  HeroInnerContainer, 
  TextLoop, 
  Title, 
  Name, 
  Span, 
  SubTitle, 
  ResumeButton, 
  HireTag, 
  ButtonContainer, 
  ViewProjectButton, 
  ProfileImageContainer,
  BackgroundText,
  StatCard,
  ScrollIndicator,
  ScrollLine
} from './HeroStyle'

import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } }
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8, x: -50 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            transition: { delay: 1, duration: 0.5, type: "spring" } 
        }
    };

    return (
        <div id="about">
            <HeroContainer>
                <BackgroundText>DEVELOPER</BackgroundText>
                
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                
                <HeroInnerContainer>
                    <HeroLeftContainer
                        id="Left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <HireTag variants={itemVariants}>AVAILABLE FOR HIRE</HireTag>
                        <Title variants={itemVariants}>
                            Hi, I am <br /> <Name>{Bio.name}</Name>
                        </Title>
                        <TextLoop variants={itemVariants}>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle variants={itemVariants}>{Bio.description}</SubTitle>
                        <ButtonContainer variants={itemVariants}>
                            <ResumeButton href={Bio.resume} target='_blank'>
                                Check Resume
                            </ResumeButton>
                            <ViewProjectButton href="#projects">
                                View Projects
                            </ViewProjectButton>
                        </ButtonContainer>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <ProfileImageContainer
                            variants={floatingVariants}
                            animate="animate"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Img src={"https://i.ibb.co.com/yS6dVv5/FF-25.jpg"} alt="hero-image" />
                            
                            <StatCard
                                variants={statVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h4>1+</h4>
                                <p>Years Exp</p>
                            </StatCard>
                        </ProfileImageContainer>
                    </HeroRightContainer>
                </HeroInnerContainer>
                
                <ScrollIndicator
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    onClick={() => {
                        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span>Scroll</span>
                    <ScrollLine />
                </ScrollIndicator>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
