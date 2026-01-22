import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    HiOutlineHome,
    HiOutlineBriefcase,
    HiOutlineCode,
    HiOutlineAcademicCap,
    HiOutlineMail,
    HiOutlineViewGrid,
} from 'react-icons/hi';

const DockContainer = styled.div`
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DockInner = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: rgba(23, 23, 33, 0.7);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`;

const DockItem = styled(motion.a)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 24px;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.primary};
        background: rgba(255, 255, 255, 0.05);
    }

    &.active {
        background: ${({ theme }) => theme.primary + '22'};
        color: ${({ theme }) => theme.primary};
        border-radius: 30px;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 600;
        gap: 10px;
        display: flex;
        align-items: center;
    }
`;

const ActiveLabel = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const FloatingNav = () => {
    const [active, setActive] = React.useState('experience');

    const navItems = [
        { id: 'home', icon: <HiOutlineHome />, label: 'Home', href: '#about' },
        { id: 'skills', icon: <HiOutlineCode />, label: 'Skills', href: '#skills' },
        { id: 'experience', icon: <HiOutlineBriefcase />, label: 'Experience', href: '#experience' },
        { id: 'projects', icon: <HiOutlineViewGrid />, label: 'Projects', href: '#projects' },
        { id: 'education', icon: <HiOutlineAcademicCap />, label: 'Education', href: '#education' },
        { id: 'contact', icon: <HiOutlineMail />, label: 'Contact', href: '#contact' },
    ];

    return (
        <DockContainer>
            <DockInner
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                {navItems.map((item) => (
                    <DockItem
                        key={item.id}
                        href={item.href}
                        className={active === item.id ? 'active' : ''}
                        onClick={() => setActive(item.id)}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item.icon}
                        {active === item.id && <ActiveLabel>{item.label}</ActiveLabel>}
                    </DockItem>
                ))}
            </DockInner>
        </DockContainer>
    );
};

export default FloatingNav;
