import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircularProgress from '@mui/material/CircularProgress';
import { CaptionProps, ListProps, SelectOption } from '../interfaces';
import { SelectProps } from '../interfaces';


const Select: React.FC<SelectProps> = (props) => {
    
    const [data, setData] = useState<Object[]>(props.data);

    const [isfocus, setIsfocus] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SelectOption | null>(null);

    const handleSelectClick = () => {
        setIsfocus(true);
    }


    useEffect(() => {
        setData(props.data)
    }, [props.data]);

    const customFilter = (option: { label: String }, searchText: string) => {
        if (
            option.label.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }

    const filterDataList = (value: string) => {

        let filteredData = props.data.filter((item: any) => {
            return customFilter(item, value);
        })

        setData(filteredData);
    }

    const handleOptionClick = (option: any) => {
        setSelectedItem(option);
        setIsfocus(false);
        setData(props.data);
    }


    return (
        <OuterContainer >
            <span className="fi fi-gr"></span>
            <SelectContainer
                onClick={handleSelectClick}
                onFocus={() => setIsfocus(true)}
                onBlur={() => {
                    setIsfocus(false);
                    setData(props.data);
                }}
            >
                <Dropdown>
                    <Caption isFocus={isfocus}>
                        {isfocus ? (
                            <Input
                                onChange={(e) => filterDataList(e.target.value)}
                                autoFocus
                            />
                        ) : (
                            <React.Fragment>
                                {selectedItem === null ? (
                                    <UnFocusText>
                                        Select
                                    </UnFocusText>
                                ) :
                                    (
                                        <SelectedOption>
                                            <span style={{ paddingRight: '1rem' }}>{selectedItem.pngUrl}</span>
                                            <ItemText>{selectedItem.label}</ItemText>
                                        </SelectedOption>
                                    )}
                            </React.Fragment>
                        )}

                        <KeyboardArrowDownIcon style={{ fill: '#697689' }} />
                    </Caption>

                </Dropdown>

            </SelectContainer>

            <List isFocus={isfocus}>
                {
                    props.loading
                        ? (
                            <SpinnerBox>
                                <CircularProgress />
                            </SpinnerBox>
                        )
                        : data.map((item: any, idx) =>
                            <Item key={idx}
                                onMouseDown={() => handleOptionClick(item)}>
                                <span style={{ paddingRight: '1rem' }}>{item.pngUrl}</span>
                                <ItemText>{item.label}</ItemText>
                            </Item>
                        )}

            </List>
        </OuterContainer>
    );
}

export default Select;

const OuterContainer = styled.div`
    display: flex; 
    flex-direction: column;  
`;

const SelectContainer = styled.div.attrs({ 'aria-label': 'select-container' })`
    width: 260px;
    background-color: transparent;
    magin-top: 8rem;
`;

const Dropdown = styled.div`

`;

const Caption = styled.div<CaptionProps>`
    border-color: ${props => props.isFocus ? "#6200EE" : "rgb(204, 204, 204)"};
    border-width: ${props => props.isFocus ? "2px" : "1px;"};
    border-style: solid;   
    padding: 11px 12px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
`;

const UnFocusText = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #697689;
}
`;

const Input = styled.input.attrs({ placeholder: "Search",'aria-label': 'country-search' })`
    width: 100%;
    border:0;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    &:focus {
        outline: none;
    }
`;

const List = styled.div.attrs<ListProps>(
    ({ isFocus }) => ({
        'aria-label': 'List'
    })
  )<ListProps>`
    width: 260px;
    border-radius: 5px;
    display:${props => props.isFocus ? "block" : "none"};
    box-shadow: 0 1px 24px 4px rgb(0 0 0 / 13%);
    padding-top: 10px;
    padding-bottom: 10px;
    max-height: 242px;
    overflow:auto;
`;

const Item = styled.div.attrs<any>(props => ({
    value: props.value
}))`
    padding: 11px 24px;
    cursor: pointer;
    width: 215px;
    display: flex;
    &:hover {
        background-color : #f5f5f5;
        color: #6200EE;
    }
`;

const ItemText = styled.span.attrs({ 'aria-label': 'country-name' })`
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 23px
`;

const SelectedOption = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;  
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;


const SpinnerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
`;