import { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import styled from 'styled-components';
import { ItemsProps,ItemBlockProps } from '../interfaces';
import moment from 'moment';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Items: React.FC<ItemsProps> = (props) => {

    const [clicked, handleClick] = useState(false);
    return (
        <Item>
            <ItemDetail>
                <ItemButtonArea>
                    {clicked ? (
                        <ButtonBorderClicked onClick={() => handleClick(false)}>
                            <KeyboardArrowDownIcon />
                        </ButtonBorderClicked>
                    ) : (

                        <ButtonBorder>
                            <NavigateNextIcon onClick={() => handleClick(true)} />
                        </ButtonBorder>
                    )}

                </ItemButtonArea>
                <ItemTitleArea>
                    <div>
                        <ItemTitleText>{props.data.title}</ItemTitleText>
                        <ItemDescriptionText>{props.data.id} | {props.data.description} </ItemDescriptionText>
                    </div>
                        <TabletLogo>  <img src={props.data.partner.logo} style={{ width: '100%'}} /> </TabletLogo>
                </ItemTitleArea>

                <ItemBlock >
                    <ItemBlockTitle>
                        {moment(props.data.payment_date).format('DD-MMM-YYYY')}
                    </ItemBlockTitle>
                    <ItemBlockDescription>
                        Payment date
                    </ItemBlockDescription>
                </ItemBlock>
                <Border />
                        
                {props.data.status === 'active' && (
                    <>
                        <ItemBlock mobileShows={true}>
                            <ItemBlockTitle>
                                {moment(Date.parse(props.data.coverage_start_date)).format('DD-MMM-YYYY')} to {moment(Date.parse(props.data.coverage_end_date)).format('DD-MMM-YYYY')}
                            </ItemBlockTitle>
                            <ItemBlockDescription>
                                Coverage dates
                            </ItemBlockDescription>
                        </ItemBlock>
                        <Border />
                    </>
                )}

                {props.data.status === 'expired' && (
                    <>
                        <ItemBlock mobileShows={true}>
                            <ItemBlockTitle>
                                {props.data.coverage_start_date}
                            </ItemBlockTitle>
                            <ItemBlockDescription>
                                Date shipped
                            </ItemBlockDescription>
                        </ItemBlock>
                        <Border />
                    </>
                )}

                <ItemBlock >
                    <ItemBlockTitle>
                        {props.data.premium_formatted}
                    </ItemBlockTitle>
                    <ItemBlockDescription>
                        Price/Premium
                    </ItemBlockDescription>
                </ItemBlock>


                {props.data.renewal !== null && (
                    <>
                        <Border />
                        <ItemBlock >
                            <ItemBlockTitle>
                                {props.data.coverage_start_date}
                            </ItemBlockTitle>
                            <ItemBlockDescription>
                                Renewal date
                            </ItemBlockDescription>
                        </ItemBlock>
                    </>
                )}

                <MobileLogo> 
                    <img src={props.data.partner.logo} style={{ width: '100%'}} /> 
                </MobileLogo>


            </ItemDetail>
            <FullLogo>
                <img src={props.data.partner.logo} />
            </FullLogo>
        </Item>
    );
}

export default Items;

const Item = styled.div`
    background: #FFFFFF;
    border-radius: 3px;
    display: flex;
    padding: 15px;
    margin-top: 18px;
    margin-bottom: 18px;
`;

const ItemDetail = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 820px) {
         width: 100%;    
    }
`;

const FullLogo = styled.div.attrs({ 'aria-label': 'full-logo' })`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center; 

    @media screen and (max-width: 820px) {
        display: none;    
    }
`;

const ItemButtonArea = styled.div`
    width: 10%;
    border-bottom: 2px solid #E0E4E8;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding-bottom: 12px;

    @media screen and (max-width: 480px) {
        display: none;
        
    }   
`;

const ButtonBorder = styled.div.attrs({ 'aria-label': 'button' })`
    width: 48px;
    height: 48px;
    border: 2px solid #FFD200;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius: 50%;
    cursor:pointer;

    @media screen and (max-width: 480px) {
        display: none;
    }

`;

const ButtonBorderClicked = styled.div.attrs({ 'aria-label': 'clicked-button' })`
    width: 48px;
    height: 48px;
    border: 2px solid #FFD200;
    display: flex;
    background-color:#FFE600;
    justify-content: center;
    align-items: center; 
    border-radius: 50%;
    cursor:pointer;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;


const ItemTitleArea = styled.div.attrs({ 'aria-label': 'title-area' })`
    width: 90%;
    border-bottom: 2px solid #E0E4E8;
    padding-bottom: 20px;
    display:flex;

    @media screen and (max-width: 480px) {
        width: 100%;
    }

    @media screen and (max-width: 820px) {
       padding-bottom: 6px;

    }
`;


const ItemTitleText = styled.div`
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #2D2D2D;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }

    @media screen and (min-width: 481px) and (max-width: 820px) {
        font-size: 18px;
    }
`;

const ItemDescriptionText = styled.div`
    font-family: Bitter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #73777C;

    @media screen and (max-width: 820px) {
        font-size: 12px;   
    }
`;

const ItemBlock = styled.div.attrs<ItemBlockProps>(
    ({  }) => ({
        'aria-label': 'item-block'
    })
  )<ItemBlockProps>`
    padding: 15px;
    &:before {
        content : "";
        position: absolute;
        left    : 0;
        bottom  : 0;
        height  : 1px;
        width   : 50%; 
        border-right:1px solid #E0E4E8;
      }

      @media screen and (max-width: 480px) {
        display: ${props => props.mobileShows ? "block" : "none"};
        padding: 10px 0px 10px 0px;
    }

`;

const ItemBlockTitle = styled.div`
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: 390;
    font-size: 16px;
    line-height: 24px;
    color: #2D2D2D;
`;

const ItemBlockDescription = styled.div`
    font-family: Bitter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #73777C;
`;

const Border = styled.div`
    border: 0.5px solid #E0E4E8;
    height: 40%;
    margin-top: 12px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`

const TabletLogo = styled.div`
    display: none;

    @media screen and (max-width: 480px) {
        display: none;
    }
    
    @media screen and  (min-width: 481px) and (max-width: 820px) {
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 20%;
        margin-left: auto;
    }

`

const MobileLogo = styled.div`
    display: none;
    @media screen and (max-width: 480px) {
        display: flex;
        width: 35%;
        margin-left: auto;
    }
`






