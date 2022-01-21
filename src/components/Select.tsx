import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CaptionProps, ListProps, SelectOption, SelectItem } from '../interfaces';


const initData = [
    {
        label: 'option 1'
    },
    {
        label: 'option 2'
    },
    {
        label: 'option 3'
    }
]

const Select = () => {

    const [data, setData] = useState<SelectOption[]>(initData);

    const [isfocus, setIsfocus] = useState(false);
    const [typeText, setTypeText] = useState('');
    const [selectedItem, setSelectedItem] = useState<SelectOption | null>(null);

    const handleSelectClick = () => {
        setIsfocus(true);
    }


    useEffect(()=>{

    },[data]);

    const customFilter = (option:SelectOption, searchText:string) =>{
        if (
          option.label.toLowerCase().includes(searchText.toLowerCase()) ) {
          return true;
        } else {
          return false;
        }
      }

    const filterDataList = (value: string) => {

        setTypeText(value);

        let filteredData = initData.filter(item => {
            return customFilter(item,value);
        })

        setData(filteredData);
    }

    const handleOptionClick = (option: any) => {
        setSelectedItem(option);
        setIsfocus(false);
        setData(initData);
    }

    return (
        <OuterContainer >
            <span className="fi fi-gr"></span>
            <SelectContainer
                onClick={handleSelectClick}
                onFocus={() => setIsfocus(true)}
                onBlur={() => {
                    console.log('thisone')
                    setIsfocus(false);
                    setData(initData);
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
                                    <SelectedOption>{selectedItem.label} </SelectedOption>
                                )}
                            </React.Fragment>
                        )}

                        <KeyboardArrowDownIcon style={{ fill: '#697689' }} />
                    </Caption>

                </Dropdown>

            </SelectContainer>
                
            <List isFocus={isfocus}>
                {data.map((item, idx) => <Item key={idx} onMouseDown={() => handleOptionClick(item)}>{item.label}</Item>)}

            </List>
        </OuterContainer>
    );
}

export default Select;

const OuterContainer = styled.div`
    display: flex; 
    flex-direction: column;  
    height: 200px;
`;

const SelectContainer = styled.div`
    width: 260px;
    background-color: transparent;
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

const Input = styled.input.attrs({ placeholder: "Search" })`
    width: 100%;
    border:0;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    &:focus {
        outline: none;
    }
`;

const List = styled.div<ListProps>`
    width: 260px;
    border-radius: 5px;
    display:${props => props.isFocus ? "block" : "none"};
    box-shadow: 0 1px 24px 4px rgb(0 0 0 / 13%);
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Item = styled.div.attrs<any>(props => ({
    value: props.value
}))`
    padding: 11px 24px;
    cursor: pointer;
    &:hover {
        background-color : #f5f5f5;
        color: #6200EE;
    }
`;


const SelectedOption = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;  
`;