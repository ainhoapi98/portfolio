import styled from "styled-components";
import {Colors} from "styles";

export const Wrapper = styled.div`
    cursor: pointer;
    background-color: ${Colors.background.accent};
    border-radius: 5px;
    height: 20px;
    width: fit-content;
    padding: 8px 16px;
    color: ${Colors.text.inverted};
    
    
    &:hover {
        background-color: ${Colors.background.accentSubtle};
    }
`