import React from 'react'
import styled from 'styled-components'
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
  padding: 80px 0;
  @media (max-width: 960px) {
    padding: 40px 0;
  }
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
`

const Title = styled(motion.h2)`
  font-family: 'Outfit', sans-serif;
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: #f2f3f4;
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
  color: #b1b2b3;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ContactForm = styled(motion.form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(23, 23, 33, 0.5);
  border: 1px solid rgba(133, 76, 230, 0.1);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  gap: 20px;
`

const ContactTitle = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #f2f3f4;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledInput = styled(Input)`
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  color: #f2f3f4 !important;
  padding: 12px 16px !important;
  font-size: 16px !important;
  height: auto !important;

  &:focus {
    border-color: #854ce6 !important;
    background-color: rgba(133, 76, 230, 0.05) !important;
  }
`

const StyledTextarea = styled(Textarea)`
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  color: #f2f3f4 !important;
  padding: 12px 16px !important;
  font-size: 16px !important;
  min-height: 120px !important;

  &:focus {
    border-color: #854ce6 !important;
    background-color: rgba(133, 76, 230, 0.05) !important;
  }
`

const SendButton = styled(Button)`
  width: 100%;
  border-radius: 12px !important;
  padding: 14px !important;
  font-family: 'Outfit', sans-serif;
  font-size: 18px !important;
  font-weight: 700 !important;
  background-color: #854ce6 !important;
  height: auto !important;
  margin-top: 10px;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #9d6ef2 !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(133, 76, 230, 0.3) !important;
  }
`

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        alert("Email sent successfully!"); // Using simple alert as toast setup might need more files
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactTitle>Email Me 🚀</ContactTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label htmlFor="from_email" style={{ color: '#b1b2b3', fontSize: '14px', marginLeft: '4px' }}>Your Email</Label>
            <StyledInput id="from_email" placeholder="email@example.com" name="from_email" required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label htmlFor="from_name" style={{ color: '#b1b2b3', fontSize: '14px', marginLeft: '4px' }}>Your Name</Label>
            <StyledInput id="from_name" placeholder="John Doe" name="from_name" required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label htmlFor="subject" style={{ color: '#b1b2b3', fontSize: '14px', marginLeft: '4px' }}>Subject</Label>
            <StyledInput id="subject" placeholder="Intership Inquiry" name="subject" required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label htmlFor="message" style={{ color: '#b1b2b3', fontSize: '14px', marginLeft: '4px' }}>Message</Label>
            <StyledTextarea id="message" placeholder="Type your message here..." name="message" required />
          </div>
          <SendButton type="submit">
            Send Message <Send size={20} style={{ marginLeft: '10px' }} />
          </SendButton>
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact
