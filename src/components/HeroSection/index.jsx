import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Name, Span, SubTitle, ResumeButton, HireTag, ButtonContainer, ViewProjectButton, ProfileImageContainer } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
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
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div id="about">
            <HeroContainer>
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
                        <Title variants={itemVariants}>Hi, I am <br /> <Name>{Bio.name}</Name></Title>
                        <TextLoop variants={itemVariants}>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle variants={itemVariants}>{Bio.description}</SubTitle>
                        <ButtonContainer variants={itemVariants}>
                            <ResumeButton
                                href={Bio.resume}
                                target='_blank'
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Check Resume
                            </ResumeButton>
                            <ViewProjectButton
                                href="#projects"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
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
                        </ProfileImageContainer>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
