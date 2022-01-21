import React from 'react';
import styled from 'styled-components';
import Select from '../components/Select';

const AutoPilot = () => {

    return (
        <Container>
            <Select />
        </Container>
    );
}

export default AutoPilot;


const Container = styled.div`
    width: 100%;
    height: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center; 
`;


