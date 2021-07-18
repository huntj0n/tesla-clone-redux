import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Model X"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Solar Panels"
                desc="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="order now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar Roof"
                desc="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="order now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                desc="Order Online for Touchless Delivery"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`
