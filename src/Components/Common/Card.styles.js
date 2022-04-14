import styled from 'styled-components';
import { FlexBox } from './FlexBox';

export const CardWrapper = styled(FlexBox)`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    width: ${(props) => (props.deleted ? '100%' : '25%')};
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    border-top: 4px solid ${(props) => (props.deleted ? '#f44336' : '#ffc107')};
    @media only screen and (max-width: 768px) {
        width: 95%;
        max-width: 360px;
    }
`;

export const TitleChip = styled(FlexBox)`
    background-color: RGBA(139, 195, 74, 0.4);
    padding: 5px 10px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    width: fit-content;
    word-break: break-word;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: ${(props) =>
        props.edit ? '#e8f4fd' : props.restore ? '#e5f4f3' : '#fcd9d6'};
    border: none;
    border-radius: 10px;

    * {
        width: 100%;
        height: 100%;
    }

    .edit {
        color: #2196f3;
    }

    .trash {
        color: #f44336;
    }

    .restore {
        color: #009688;
    }
`;
