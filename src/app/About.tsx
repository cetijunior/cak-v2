"use client";

import React from 'react'
import CarouselAbout from './CarouselAbout'
import styled from 'styled-components'

const About = () => {
    const media = {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
    }

    const Container = styled.section`
        background-color: white;
        min-height: 600px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media ${media.sm} {
            padding: 40px;
            flex-direction: row;
            gap: 40px;
        }

        @media ${media.md} {
            padding: 40px 60px;
        }

        @media ${media.lg} {
            padding: 40px 120px;
        }

        @media ${media.xl} {
            padding: 40px 160px;
        }
    `

    const Title = styled.h2`
        margin: 0 auto;
        font-size: 24px;
        color: #131B23;
        text-align: center;

        @media ${media.sm} {
            font-size: 28px;
            text-align: left;
        }
    `

    const Text = styled.p`
        font-size: 16px;
        color: #131B23;
        text-align: center;
        max-width: 80%;
        margin: 0 auto;

        @media ${media.sm} {
            font-size: 18px;
            text-align: left;
            max-width: 60%;
        }
    `

    return (
        <Container id='about-us'>
            <div className='flex flex-col gap-8 my-12'>
                <Title>Who are we?</Title>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non porro adipisci, repellat aliquid vero assumenda molestias, consectetur quae in illo nam velit nemo cum asperiores saepe quaerat. Deserunt, totam incidunt.</Text>
            </div>
            <CarouselAbout />
        </Container>
    )
}


export default About