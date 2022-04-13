import { FlexBox } from './Common/FlexBox';
import styled from 'styled-components';

export const TodoListWrapper = styled(FlexBox)`
    width: 95%;
    margin: 0 auto 60px;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    padding: 5px;
    background-color: #dbefdc;
    border: none;
    border-radius: 15px;

    * {
        color: #4caf50;
    }
`;
