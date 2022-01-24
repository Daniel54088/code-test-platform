import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import styled from 'styled-components';
import { ItemsProps } from '../interfaces';

const Items: React.FC<ItemsProps> = (props) => {

    console.log(props.data)
    return (
        <Item>
            <ItemDetail>
                <ItemButton></ItemButton>
                <ItemTitleArea>
                    <ItemTitleText>{props.data.title}</ItemTitleText>
                    <ItemDescriptionText>{props.data.id} | {props.data.description} </ItemDescriptionText>
                </ItemTitleArea>

                <ItemBlock>
                    <ItemBlockTitle>
                        {props.data.payment_date}
                    </ItemBlockTitle>
                    <ItemBlockDescription>
                        Payment date
                    </ItemBlockDescription>
                </ItemBlock>
                <Border />

                {props.data.status === 'active' && (
                    <>
                        <ItemBlock>
                            <ItemBlockTitle>
                                {props.data.coverage_start_date} to {props.data.coverage_end_date}
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
                        <ItemBlock>
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

                <ItemBlock>
                    <ItemBlockTitle>
                        {props.data.premium_formatted}
                    </ItemBlockTitle>
                    <ItemBlockDescription>
                        Price/Premium
                    </ItemBlockDescription>
                </ItemBlock>
                <Border />

                {props.data.renewal !== null && (
                    <>
                        <ItemBlock>
                            <ItemBlockTitle>
                                {props.data.coverage_start_date}
                            </ItemBlockTitle>
                            <ItemBlockDescription>
                                Renewal date
                            </ItemBlockDescription>
                        </ItemBlock>
                        <Border />
                    </>
                )}



            </ItemDetail>
            <FullLogo>123123</FullLogo>
        </Item>
    );
}

export default Items;

const Item = styled.div`
    background: #FFFFFF;
    border-radius: 3px;
    display: flex;
    padding: 15px;
`;

const ItemDetail = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
`;

const FullLogo = styled.div`
    width: 20%;
    
`;

const ItemButton = styled.div`
    width: 10%;
    border-bottom: 2px solid #E0E4E8;
`;

const ItemTitleArea = styled.div`
    width: 90%;
    border-bottom: 2px solid #E0E4E8;
    padding-bottom: 20px;
`;


const ItemTitleText = styled.div`
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #2D2D2D;
`;

const ItemDescriptionText = styled.div`
    font-family: Bitter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #73777C;
`;

const ItemBlock = styled.div`
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
`





