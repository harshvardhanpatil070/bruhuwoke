import React, { useState } from 'react';
import styled from 'styled-components';

// Importing images from the assets folder
import experienceImg from '../assets/images/about.jpg';
import partnershipImg from '../assets/images/ab.jpg';
import technologyImg from '../assets/images/candle.jpg';

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 80px;
    font-family: 'Arial', sans-serif;
    background: #f9f9f9;
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding-right: 50px;
`;

const Title = styled.h1`
    font-size: 52px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #222;

    span {
        color: #6495ED;
        font-style: italic;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
`;

const Card = styled.div`
    padding: 25px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    box-shadow: ${({ isActive }) => (isActive ? '0px 15px 30px rgba(0,0,0,0.1)' : '0px 5px 15px rgba(0,0,0,0.08)')};
    background: ${({ isActive }) => (isActive ? '#e6f0ff' : 'white')};
    transition: all 0.4s ease;
    border-left: ${({ isActive }) => (isActive ? '6px solid #6495ED' : '6px solid transparent')};

    h2 {
        font-size: 28px;
        margin-bottom: 10px;
        color: #333;
    }

    p {
        font-size: 18px;
        color: #666;
        opacity: ${({ isActive }) => (isActive ? '1' : '0')};
        transition: opacity 0.3s ease;
    }

    &:hover {
        background: #f0f5ff;
        transform: translateY(-5px);
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Image = styled.img`
    width: 90%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0px 10px 25px rgba(0,0,0,0.1);
    object-fit: cover;
    position: absolute;
    transition: opacity 0.5s ease;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const sections = [
    {
        title: 'Experience',
        description: 'With 1,700 team members across 22 global locations and decades of ecommerce expertise.',
        image: experienceImg,  // Imported image from assets
    },
    {
        title: 'Partnership',
        description: 'We collaborate with businesses to help them grow using proven partnership strategies.',
        image: partnershipImg,  // Imported image from assets
    },
    {
        title: 'Technology',
        description: 'Leveraging AI and data analytics to deliver unparalleled ecommerce results.',
        image: technologyImg,  // Imported image from assets
    },
];

const Section = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionWrapper>
            {/* Left Side Content */}
            <ContentWrapper>
                <Title>
                    One platform <span>All the ecommerce things.</span>
                </Title>
                <CardContainer>
                    {sections.map((section, index) => (
                        <Card
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            isActive={index === activeIndex}
                        >
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                        </Card>
                    ))}
                </CardContainer>
            </ContentWrapper>

            {/* Right Side Image */}
            <ImageContainer>
                {sections.map((section, index) => (
                    <Image
                        key={index}
                        src={section.image}
                        alt={section.title}
                        isVisible={index === activeIndex}
                    />
                ))}
            </ImageContainer>
        </SectionWrapper>
    );
};

export default Section;