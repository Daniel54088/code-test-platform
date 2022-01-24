import  { useEffect }  from 'react';
import { useDispatch, useSelector,RootStateOrAny } from 'react-redux';
import styled from 'styled-components';
import Items from '../components/Items';
import { getCountryList } from '../store/actions/auto-pilot-actions';

const data =[
    {
      "id": "TRAVEL-COVER-INS",
      "type": "travel",
      "title": "London to Paris",
      "description": "Baggage Cover; Medical Cover; Cancellation Cover",
      "status": "active",
      "premium": 106.65,
      "premium_formatted": "AUD $106.65",
      "payment_date": "2019-10-10T13:29:38.814849Z",
      "coverage_start_date": "2019-11-17",
      "coverage_end_date": "2019-11-19",
      "renewal": null,
      "partner": {
        "id": "labore",
        "name": "Labore Inc.",
        "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/labore.svg"
      }
    },
    {
      "id": "PRODUCT-COVER-INS",
      "type": "product",
      "title": "Sony Laptop, Mitsubishi Laptop, Mitsubishi Laptop",
      "description": "Full Product Cover",
      "status": "active",
      "premium": 50.15,
      "premium_formatted": "AUD $50.15",
      "payment_date": "2019-11-10T13:29:38.814849Z",
      "coverage_start_date": "2019-12-11",
      "coverage_end_date": "2020-12-11",
      "renewal": "annual",
      "partner": {
        "id": "aliqua",
        "name": "Aliqua Pty Ltd",
        "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/aliqua.svg"
      }
    },
    {
      "id": "PARCEL-COVER-INS",
      "type": "parcel",
      "title": "Parcel shipment to America",
      "description": "Parcel Insurance",
      "status": "expired",
      "premium": 10.65,
      "premium_formatted": "AUD $10.65",
      "payment_date": "2019-01-01T13:29:38.814849Z",
      "coverage_start_date": "2019-01-17",
      "coverage_end_date": null,
      "renewal": null,
      "partner": {
        "id": "magna",
        "name": "Magna Co.",
        "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/magna.svg"
      }
    }
  ]


const CoverGenius = () => {

    const dispatch = useDispatch();

    const countryList = useSelector((state:RootStateOrAny) => state.autoPilot.countryList);
    const countryListLoading = useSelector((state:RootStateOrAny) => state.autoPilot.countryListLoading);


    useEffect(() => {
        // dispatch(getCountryList());
    }, []);

    return (
        <Container>
            <FixBackground></FixBackground>
            <Title>PROTECTION</Title>
            <List>
                {data.map(item=> <Items data={item} /> )}
            </List>
        </Container>
    );
}

export default CoverGenius;

const FixBackground =styled.div`
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
`;


const Title = styled.div`
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    color: #2D2D2D;
`;


const List =styled.div`
    display: flex;
    flex-direction: column;
`;
