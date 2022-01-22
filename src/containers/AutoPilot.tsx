import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector,RootStateOrAny } from 'react-redux';
import styled from 'styled-components';
import Select from '../components/Select';
import { getCountryList } from '../store/actions/auto-pilot-actions';

const AutoPilot = () => {

    const dispatch = useDispatch();

    const countryList = useSelector((state:RootStateOrAny) => state.autoPilot.countryList);


    useEffect(() => {
        dispatch(getCountryList());
    }, []);

    return (
        <Container>
            <Select 
                data={countryList.map((item:any)=>{
                    return{
                        label: item.name.common,
                        value: item.name.common,
                        pngUrl: item.flag
                    }
                })}
            />
        </Container>
    );
}

export default AutoPilot;


const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 8rem;
`;


