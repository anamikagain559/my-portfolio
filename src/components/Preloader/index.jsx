import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PreloaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #050505; /* Deep dark background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 0 24px;
`;

const LoadingText = styled(motion.h1)`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Counter = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #3b82f6;
  font-variant-numeric: tabular-nums;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #3b82f6;
  border-radius: 4px;
`;

const Preloader = ({ loading, setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;
    
    // Simulate loading progress
    const duration = 2000; // 2 seconds total loading animation
    const intervalTime = 20; 
    const step = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small delay after reaching 100% before triggering unmount
          setTimeout(() => {
            setLoading(false);
          }, 400);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [loading, setLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <PreloaderContainer
          initial={{ y: 0 }}
          exit={{ 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <ContentWrapper>
            <LoadingText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Anamika Gain
              <Counter>{Math.floor(progress)}%</Counter>
            </LoadingText>
            <ProgressBarContainer>
              <ProgressBar 
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </ProgressBarContainer>
          </ContentWrapper>
        </PreloaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
