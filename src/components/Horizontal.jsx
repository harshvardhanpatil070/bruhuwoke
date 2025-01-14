// HorizontalExpand.js
import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../assets/images/ab.jpg';
import image2 from '../assets/images/ab.jpg';
import image3 from '../assets/images/ab.jpg';
import image4 from '../assets/images/ab.jpg';

// Styled components
const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  padding: 2rem;
  box-sizing: border-box;
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #000;

  span {
    color: #3182ce;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 16px;
  }
`;

const Panel = styled.div`
  flex: ${({ isFocused }) => (isFocused ? '3' : '1')};
  height: 60vh;
  background: ${({ bg }) => `url(${bg})`} no-repeat center center/cover;
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out, height 0.5s;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 2px;
  filter: ${({ isFocused }) => (isFocused ? 'brightness(1)' : 'brightness(0.4)')};

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    height: ${({ isFocused }) => (isFocused ? '400px' : '250px')};
  }

  /* Overlay Text - Hidden when not focused */
  &::before {
    content: '${({ isFocused, label }) => (isFocused ? label : '')}';
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    opacity: ${({ isFocused }) => (isFocused ? '1' : '0')};
    transition: opacity 0.5s;

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Smaller text on mobile */
    }
  }

  &::after {
    content: '${({ isFocused, growth }) => (isFocused ? growth : '')}';
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    font-size: 1.5rem;
    opacity: ${({ isFocused }) => (isFocused ? '1' : '0')};
    transition: opacity 0.5s;

    @media (max-width: 768px) {
      font-size: 1rem; /* Smaller text on mobile */
    }
  }
`;

// Main Component
const HorizontalExpand = () => {
  const [focusedPanel, setFocusedPanel] = useState(null);

  const panels = [
    { id: 1, label: 'Features', growth: '98% MAP Compliance', image: image1 },
    { id: 2, label: 'Holland & Barrett', growth: '54% Revenue Growth', image: image2 },
    { id: 3, label: 'Paslode', growth: '241% Growth in Top 10', image: image3 },
    { id: 4, label: 'Kelo-Cote', growth: '40% Growth in China', image: image4 },
  ];

  return (
    <Section>
      <Heading>
        Trusted by top <span>brands</span>.
      </Heading>

      <Container>
        {panels.map((panel) => (
          <Panel
            key={panel.id}
            bg={panel.image}
            label={panel.label}
            growth={panel.growth}
            isFocused={focusedPanel === panel.id}
            onMouseEnter={() => setFocusedPanel(panel.id)}
            onMouseLeave={() => setFocusedPanel(null)}
          />
        ))}
      </Container>
    </Section>
  );
};

export default HorizontalExpand;