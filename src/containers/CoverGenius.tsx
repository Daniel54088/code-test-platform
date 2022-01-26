import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import styled from 'styled-components';
import Items from '../components/Items';
import { getOrders } from '../store/actions/cover-genius-actions';
import CircularProgress from '@mui/material/CircularProgress';


const CoverGenius = () => {

  const dispatch = useDispatch();

  const orders = useSelector((state: RootStateOrAny) => state.coverGenius.orders);
  const ordersLoading = useSelector((state: RootStateOrAny) => state.coverGenius.ordersLoading);


  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Container>
      <FixBackground></FixBackground>
      <Title>PROTECTION</Title>
      <List>
        {ordersLoading ? (
          <SpinnerArea>
              <CircularProgress />
          </SpinnerArea>
        
        ) : orders.map((item: any, idx: number) => <Items data={item} key={idx} />)}
      </List>
    </Container>
  );
}

export default CoverGenius;

const FixBackground = styled.div`
background-color: #F6F6F6;
position: fixed; 
top: 0; 
left: 0; 

/* Preserve aspet ratio */
min-width: 100%;
min-height: 100%;
z-index: -2;
`;

const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    z-index: 1;
    overflow-y: scroll;


    @media screen and (max-width: 480px) {
      padding: 1rem;
  }
`;


const Title = styled.div`
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    color: #2D2D2D;

    @media screen and (max-width: 480px) {
      font-size: 18px;
  }
`;


const List = styled.div`
    display: flex;
    flex-direction: column;
`;


const SpinnerArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;