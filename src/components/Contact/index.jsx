import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send } from 'lucide-react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 120px 0;
  background-color: ${({ theme }) => theme.bg};
  background-image: 
    linear-gradient(${({ theme }) => theme.gridColor} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.gridColor} 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  overflow: hidden;
  transition: all 0.3s ease;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  padding: 0 24px;
`

const Title = styled(motion.h2)`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: -1px;
  
  background: ${({ theme }) => theme.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const Desc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 24px;
  box-shadow: 0 20px 40px ${({ theme }) => theme.shadowLight};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      transparent,
      transparent,
      ${({ theme }) => theme.primaryGlowHover}
    );
    animation: rotate 10s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ContactTitle = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;
`

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.glassBg} !important;
  border: none !important;
  border-bottom: 2px solid ${({ theme }) => theme.glassBorder} !important;
  border-radius: 8px 8px 0 0 !important;
  color: ${({ theme }) => theme.text_primary} !important;
  padding: 16px 20px !important;
  font-size: 16px !important;
  height: auto !important;
  transition: all 0.3s ease !important;

  &:focus {
    background-color: ${({ theme }) => theme.glassHoverBg} !important;
    border-bottom: 2px solid ${({ theme }) => theme.primary} !important;
    box-shadow: none !important;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text_tertiary} !important;
  }
`

const StyledTextarea = styled(Textarea)`
  background-color: ${({ theme }) => theme.glassBg} !important;
  border: none !important;
  border-bottom: 2px solid ${({ theme }) => theme.glassBorder} !important;
  border-radius: 8px 8px 0 0 !important;
  color: ${({ theme }) => theme.text_primary} !important;
  padding: 16px 20px !important;
  font-size: 16px !important;
  min-height: 150px !important;
  transition: all 0.3s ease !important;
  resize: vertical;

  &:focus {
    background-color: ${({ theme }) => theme.glassHoverBg} !important;
    border-bottom: 2px solid ${({ theme }) => theme.primary} !important;
    box-shadow: none !important;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text_tertiary} !important;
  }
`

const flyAnimation = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(5px, -5px) scale(1.1); }
  100% { transform: translate(0, 0); }
`;

const SendButton = styled(Button)`
  width: 100%;
  border-radius: 12px !important;
  padding: 18px !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  letter-spacing: 2px;
  text-transform: uppercase;
  height: auto !important;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  
  background: ${({ theme }) => theme.primaryGlow} !important;
  border: 1px solid ${({ theme }) => theme.primaryBorder} !important;
  color: ${({ theme }) => theme.primary} !important;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  
  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.primaryGlowHover} !important;
    border-color: ${({ theme }) => theme.primary} !important;
    color: #ffffff !important;
    box-shadow: 0 0 40px ${({ theme }) => theme.primaryBorder} !important;
    transform: translateY(-2px);
    
    svg {
      animation: ${flyAnimation} 1s infinite ease-in-out;
    }
  }
`

const LabelText = styled(Label)`
  color: ${({ theme }) => theme.text_secondary} !important;
  font-size: 12px !important;
  margin-left: 8px;
  font-weight: 600 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        alert("Email sent successfully!"); 
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      });
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact
        </Title>
        <Desc
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          <ContactTitle>Let's Talk <span style={{ fontSize: '24px' }}>🚀</span></ContactTitle>
          <StyledInputContainer>
            <LabelText htmlFor="from_email">Email Address</LabelText>
            <StyledInput id="from_email" placeholder="hello@example.com" name="from_email" required />
          </StyledInputContainer>
          <StyledInputContainer>
            <LabelText htmlFor="from_name">Full Name</LabelText>
            <StyledInput id="from_name" placeholder="John Doe" name="from_name" required />
          </StyledInputContainer>
          <StyledInputContainer>
            <LabelText htmlFor="subject">Subject</LabelText>
            <StyledInput id="subject" placeholder="What's this about?" name="subject" required />
          </StyledInputContainer>
          <StyledInputContainer>
            <LabelText htmlFor="message">Message</LabelText>
            <StyledTextarea id="message" placeholder="Write your message here..." name="message" required />
          </StyledInputContainer>
          <SendButton type="submit">
            Send Message <Send size={20} style={{ marginLeft: '12px' }} />
          </SendButton>
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact
