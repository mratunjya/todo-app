import styled, { css, keyframes } from 'styled-components';
import { FlexBox } from './Common/FlexBox';

export const Backdrop = styled(FlexBox)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
`;

export const MainModalWrapper = styled(FlexBox)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    max-width: 600px;
    height: 95vh;
    max-height: 400px;
    border-radius: 8px;
`;

const zoomIn = keyframes`
    from {
        opacity: 0.5;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const MainModal = styled(FlexBox)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    z-index: 3;
    padding: 20px;
    border-top: 4px solid #cddc39;
    animation: ${zoomIn} 0.25s ease-in-out;
`;

export const CrossButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;

    * {
        width: 100%;
        height: 100%;
    }
`;

export const Heading = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    letterspacing: 0.5px;
    text-align: center;
`;

export const TitleChip = styled.input`
    background-color: RGBA(139, 195, 74, 0.4);
    padding: 5px 10px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    width: fit-content;
    text-align: center;
`;

export const TaskDescription = styled.textarea`
    width: 100%;
    height: 100px;
    border: none;
    resize: none;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 8px;
`;

export const TaskForm = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-direction: column;
    row-gap: 20px;
`;

export const SubmitButton = styled.button`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        props.Update ? '#00bcd4' : props.Add && '#4ec34a'};
    height: 40px;
    width: 120px;
    min-width: fit-content;
    padding: 0 10px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    font-size: 1.25rem;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};

    svg {
        width: 25px;
    }

    p {
        width: fit-content;
        text-align: center;
        display: block;
    }
`;
